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
    const dealQuery = `query Deal($ids: [ID!]!) { items(ids: $ids) { id name board { id } column_values(ids: ["${DEAL_CLIENT_COLUMN_ID}"]) { ... on BoardRelationValue { linked_item_ids } } } }`;
    const dealData = await mondayRequest(dealQuery, { ids: [dealId] });
    const deal = dealData.items?.[0];
    if (!deal || String(deal.board?.id) !== DEALS_BOARD_ID) {
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

app.post('/api/leads', (_req, res) => {
  return res.status(410).json({ ok: false, error: 'Lead creation is disabled' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gotlib landing backend listening on port ${PORT}`);
});
