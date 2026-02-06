# Phase 2 Roadmap: Valve Academy Training Portal

This document outlines the planned features and improvements for the next phase of development.

## 1. Real Email Integration
**Current Status:** Emails are currently stubbed and logged to the server console.
**Goal:** Implement a transactional email service to send real notifications.
**Action Items:**
-   Set up **Nodemailer** with an SMTP provider (e.g., SendGrid, AWS SES, or Outlook).
-   Configure environment variables for SMTP credentials.
-   Replace the `console.log` email stub in `src/lib/email.ts` with the actual sending logic.
-   Create HTML email templates for:
    -   Request Confirmation (to Customer)
    -   New Request Notification (to Sales/Admins)
    -   Quote Approval (to Sales)
    -   Trainer Assignment (to Trainers)

## 2. PDF Quote Generation
**Current Status:** Quotes are viewable as web pages (`/quote/[reference]`).
**Goal:** Allow customers and sales reps to download professional PDF versions of the quotes.
**Action Items:**
-   Integrate a PDF generation library (e.g., `@react-pdf/renderer` or `puppeteer`).
-   Create a "Download PDF" button on the Quote page.
-   Ensure the PDF layout matches the Celeros branding guidelines (fonts, colors, logos).
-   Include the detailed breakdown and Terms & Conditions in the PDF.

## 3. Enhanced Admin Tools (Availability Management)
**Current Status:** Trainer availability logic exists in the database/algorithm but lacks a dedicated UI for manual overrides.
**Goal:** Provide Admins with a calendar interface to manage trainer schedules.
**Action Items:**
-   Build a "Trainer Availability" dashboard in the Admin section.
-   Visual calendar view showing assigned training blocks.
-   Ability to manually mark days as "Unavailable" (e.g., holidays, sick leave, other commitments).
-   Update the request assignment algorithm to respect these manual blocks.

## 4. Mobile & UI Polish
**Current Status:** Functional light theme with responsive grid.
**Goal:** Refine the mobile experience and visual interactions.
**Action Items:**
-   Standardize spacing concepts on mobile devices.
-   Improve navigation menu animations.
-   Ensure all form inputs are touch-friendly.
