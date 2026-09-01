import express from 'express';
import crypto from 'node:crypto';

const app = express();
const PORT = process.env.PORT || 10000;
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://landing.gotlib.biz';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const QUESTIONNAIRE_SECRET = process.env.QUESTIONNAIRE_SECRET || MONDAY_API_TOKEN;

const DEALS_BOARD_ID = '1550734529';
const DEAL_CLIENT_COLUMN_ID = 'link_to_contacts__1';
const CLIENTS_BOARD_ID = '1550734534';
const CLIENT_EMAIL_COLUMN_ID = 'email__1';
const QUESTIONNAIRE_URL = 'https://landing.gotlib.biz';
const FROM_EMAIL = 'info@gotlib.biz';

app.use(express.json({ limit: '50kb' }));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(origin === ALLOWED_ORIGIN ? 204 : 403);
  next();
});

app.get('/health', (_req, res) => res.json({ ok: true }));

async function mondayRequest(query, variables = {}) {
  const response = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      Authorization: MONDAY_API_TOKEN,
      'Content-Type': 'application/json',
      'API-Version': '2026-07'
    },
    body: JSON.stringify({ query, variables })
  });
  const data = await response.json();
  if (!response.ok || data.errors) {
    throw new Error(`Monday API error: ${JSON.stringify(data.errors || data)}`);
  }
  return data.data;
}

async function sendEmail({ to, subject, text, html }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `Gotlib Architecture <${FROM_EMAIL}>`,
      to: [to],
      subject,
      text,
      html
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.id) {
    throw new Error(`Resend API error (${response.status}): ${JSON.stringify(data)}`);
  }
  return data;
}

function signQuestionnaire(dealId) {
  return crypto.createHmac('sha256', QUESTIONNAIRE_SECRET).update(String(dealId)).digest('hex');
}

function verifyQuestionnaire(dealId, token) {
  const supplied = String(token || '').trim().toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(supplied) || !QUESTIONNAIRE_SECRET) return false;
  const expected = signQuestionnaire(dealId);
  return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(supplied, 'hex'));
}

function cleanText(value, maxLength = 5000) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function normalizeAnswers(raw = {}) {
  const contact = raw.contact || {};
  const projectType = raw.projectType || {};
  const sizeAndUse = raw.sizeAndUse || {};
  const locationAndStatus = raw.locationAndStatus || {};
  const timeline = raw.timeline || {};
  const budgetAndFunding = raw.budgetAndFunding || {};
  const priorities = raw.priorities || {};
  const score = (value) => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 0 && n <= 5 ? n : 0;
  };

  return {
    contact: {
      fullName: cleanText(contact.fullName, 200),
      phone: cleanText(contact.phone, 100),
      email: cleanText(contact.email, 320),
      whatsapp: cleanText(contact.whatsapp, 100),
      org: cleanText(contact.org, 300)
    },
    projectType: {
      types: Array.isArray(projectType.types) ? projectType.types.slice(0, 20).map((v) => cleanText(v, 200)) : [],
      typeOther: cleanText(projectType.typeOther, 500)
    },
    sizeAndUse: {
      weekday: cleanText(sizeAndUse.weekday, 100),
      shabbat: cleanText(sizeAndUse.shabbat, 100),
      extraSpaces: cleanText(sizeAndUse.extraSpaces)
    },
    locationAndStatus: {
      city: cleanText(locationAndStatus.city, 300),
      plot: cleanText(locationAndStatus.plot, 20),
      planStatus: cleanText(locationAndStatus.planStatus)
    },
    timeline: {
      targetDate: cleanText(timeline.targetDate, 20),
      timePressure: cleanText(timeline.timePressure)
    },
    budgetAndFunding: {
      budget: cleanText(budgetAndFunding.budget, 500),
      raised: cleanText(budgetAndFunding.raised, 500),
      funding: cleanText(budgetAndFunding.funding, 300)
    },
    priorities: {
      budget: score(priorities.budget),
      speed: score(priorities.speed),
      halacha: score(priorities.halacha),
      design: score(priorities.design),
      support: score(priorities.support)
    },
    notes: cleanText(raw.notes, 10000)
  };
}

async function getDeal(dealId) {
  const query = `query Deal($ids: [ID!]!) { items(ids: $ids) { id name board { id } column_values(ids: ["${DEAL_CLIENT_COLUMN_ID}"]) { ... on BoardRelationValue { linked_item_ids } } } }`;
  const data = await mondayRequest(query, { ids: [dealId] });
  const deal = data.items?.[0];
  if (!deal || String(deal.board?.id) !== DEALS_BOARD_ID) return null;
  return deal;
}

function page(title, message, success = true) {
  return `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{font-family:Arial,sans-serif;background:#f6f3ee;margin:0;display:grid;place-items:center;min-height:100vh;color:#252525}.card{background:white;max-width:620px;margin:24px;padding:42px;border-radius:18px;box-shadow:0 8px 30px #00000012;text-align:center}h1{font-size:28px;margin:0 0 16px}.ok{color:#276749}.bad{color:#9b2c2c}p{font-size:18px;line-height:1.7;margin:0}</style></head><body><div class="card"><h1 class="${success ? 'ok' : 'bad'}">${title}</h1><p>${message}</p></div></body></html>`;
}

app.get('/send-questionnaire', async (req, res) => {
  const dealId = String(req.query.item || '').trim();
  if (!/^\d+$/.test(dealId)) {
    return res.status(400).send(page('לא ניתן לשלוח', 'לא התקבל מזהה עסקה תקין.', false));
  }
  if (!MONDAY_API_TOKEN || !RESEND_API_KEY || !QUESTIONNAIRE_SECRET) {
    console.error('Missing server configuration for questionnaire sending');
    return res.status(500).send(page('לא ניתן לשלוח', 'השרת עדיין אינו מוגדר לשליחת השאלון.', false));
  }

  try {
    const deal = await getDeal(dealId);
    if (!deal) {
      return res.status(404).send(page('העסקה לא נמצאה', 'לא נמצאה עסקה מתאימה בלוח העסקאות.', false));
    }

    const linkedIds = deal.column_values?.[0]?.linked_item_ids || [];
    const clientId = linkedIds[0];
    if (!clientId) {
      return res.status(400).send(page('חסר לקוח', 'לא מחובר לקוח לעסקה הזאת ב-Monday.', false));
    }

    const clientQuery = `query Client($ids: [ID!]!) { items(ids: $ids) { id name board { id } column_values(ids: ["${CLIENT_EMAIL_COLUMN_ID}"]) { text value } } }`;
    const clientData = await mondayRequest(clientQuery, { ids: [String(clientId)] });
    const client = clientData.items?.[0];
    if (!client || String(client.board?.id) !== CLIENTS_BOARD_ID) {
      return res.status(400).send(page('לקוח לא נמצא', 'הלקוח המקושר אינו נמצא בלוח הלקוחות.', false));
    }

    const email = String(client.column_values?.[0]?.text || '').trim();
    if (!email || !email.includes('@')) {
      return res.status(400).send(page('חסר אימייל', 'ללקוח המקושר אין כתובת אימייל תקינה.', false));
    }

    const signature = signQuestionnaire(dealId);
    const questionnaireLink = `${QUESTIONNAIRE_URL}/?deal=${encodeURIComponent(dealId)}&token=${signature}`;

    await sendEmail({
      to: email,
      subject: 'שאלון לקראת תכנון הפרויקט | גוטליב אדריכלות',
      text: `שלום ${client.name || ''},\n\nלקראת תכנון הפרויקט נשמח שתמלאו את השאלון בקישור הבא:\n${questionnaireLink}\n\nתודה,\nגוטליב אדריכלות`,
      html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.7;font-size:16px"><p>שלום ${client.name || ''},</p><p>לקראת תכנון הפרויקט נשמח שתמלאו את השאלון בקישור הבא:</p><p><a href="${questionnaireLink}" style="display:inline-block;padding:12px 22px;background:#222;color:#fff;text-decoration:none;border-radius:6px">למילוי השאלון</a></p><p>תודה,<br>גוטליב אדריכלות</p></div>`
    });

    console.log(`Questionnaire sent via Resend for deal ${dealId} to ${email}`);
    return res.send(page('השאלון נשלח בהצלחה', `השאלון נשלח לכתובת ${email}.`));
  } catch (error) {
    console.error('Questionnaire send failed', error);
    return res.status(502).send(page('השליחה נכשלה', 'לא הצלחנו לשלוח את השאלון. אפשר לנסות שוב בעוד רגע.', false));
  }
});

app.post('/api/questionnaire/submit', async (req, res) => {
  const dealId = String(req.body?.dealId || '').trim();
  const token = String(req.body?.token || '').trim();

  if (!MONDAY_API_TOKEN || !QUESTIONNAIRE_SECRET) {
    return res.status(500).json({ ok: false, error: 'Server configuration is incomplete' });
  }
  if (!/^\d+$/.test(dealId)) {
    return res.status(400).json({ ok: false, error: 'Invalid deal ID' });
  }
  if (!verifyQuestionnaire(dealId, token)) {
    return res.status(403).json({ ok: false, error: 'Invalid questionnaire token' });
  }

  const answers = normalizeAnswers(req.body?.answers);
  if (!answers.contact.fullName || !answers.contact.phone || !answers.contact.email) {
    return res.status(400).json({ ok: false, error: 'Required contact fields are missing' });
  }

  try {
    const deal = await getDeal(dealId);
    if (!deal) {
      return res.status(404).json({ ok: false, error: 'Deal not found on the configured deals board' });
    }

    // The endpoint deliberately does not return success until the DOCX + PDF
    // generation and Monday file uploads are implemented and both complete.
    console.log(`Validated questionnaire submission for deal ${dealId}`, {
      schemaVersion: req.body?.schemaVersion || 1,
      dealName: deal.name,
      answerSections: Object.keys(answers)
    });
    return res.status(503).json({ ok: false, error: 'Document generation is not enabled yet' });
  } catch (error) {
    console.error('Questionnaire submission validation failed', error);
    return res.status(502).json({ ok: false, error: 'Could not validate questionnaire submission' });
  }
});

app.post('/api/leads', (_req, res) => {
  return res.status(410).json({ ok: false, error: 'Lead creation is disabled' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gotlib landing backend listening on port ${PORT}`);
});
