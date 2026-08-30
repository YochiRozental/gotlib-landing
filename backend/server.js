import express from 'express';

const app = express();
const PORT = process.env.PORT || 10000;
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://landing.gotlib.biz';

const BOARD_ID = '1550734525';
const GROUP_ID = 'group_mm6qjm7v';

const PRODUCT_MAP = {
  'בית כנסת חדש': 'בית כנסת בניה חדשה',
  'הרחבה / תוספת לבית כנסת קיים': 'תוספת לבית כנסת',
  'שיפוץ בית כנסת': 'תוספת לבית כנסת',
  'מקווה': 'מקווה',
  'בני ילדים': 'גני ילדים',
  'בית ספר': 'בית ספר',
  'מבנה מגורים': 'הום סטיילינג'
};

app.use(express.json({ limit: '50kb' }));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(origin === ALLOWED_ORIGIN ? 204 : 403);
  next();
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/api/leads', async (req, res) => {
  if (req.headers.origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ ok: false, error: 'Origin not allowed' });
  }
  if (!MONDAY_API_TOKEN) {
    console.error('MONDAY_API_TOKEN is not configured');
    return res.status(500).json({ ok: false, error: 'Server is not configured' });
  }

  const { fullName, phone, email, whatsapp, org, types } = req.body || {};
  if (!String(fullName || '').trim() || !String(phone || '').trim() || !String(email || '').trim()) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const selectedTypes = Array.isArray(types) ? types : [];
  const firstMappedProduct = selectedTypes.map((type) => PRODUCT_MAP[type]).find(Boolean);

  const columnValues = {
    phone__1: { phone: String(phone).trim(), countryShortName: 'IL' },
    email__1: { email: String(email).trim(), text: String(email).trim() }
  };

  if (String(whatsapp || '').trim()) {
    columnValues.phone_mm0mbhwj = { phone: String(whatsapp).trim(), countryShortName: 'IL' };
  }
  if (String(org || '').trim()) {
    columnValues.text_mm6q8vxy = String(org).trim();
  }
  if (firstMappedProduct) {
    columnValues.color5__1 = { label: firstMappedProduct };
  }

  const query = `mutation CreateLead($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
    create_item(board_id: $boardId, group_id: $groupId, item_name: $itemName, column_values: $columnValues) { id }
  }`;

  try {
    const mondayResponse = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_TOKEN,
        'Content-Type': 'application/json',
        'API-Version': '2026-07'
      },
      body: JSON.stringify({
        query,
        variables: {
          boardId: BOARD_ID,
          groupId: GROUP_ID,
          itemName: String(fullName).trim(),
          columnValues: JSON.stringify(columnValues)
        }
      })
    });

    const data = await mondayResponse.json();
    if (!mondayResponse.ok || data.errors || !data.data?.create_item?.id) {
      console.error('Monday create_item failed', JSON.stringify(data));
      return res.status(502).json({ ok: false, error: 'Could not save lead' });
    }

    return res.status(201).json({ ok: true, itemId: data.data.create_item.id });
  } catch (error) {
    console.error('Monday request failed', error);
    return res.status(502).json({ ok: false, error: 'Could not save lead' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gotlib landing backend listening on port ${PORT}`);
});
