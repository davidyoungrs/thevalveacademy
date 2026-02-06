# Valve Academy Training Portal

A web-based platform for managing training requests, generating automated quotes, and assigning trainers for Valve Academy courses.

## Features
-   **Module Catalog**: Browse training modules (VE01 - Applications, VE02 - Operations & Maintenance).
-   **Request Engine**: Smart form that captures requirements (Online vs. CFT Facility) and calculates pricing dynamically.
-   **Automated Quoting**: Generates instant indicative quotes with discount logic.
-   **Role-Based Dashboards**:
    -   **Sales**: Submit requests, view status.
    -   **Trainer**: View assigned jobs, manage inbox.
    -   **Approver**: Review discounts and large quotes.
    -   **Admin**: Manage modules, users, and system settings.
-   **Availability Matching**: Intelligent algorithm to check trainer availability dates.

## Technology Stack
-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS (Celeros FT Light Theme)
-   **Database**: SQLite (Development) / PostgreSQL (Production ready) using Prisma ORM
-   **Forms**: React Hook Form + Zod

## Setup Instructions

### 1. Prerequisites
-   Node.js (v18 or higher)
-   npm or yarn

### 2. Installation
```bash
# Install dependencies
npm install
```

### 3. Database Setup
The project uses Prisma with a local SQLite database for development.

```bash
# Push the schema to the database
npx prisma db push

# Seed the database with initial users and modules
node prisma/seed.js
```

### 4. Running the Application
```bash
# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

## User Accounts (Seed Data)
| Role | Email |
|------|-------|
| Admin | `admin@valveacademy.com` |
| Sales | `sales@valveacademy.com` |
| Trainer | `mark.wheat@valveacademy.com` |
| Approver | `approver1@valveacademy.com` |

*Password for all dev accounts:* `password123`

## Phase 2 Roadmap
See [PHASE2_ROADMAP.md](./PHASE2_ROADMAP.md) for future development plans including Email Integration and PDF Generation.
