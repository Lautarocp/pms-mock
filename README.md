# PMS — Property Management System

A full-featured property management frontend built with React 18, Vite, and Tailwind CSS. This is a **live demo** running entirely in the browser with no backend — all data lives in an in-memory mock store that resets on refresh.

> **Try it live →** [pms-mock-ruby.vercel.app](https://pms-mock-ruby.vercel.app)

---

## Features

- **Dashboard** — occupancy overview, revenue summary, pending and overdue payments at a glance
- **Complexes & Apartments** — manage properties across multiple buildings, filter by status (available, occupied, maintenance), adjust rent by percentage
- **Tenants** — full tenant profiles with guarantor info, lease history, financial balance, and payment ledger
- **Leases** — assign tenants to apartments, terminate or transfer leases between units
- **Payments** — itemized payment breakdown, mark as paid/unpaid, filter by status, generate monthly rent charges
- **Maintenance** — track requests with priority levels, update status, log repair costs and tenant charges
- **Expenses** — per-complex expense tracking by category
- **Reports** — revenue by month, revenue by complex, outstanding balances, expense breakdown by category (charts via Recharts)
- **Billing** — one-click monthly rent generation for all active leases
- **i18n** — English and Spanish support

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 |
| Data fetching | TanStack Query 5 |
| State | Zustand |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| i18n | i18next + react-i18next |

---

## How the mock works

There is no backend. Every API module (`src/api/`) delegates to a single in-memory store (`src/mock/store.ts`) seeded with realistic data:

- 2 apartment complexes (Barcelona, Madrid)
- 10 apartments with mixed statuses
- 6 tenants with active leases, lease history, and guarantors
- 15 payments in various states (PAID, PENDING, OVERDUE)
- 5 maintenance requests across priority levels
- 7 expenses across categories

All mutations (create, edit, delete, mark as paid, terminate lease, etc.) work for the duration of the session. Data resets on page refresh.

Login accepts any valid email and password (min 6 characters).

---

## Running locally

```bash
git clone https://github.com/Lautarocp/pms-mock.git
cd pms-mock
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and log in with any credentials.

---

## Project structure

```
src/
├── api/          # Mock API layer (delegates to mock/store.ts)
├── mock/         # In-memory store with seed data and CRUD logic
├── components/   # Layout, sidebar, shared components
├── hooks/        # React Query hooks per domain
├── pages/        # One folder per module
├── store/        # Zustand stores (auth, filters)
├── types/        # Shared TypeScript interfaces
└── locales/      # en.ts / es.ts translation strings
```

---

## Full-stack version

This mock is the frontend layer of a full-stack application built with:

- **Backend:** NestJS 10 + Prisma ORM
- **Database:** PostgreSQL 15
- **Auth:** JWT
- **Deployment:** Docker Compose on a self-hosted Linux server

The real application is not publicly accessible, but this demo covers the complete feature set of the UI.
