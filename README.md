<div align="center">

<img src="frontend/public/assets/logo.svg" alt="Insyder logo" height="56" />

# Insyder

**Account intelligence for revenue teams.**

Find the right accounts. See the evidence. Reach the people who decide.
Walk into every first meeting prepared.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)

</div>

<p align="center">
  <img src="frontend/public/discover-clean.png" alt="Insyder Discover screen showing companies found, each with its signal, sources and score" width="900" />
</p>

---

## Table of contents

- [About the project](#about-the-project)
- [Product features](#product-features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Available scripts](#available-scripts)
- [Site pages](#site-pages)
- [API reference](#api-reference)
- [Deployment](#deployment)

---

## About the project

This repository contains the **marketing website for Insyder**, along with a small
API that receives "Book a demo" requests.

Insyder helps sales teams sell into change. It spots companies going through the
changes an offer depends on, shows the evidence behind each signal, finds the
people who make the decision, and briefs sellers on each account before they call.

It is built for technology sales teams, SDR teams, managed service providers,
agencies and channel partners.

> The Insyder product itself (sign-in and the app) lives in a separate repository,
> `insyder-portal`. The **Sign in** button on this site links to it.

## Product features

The site presents the five connected workflows of the Insyder product:

| Workflow | What it does |
| --- | --- |
| **Discover** | Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher. |
| **Monitor** | Saved playbooks that re-run research on a schedule you choose, within your research quota, and log every new signal they find. |
| **Accounts** | Your target accounts with their research status, buying signals, qualification brief and deals, from watchlist to sales acceptance to CRM. |
| **Contact profiling** | Find the IT and technology decision makers at an account, each with a source, and prepare for every conversation with a role hypothesis. |
| **Outreach** | Researchers, reviewers and SDRs work from one task list. Drafts come from reviewed evidence, outcomes are logged and handoffs stay clear. |

## Tech stack

**Frontend** (`frontend/`)

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and [TypeScript 5](https://www.typescriptlang.org/)
- [react-icons](https://react-icons.github.io/react-icons/) for icons
- Plain CSS (`src/app/globals.css`), no CSS framework
- ESLint with `eslint-config-next`

**Backend** (`backend/`)

- [Node.js 20+](https://nodejs.org/) using ES modules
- [Express 5](https://expressjs.com/) with [cors](https://github.com/expressjs/cors)
- JSON file storage in `backend/data/` (no database needed; designed to be swapped for one later without changing the routes)
- Built-in Node features for env files (`--env-file-if-exists`) and auto-reload (`--watch`), so there are no extra dev dependencies

## Project structure

```
Insyder/
├── frontend/                     Next.js marketing site
│   ├── public/
│   │   ├── assets/logo.svg       Logo
│   │   └── discover*.png         Product screenshots
│   └── src/
│       ├── app/                  One folder per page, plus layout.tsx and globals.css
│       └── components/           Header, Footer, Logo, DemoForm, GetStarted, LegalPage, nav
│
└── backend/                      Express API
    ├── src/
    │   ├── server.js             App setup, CORS, health check, error handling
    │   ├── store.js              JSON file storage
    │   └── routes/
    │       └── demoRequests.js   "Book a demo" endpoints and validation
    └── data/                     Saved records (demo-requests.json, git-ignored)
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **20 or newer**
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone <repository-url>
cd Insyder
```

### 2. Start the backend

Runs on **http://localhost:5000**.

```bash
cd backend
npm install
cp .env.example .env      # first time only
npm run dev
```

### 3. Start the frontend

In a second terminal. Runs on **http://localhost:3001**.

```bash
cd frontend
npm install
cp .env.example .env.local   # first time only
npm run dev
```

Open **http://localhost:3001** in your browser.

### Notes

- The whole site works without the backend. Only the **Book a demo** form needs it.
- The **Sign in** button opens the login page of the Insyder portal (`insyder-portal`),
  which runs on http://localhost:3000. Start the portal as well if you want that button
  to work locally.

## Configuration

Both apps read their settings from environment files. Copy the `.env.example` file
in each folder to get started.

### Frontend: `frontend/.env.local`

| Variable | Default | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:5000` | Base URL of the backend API |
| `NEXT_PUBLIC_PORTAL_URL` | `http://localhost:3000` | Base URL of the Insyder portal (used by **Sign in**) |

### Backend: `backend/.env`

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `5000` | Port the API listens on |
| `CORS_ORIGIN` | `http://localhost:3001` | Allowed frontend origin(s), comma-separated for more than one |

## Available scripts

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 3001 |
| `npm run build` | Build the site for production |
| `npm start` | Serve the production build on port 3001 |
| `npm run lint` | Run ESLint |

### Backend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with auto-reload on file changes |
| `npm start` | Start the API |

## Site pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/product` | Product tour |
| `/discover` | Discover |
| `/monitor` | Monitor |
| `/accounts` | Accounts |
| `/contact-profiling` | Contact profiling |
| `/outreach` | Outreach |
| `/solutions` | Solutions by team |
| `/about` | About |
| `/demo` | Book a demo |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## API reference

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check, returns `{ "status": "ok" }` |
| `POST` | `/api/demo-requests` | Save a demo request |
| `GET` | `/api/demo-requests` | List all saved demo requests |

### `POST /api/demo-requests`

**Request body (JSON)**

| Field | Required | Max length | Notes |
| --- | --- | --- | --- |
| `name` | Yes | 120 | |
| `email` | Yes | 200 | Must be a valid email address |
| `company` | No | 200 | |
| `role` | No | 120 | |
| `website` | No | 300 | Must start with `http://` or `https://` |
| `message` | No | 2000 | |

**Example**

```bash
curl -X POST http://localhost:5000/api/demo-requests \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","company":"Example Ltd"}'
```

**Responses**

- `201 Created`: `{ "ok": true, "id": "<uuid>" }`
- `400 Bad Request`: `{ "error": "<reason>" }` when validation fails

Saved requests are written to `backend/data/demo-requests.json`.

## Deployment

Build and run both apps in production mode:

```bash
# Frontend
cd frontend
npm install
npm run build
npm start

# Backend
cd backend
npm install
npm start
```

Before deploying, set the environment variables for your domains, for example
`NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_PORTAL_URL` on the frontend, and
`CORS_ORIGIN` on the backend so it accepts requests from your live site.

> `NEXT_PUBLIC_*` values are baked in at build time, so set them **before** running
> `npm run build`.
