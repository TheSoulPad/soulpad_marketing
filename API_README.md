# Minimal Theme API (proxy)

This repository includes a small, optional API for proxying a remote JSON endpoint (for example to fetch theme data). It is intentionally minimal so you can run it locally or deploy as a serverless function.

Files added

- `api/server.js` - Minimal Express server exposing `/api/get-themes?url=...`
- `netlify/functions/getThemes.js` - Netlify Function equivalent (same behaviour)

Usage

- Run local express proxy:

```bash
# Start the proxy and call it with ?url=
npm run api
# Then in another terminal:
curl "http://localhost:4000/api/get-themes?url=https://example.com/themes.json"
```

- Run with Netlify Dev (requires `netlify-cli`):

```bash
npm run netlify:dev
# then call the function at /.netlify/functions/getThemes?url=...
```

Environment

- `TARGET_URL` - optional environment variable used when you don't want to supply `?url=` in the query.

Notes

- The Netlify function uses the same code path (proxy fetch) and returns JSON. Adjust CORS or auth headers as needed.
- If you deploy this to a platform that supports serverless functions (Netlify, Vercel, Render), the function file can be used as-is.
