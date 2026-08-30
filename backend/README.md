# Monday leads backend

Render Web Service settings:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Environment variables:

- `MONDAY_API_TOKEN` = personal monday API token (secret; never commit it)
- `ALLOWED_ORIGIN` = `https://landing.gotlib.biz`

Health check: `/health`

Lead endpoint: `POST /api/leads`
