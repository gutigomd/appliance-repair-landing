# Appliance Repair Landing – Next.js App

Modern, accessible landing page for a U.S. appliance repair service, migrated from a static HTML MVP to a production‑ready stack: **Next.js (App Router) + TypeScript + Tailwind CSS + react-hook-form + zod**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict, no `any`)
- **Styling**: Tailwind CSS
- **Forms & Validation**: `react-hook-form` + `zod`
- **API**: App Router route handler at `/api/contact`

## Project Structure

```text
app/
  layout.tsx           # Root layout, metadata, global styles
  page.tsx             # Home page (header, hero, services, contact, footer)
  globals.css          # Tailwind + global CSS (flip-cards, smooth scroll)
  api/
    contact/
      route.ts         # POST /api/contact – validates & simulates handling form data

components/
  BackgroundArt.tsx    # Decorative semi-transparent fridge/washer SVG background
  Header.tsx           # Top navigation with desktop + mobile (burger) menu
  Hero.tsx             # Hero section + CTA buttons + quick booking card
  QuickBookingForm.tsx # Small hero form using react-hook-form + zod
  ServiceCard.tsx      # Reusable flip-card for a single service
  ServicesSection.tsx  # Grid of service cards (uses ServiceCard)
  ContactForm.tsx      # Main contact / booking form with validation & API call
  Footer.tsx           # Footer with copyright & social links

lib/
  api/
    contact.ts         # Typed client helper to POST to /api/contact
  constants/
    services.ts        # Service descriptions & metadata for flip-cards
  validation/
    contact.ts         # zod schema for contact/booking forms

types/
  forms.ts             # `ContactFormValues` derived from zod schema
  service.ts           # `Service` / `ServiceIconType` for service cards
```

## Running the Project Locally

1. **Install dependencies**

```bash
cd appliance-repair-next
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. **Open in browser**

Navigate to `http://localhost:3000` to see the landing page.

## Notes

- Both the hero quick booking form and the main contact form share a single **zod** schema and validate:
  - required `name`, `phone`, `description`
  - U.S. phone number: exactly 10 digits after stripping non-digits
- The `/api/contact` endpoint reuses the same schema on the server side to keep client and server in sync and is ready to be wired to email/CRM or a database.
- Flip-card animations and background illustrations are implemented with lightweight CSS/SVG and remain fully keyboard-accessible (`focus-within` triggers the flip). 

