# Deployment Guide (Vercel)

This application is built with Next.js and is ready for Vercel deployment. However, because it currently uses **SQLite** (a local file database), you must switch to a cloud database (like Vercel Postgres or Supabase) for the live version, as Vercel does not support persistent local files.

## Step 1: Set up a Cloud Database
The easiest option on Vercel is **Vercel Postgres**.

1.  Log in to [Vercel](https://vercel.com).
2.  Import your GitHub repository (`davidyoungrs/thevalveacademy`).
3.  During project creation (or afterwards in the "Storage" tab), click **"Connect Store"** -> **"Postgres"**.
4.  Accept the terms and create the database.
5.  Vercel will automatically add the necessary environment variables (`POSTGRES_URL`, etc.) to your project.

## Step 2: Update Code for Postgres
You need to generate a Prisma Client compatible with Postgres (instead of SQLite).

### 1. Update `prisma/schema.prisma`
Change the datasource provider from `sqlite` to `postgresql`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") // Vercel sets this automatically if you link Vercel Postgres
}
```

> **Note**: If using Vercel Postgres, they map `POSTGRES_PRISMA_URL` to `DATABASE_URL` usually, or you might need to update the env var name in schema to `env("POSTGRES_PRISMA_URL")` if usage implies pooling. For standard setup, `DATABASE_URL` is fine if you copy the connection string.

### 2. Push Schema to Cloud DB
In your local terminal (after updating schema and setting `.env` to the cloud URL temporarily, or using Vercel CLI):
```bash
npx prisma db push
```
This creates the tables in your new cloud database.

### 3. Seed Data
Run the seed script to populate the cloud DB with your modules:
```bash
node prisma/seed.js
```

## Step 3: Configure Environment Variables
In your Vercel Project Settings > **Environment Variables**, ensure you have:

| Variable | Value |
| :--- | :--- |
| `NEXTAUTH_URL` | `https://your-project.vercel.app` (The deployment URL) |
| `NEXTAUTH_SECRET` | A long random string (generate with `openssl rand -base64 32`) |
| `SMTP_HOST` | Your email provider host (e.g., specific to GoDaddy/Outlook) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | Your email password |
| `SMTP_FROM` | `Valve Academy <sales@valveacademy.com>` |
| `DATABASE_URL` | (Auto-set if linked, otherwise paste connection string) |

## Step 4: Deploy
Once the database is linked and variables set, pushing to `main` (which we just did) will trigger a deployment.

### Handling "Postinstall"
Your `package.json` already has `"postinstall": "prisma generate"`, which is correct. This ensures Vercel generates the client during build.

## Switching Back to Local Dev
If you want to keep developing locally with SQLite while Prod uses Postgres:
- Keep `schema.prisma` as `sqlite` locally.
- When deploying, you might need two schema files or just switch it before push.
- **Better approach**: Use Postgres locally too (via Docker) to match production.
