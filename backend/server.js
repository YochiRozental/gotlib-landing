import express from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageOrientation } from 'docx';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import bidiFactory from 'bidi-js';

const require = createRequire(import.meta.url);
const bidi = bidiFactory();
const app = express();
const PORT = process.env.PORT || 10000;
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://landing.gotlib.biz';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const QUESTIONNAIRE_SECRET = process.env.QUESTIONNAIRE_SECRET;

const DEALS_BOARD_ID = '1550734529';
const DEAL_CLIENT_COLUMN_ID = 'link_to_contacts__1';
const CLIENTS_BOARD_ID = '1550734534';
const CLIENT_EMAIL_COLUMN_ID = 'email__1';
const QUESTIONNAIRE_URL = 'https://landing.gotlib.biz';
const FROM_EMAIL = 'info@gotlib.biz';
const API_VERSION = '2026-07';

const PRIORITY_LABELS = { budget: 'עמידה בתקציב', speed: 'מהירות תהליך', halacha: 'התאמה מדויקת להלכה', design: 'איכות ועיצוב', support: 'ליווי צמוד לאורך כל הדרך' };

app.use(express.json({ limit: '50kb' }));
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && origin === ALLOWED_ORIGIN) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(origin === ALLOWED_ORIGIN ? 204 : 403);
  next();
});
app.get('/health', (_req, res) => res.json({ ok: true }));

async function mondayRequest(query, variables = {}) {
  const response = await fetch('https://api.monday.com/v2', { method: 'POST', headers: { Authorization: MONDAY_API_TOKEN, 'Content-Type': 'application/json', 'API-Version': API_VERSION }, body: JSON.stringify({ query, variables }) });
  const data = await response.json();
  if (!response.ok || data.errors) throw new Error(`Monday API error: ${JSON.stringify(data.errors || data)}`);
  return data.data;
}

async function sendEmail({ to, subject, text, html }) {
  const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: `Gotlib Architecture <${FROM_EMAIL}>`, to: [to], subject, text, html }) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.id) throw new Error(`Resend API error (${response.status}): ${JSON.stringify(data)}`);
  return data;
}

function signQuestionnaire(dealId) {
  if (!QUESTIONNAIRE_SECRET) throw new Error('QUESTIONNAIRE_SECRET is missing');
  return crypto.createHmac('sha256', QUESTIONNAIRE_SECRET).update(String(dealId)).digest('hex');
}
function verifyQuestionnaire(dealId, token) {
  const supplied = String(token || '').trim().toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(supplied) || !QUESTIONNAIRE_SECRET) return false;
  const expected = signQuestionnaire(dealId);
  return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(supplied, 'hex'));
}
function cleanText(value, maxLength = 5000) { return String(value ?? '').trim().slice(0, maxLength); }
function normalizeAnswers(raw = {}) {
  const contact = raw.contact || {}, projectType = raw.projectType || {}, sizeAndUse = raw.sizeAndUse || {}, locationAndStatus = raw.locationAndStatus || {}, timeline = raw.timeline || {}, budgetAndFunding = raw.budgetAndFunding || {}, priorities = raw.priorities || {};
  const score = (value) => { const n = Number(value); return Number.isInteger(n) && n >= 0 && n <= 5 ? n : 0; };
  return {
    contact: { fullName: cleanText(contact.fullName, 200), phone: cleanText(contact.phone, 100), email: cleanText(contact.email, 320), whatsapp: cleanText(contact.whatsapp, 100), org: cleanText(contact.org, 300) },
    projectType: { types: Array.isArray(projectType.types) ? projectType.types.slice(0, 20).map((v) => cleanText(v, 200)) : [], typeOther: cleanText(projectType.typeOther, 500) },
    sizeAndUse: { weekday: cleanText(sizeAndUse.weekday, 100), shabbat: cleanText(sizeAndUse.shabbat, 100), extraSpaces: cleanText(sizeAndUse.extraSpaces) },
    locationAndStatus: { city: cleanText(locationAndStatus.city, 300), plot: cleanText(locationAndStatus.plot, 20), planStatus: cleanText(locationAndStatus.planStatus) },
    timeline: { targetDate: cleanText(timeline.targetDate, 20), timePressure: cleanText(timeline.timePressure) },
    budgetAndFunding: { budget: cleanText(budgetAndFunding.budget, 500), raised: cleanText(budgetAndFunding.raised, 500), funding: cleanText(budgetAndFunding.funding, 300) },
    priorities: { budget: score(priorities.budget), speed: score(priorities.speed), halacha: score(priorities.halacha), design: score(priorities.design), support: score(priorities.support) },
    notes: cleanText(raw.notes, 10000)
  };
}
async function getDeal(dealId) {
  const query = `query Deal($ids: [ID!]!) { items(ids: $ids) { id name board { id } column_values(ids: ["${DEAL_CLIENT_COLUMN_ID}"]) { ... on BoardRelationValue { linked_item_ids } } } }`;
  const data = await mondayRequest(query, { ids: [dealId] });
  const deal = data.items?.[0];
  return deal && String(deal.board?.id) === DEALS_BOARD_ID ? deal : null;
}
async function getLinkedClient(deal) {
  const clientId = deal.column_values?.[0]?.linked_item_ids?.[0];
  if (!clientId) return null;
  const query = `query Client($ids: [ID!]!) { items(ids: $ids) { id name board { id } column_values(ids: ["${CLIENT_EMAIL_COLUMN_ID}"]) { text value } } }`;
  const data = await mondayRequest(query, { ids: [String(clientId)] });
  const client = data.items?.[0];
  return client && String(client.board?.id) === CLIENTS_BOARD_ID ? client : null;
}

function answerSections(answers) {
  const val = (v) => cleanText(v) || 'לא נמסר';
  const types = answers.projectType.types.length ? answers.projectType.types.join(', ') : 'לא נמסר';
  return [
    ['פרטי קשר', [['שם מלא', val(answers.contact.fullName)], ['טלפון', val(answers.contact.phone)], ['מייל', val(answers.contact.email)], ['וואטסאפ', val(answers.contact.whatsapp)], ['עמותה / קהילה / מוסד', val(answers.contact.org)]]],
    ['סוג הפרויקט', [['סוגי פרויקט', types], ['אחר - פירוט', val(answers.projectType.typeOther)]]],
    ['גודל ושימוש', [['משתמשים צפויים ביום חול', val(answers.sizeAndUse.weekday)], ['בשבתות וחגים', val(answers.sizeAndUse.shabbat)], ['חללים נוספים', val(answers.sizeAndUse.extraSpaces)]]],
    ['מיקום וסטטוס', [['יישוב / שכונה', val(answers.locationAndStatus.city)], ['האם יש מגרש', val(answers.locationAndStatus.plot)], ['סטטוס תכנוני', val(answers.locationAndStatus.planStatus)]]],
    ['לוח זמנים', [['יעד לחנוכת הבית', val(answers.timeline.targetDate)], ['לחץ זמנים מיוחד', val(answers.timeline.timePressure)]]],
    ['תקציב ומימון', [['תקציב משוער', val(answers.budgetAndFunding.budget)], ['כספים שגויסו', val(answers.budgetAndFunding.raised)], ['מקור מימון עיקרי', val(answers.budgetAndFunding.funding)]]],
    ['סדר עדיפויות', Object.entries(PRIORITY_LABELS).map(([key, label]) => [label, answers.priorities[key] ? `${answers.priorities[key]} / 5` : 'לא דורג'])],
    ['הערות', [['הערות נוספות', val(answers.notes)]]]
  ];
}
function safeFilePart(value, fallback) { const cleaned = cleanText(value, 80).replace(/[\\/:*?"<>|\r\n]+/g, ' ').replace(/\s+/g, ' ').trim(); return cleaned || fallback; }

async function createDocx({ deal, client, answers }) {
  const children = [
    new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, heading: HeadingLevel.TITLE, children: [new TextRun({ text: 'גוטליב אדריכלים', bold: true, size: 34 })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, children: [new TextRun({ text: 'שאלון לקוח - סיכום תשובות', bold: true, size: 28 })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, children: [new TextRun({ text: `עסקה: ${deal.name || deal.id}`, size: 22 })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, children: [new TextRun({ text: `לקוח: ${client?.name || answers.contact.fullName}`, size: 22 })] }), new Paragraph({ text: '' })
  ];
  for (const [title, rows] of answerSections(answers)) {
    children.push(new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, heading: HeadingLevel.HEADING_2, spacing: { before: 260, after: 100 }, children: [new TextRun({ text: title, bold: true, size: 26 })] }));
    for (const [label, value] of rows) children.push(new Paragraph({ alignment: AlignmentType.RIGHT, bidirectional: true, spacing: { after: 80 }, children: [new TextRun({ text: `${label}: `, bold: true, size: 21 }), new TextRun({ text: value, size: 21 })] }));
  }
  const doc = new Document({ sections: [{ properties: { page: { size: { orientation: PageOrientation.PORTRAIT }, margin: { top: 900, right: 900, bottom: 900, left: 900 } } }, children }] });
  return Packer.toBuffer(doc);
}

let pdfFontBytesPromise;
async function getPdfFontBytes() {
  if (!pdfFontBytesPromise) pdfFontBytesPromise = (async () => {
    const cssPath = require.resolve('@fontsource/noto-sans-hebrew/400.css');
    const css = await fs.readFile(cssPath, 'utf8');
    const match = css.match(/url\((\.\/files\/[^)]+\.woff2)\)/);
    if (!match) throw new Error('Could not locate Noto Sans Hebrew font file');
    return fs.readFile(new URL(match[1], `file://${cssPath}`));
  })();
  return pdfFontBytesPromise;
}
function rtlVisual(text) {
  const input = String(text ?? '');
  if (!input) return '';
  try { const levels = bidi.getEmbeddingLevels(input, 'rtl'); return bidi.getReorderedString(input, levels); } catch { return input; }
}
async function createPdf({ deal, client, answers }) {
  const pdf = await PDFDocument.create(); pdf.registerFontkit(fontkit);
  const font = await pdf.embedFont(await getPdfFontBytes(), { subset: true });
  const pageSize = [595.28, 841.89], margin = 48, width = pageSize[0] - margin * 2; let page, y;
  const newPage = () => { page = pdf.addPage(pageSize); y = pageSize[1] - 55; };
  const wrap = (text, size, maxWidth) => { const words = String(text).split(/\s+/).filter(Boolean), lines = []; let line = ''; for (const word of words) { const test = line ? `${line} ${word}` : word; if (font.widthOfTextAtSize(test, size) <= maxWidth || !line) line = test; else { lines.push(line); line = word; } } if (line) lines.push(line); return lines.length ? lines : ['']; };
  const drawRtl = (text, { size = 11, bold = false, gap = 5 } = {}) => { const prefix = bold ? '● ' : ''; for (const logicalLine of wrap(prefix + text, size, width)) { if (y < 65) newPage(); const visual = rtlVisual(logicalLine); const textWidth = font.widthOfTextAtSize(visual, size); page.drawText(visual, { x: pageSize[0] - margin - textWidth, y, size, font, color: rgb(0.12, 0.15, 0.18) }); y -= size + gap; } };
  newPage(); drawRtl('גוטליב אדריכלים', { size: 19, bold: true, gap: 9 }); drawRtl('שאלון לקוח - סיכום תשובות', { size: 16, bold: true, gap: 8 }); drawRtl(`עסקה: ${deal.name || deal.id}`, { size: 11 }); drawRtl(`לקוח: ${client?.name || answers.contact.fullName}`, { size: 11, gap: 12 });
  for (const [title, rows] of answerSections(answers)) { if (y < 105) newPage(); drawRtl(title, { size: 14, bold: true, gap: 8 }); for (const [label, value] of rows) drawRtl(`${label}: ${value}`, { size: 10.5, gap: 5 }); y -= 7; }
  return Buffer.from(await pdf.save());
}

async function createMondayUpdate(dealId) {
  const body = `שאלון לקוח התקבל בתאריך ${new Intl.DateTimeFormat('he-IL', { timeZone: 'Asia/Jerusalem', dateStyle: 'short', timeStyle: 'short' }).format(new Date())}. מצורפים קובצי Word ו-PDF.`;
  const data = await mondayRequest('mutation CreateUpdate($itemId: ID!, $body: String!) { create_update(item_id: $itemId, body: $body) { id } }', { itemId: dealId, body });
  if (!data.create_update?.id) throw new Error('Monday did not return an update ID');
  return String(data.create_update.id);
}
async function uploadFileToUpdate(updateId, buffer, filename, mimeType) {
  const query = 'mutation ($file: File!) { add_file_to_update(update_id: ' + updateId + ', file: $file) { id name } }';
  const form = new FormData(); form.append('query', query); form.append('map', JSON.stringify({ file: 'variables.file' })); form.append('file', new Blob([buffer], { type: mimeType }), filename);
  const response = await fetch('https://api.monday.com/v2/file', { method: 'POST', headers: { Authorization: MONDAY_API_TOKEN, 'API-Version': API_VERSION }, body: form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.errors || !data.data?.add_file_to_update?.id) throw new Error(`Monday file upload failed: ${JSON.stringify(data.errors || data)}`);
  return data.data.add_file_to_update;
}

function page(title, message, success = true) { return `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{font-family:Arial,sans-serif;background:#f6f3ee;margin:0;display:grid;place-items:center;min-height:100vh;color:#252525}.card{background:white;max-width:620px;margin:24px;padding:42px;border-radius:18px;box-shadow:0 8px 30px #00000012;text-align:center}h1{font-size:28px;margin:0 0 16px}.ok{color:#276749}.bad{color:#9b2c2c}p{font-size:18px;line-height:1.7;margin:0}</style></head><body><div class="card"><h1 class="${success ? 'ok' : 'bad'}">${title}</h1><p>${message}</p></div></body></html>`; }

app.get('/send-questionnaire', async (req, res) => {
  const dealId = String(req.query.item || '').trim();
  if (!/^\d+$/.test(dealId)) return res.status(400).send(page('לא ניתן לשלוח', 'לא התקבל מזהה עסקה תקין.', false));
  if (!MONDAY_API_TOKEN || !RESEND_API_KEY || !QUESTIONNAIRE_SECRET) return res.status(500).send(page('לא ניתן לשלוח', 'השרת עדיין אינו מוגדר לשליחת השאלון.', false));
  try {
    const deal = await getDeal(dealId); if (!deal) return res.status(404).send(page('העסקה לא נמצאה', 'לא נמצאה עסקה מתאימה בלוח העסקאות.', false));
    const client = await getLinkedClient(deal); if (!client) return res.status(400).send(page('לקוח לא נמצא', 'לא נמצא לקוח תקין שמקושר לעסקה הזאת ב-Monday.', false));
    const email = String(client.column_values?.[0]?.text || '').trim(); if (!email || !email.includes('@')) return res.status(400).send(page('חסר אימייל', 'ללקוח המקושר אין כתובת אימייל תקינה.', false));
    const questionnaireLink = `${QUESTIONNAIRE_URL}/?deal=${encodeURIComponent(dealId)}&token=${signQuestionnaire(dealId)}`;
    await sendEmail({ to: email, subject: 'שאלון לקראת תכנון הפרויקט | גוטליב אדריכלות', text: `שלום ${client.name || ''},\n\nלקראת תכנון הפרויקט נשמח שתמלאו את השאלון בקישור הבא:\n${questionnaireLink}\n\nתודה,\nגוטליב אדריכלות`, html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.7;font-size:16px"><p>שלום ${client.name || ''},</p><p>לקראת תכנון הפרויקט נשמח שתמלאו את השאלון בקישור הבא:</p><p><a href="${questionnaireLink}" style="display:inline-block;padding:12px 22px;background:#222;color:#fff;text-decoration:none;border-radius:6px">למילוי השאלון</a></p><p>תודה,<br>גוטליב אדריכלות</p></div>` });
    return res.send(page('השאלון נשלח בהצלחה', `השאלון נשלח לכתובת ${email}.`));
  } catch (error) { console.error('Questionnaire send failed', error); return res.status(502).send(page('השליחה נכשלה', 'לא הצלחנו לשלוח את השאלון. אפשר לנסות שוב בעוד רגע.', false)); }
});

app.post('/api/questionnaire/submit', async (req, res) => {
  const dealId = String(req.body?.dealId || '').trim(), token = String(req.body?.token || '').trim();
  if (!MONDAY_API_TOKEN || !QUESTIONNAIRE_SECRET) return res.status(500).json({ ok: false, error: 'Server configuration is incomplete' });
  if (!/^\d+$/.test(dealId)) return res.status(400).json({ ok: false, error: 'Invalid deal ID' });
  if (!verifyQuestionnaire(dealId, token)) return res.status(403).json({ ok: false, error: 'Invalid questionnaire token' });
  const answers = normalizeAnswers(req.body?.answers); if (!answers.contact.fullName || !answers.contact.phone || !answers.contact.email) return res.status(400).json({ ok: false, error: 'Required contact fields are missing' });
  try {
    const deal = await getDeal(dealId); if (!deal) return res.status(404).json({ ok: false, error: 'Deal not found on the configured deals board' });
    const client = await getLinkedClient(deal);
    const [docxBuffer, pdfBuffer] = await Promise.all([createDocx({ deal, client, answers }), createPdf({ deal, client, answers })]);
    const clientName = safeFilePart(client?.name || answers.contact.fullName, 'לקוח'), dealName = safeFilePart(deal.name, `עסקה ${dealId}`), baseName = `שאלון לקוח - ${clientName} - ${dealName}`;
    const updateId = await createMondayUpdate(dealId);
    const docxAsset = await uploadFileToUpdate(updateId, docxBuffer, `${baseName}.docx`, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    const pdfAsset = await uploadFileToUpdate(updateId, pdfBuffer, `${baseName}.pdf`, 'application/pdf');
    console.log(`Questionnaire completed for deal ${dealId}`, { updateId, docxAssetId: docxAsset.id, pdfAssetId: pdfAsset.id });
    return res.json({ ok: true });
  } catch (error) { console.error('Questionnaire submission failed', error); return res.status(502).json({ ok: false, error: 'Could not generate or upload questionnaire documents' }); }
});

app.post('/api/leads', (_req, res) => res.status(410).json({ ok: false, error: 'Lead creation is disabled' }));
app.listen(PORT, '0.0.0.0', () => console.log(`Gotlib landing backend listening on port ${PORT}`));
