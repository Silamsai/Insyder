# Insyder

Marketing site for Insyder: account intelligence for revenue teams.

```
Insyder/
├── frontend/   Next.js 16 (App Router, React 19, react-icons)
│   ├── public/assets/logo.svg      logo
│   └── src/
│       ├── app/                    one folder per page + globals.css + layout.tsx
│       └── components/             Header, Footer, Logo, DemoForm
└── backend/    Node.js + Express API (receives the "Book a demo" form)
    ├── src/server.js
    ├── src/routes/demoRequests.js
    └── data/                       saved demo requests (demo-requests.json)
```

## Run locally

You need Node.js 20 or newer. Use two terminals.

**Terminal 1: backend** (http://localhost:5000)

```bash
cd backend
npm install
cp .env.example .env    # first time only
npm run dev
```

**Terminal 2: frontend** (http://localhost:3000)

```bash
cd frontend
npm install
cp .env.example .env.local    # first time only
npm run dev
```

Open http://localhost:3000. The whole site works without the backend; only the
"Book a demo" form needs it.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/product` | Product tour |
| `/discover` | Discover |
| `/monitor` | Monitor |
| `/accounts` | Accounts |
| `/contact-profiling` | Contact profiling |
| `/outreach` | Outreach |
| `/solutions` | Solutions by Teams |
| `/about` | About |
| `/demo` | Book a demo |

## API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| POST | `/api/demo-requests` | Save a demo request (`name`, `email` required; `company`, `role`, `website`, `message` optional) |
| GET | `/api/demo-requests` | List saved demo requests |

## Settings

- `frontend/.env.local`: `NEXT_PUBLIC_API_URL` (default `http://localhost:5000`)
- `backend/.env`: `PORT` (default `5000`) and `CORS_ORIGIN` (default `http://localhost:3000`, comma-separated for more than one)

## Production

```bash
cd frontend && npm run build && npm start
cd backend && npm start
```
