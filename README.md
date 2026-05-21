# SR Tek Solutions - Next.js

This repository contains a modernized SR Tek Solutions website built with Next.js App Router and reusable components.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Configure environment values:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:3000

## Routes

- /
- /about
- /services
- /clients
- /contact

## Contact Form Wiring

The API route at src/app/api/contact/route.ts supports two delivery methods:

1. Formspree: set FORMSPREE_ENDPOINT in .env.local
2. Custom backend/webhook: set CONTACT_WEBHOOK_URL in .env.local

If neither variable is configured, submissions still return success in local/dev mode so the UI flow can be tested.

## Branding Assets

- Logo: public/brand/logo.svg
- Client logos: public/brand/clients/*.svg

Replace these with your approved brand files while keeping the same paths, or update references in src/lib/site-data.ts.

## Legacy Static Version

The previous static prototype is preserved in legacy-static/.
