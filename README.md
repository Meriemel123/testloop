# Testloop — landing page

Pre-launch validation page for Testloop, pattern testing for independent knit &
crochet designers. Next.js (App Router) + TypeScript + Tailwind CSS, with an
interactive product tour built from mock data and a real waitlist signup form
backed by Supabase + Resend.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- `next/font/google`: Geist, Fraunces (italic), Caveat
- Framer Motion for the demo tab crossfade (respects `prefers-reduced-motion`)
- Supabase (waitlist table, service-role insert from a Server Action)
- Resend (signup confirmation email)
- Vercel Analytics (`cta_click`, `demo_tab_view`, `form_start`, `form_submit`)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set these in `.env.local` locally and in your Vercel project settings for
production:

| Variable | Description |
| --- | --- |
| `SUPABASE_URL` | Your Supabase project URL. |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key — server-only, never exposed to the browser. Used because the `waitlist` table has RLS enabled with no public policies. |
| `RESEND_API_KEY` | Resend API key, used to send the signup confirmation email. |
| `FROM_EMAIL` | Sender address for that email, e.g. `"Testloop <hello@yourdomain.com>"`. |

Without these set, the form still works end-to-end but the server action will
log a warning and return a friendly "something went wrong" error — see
[`src/lib/waitlist.ts`](src/lib/waitlist.ts).

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run [`supabase/schema.sql`](supabase/schema.sql). It
   creates the `waitlist` table and enables RLS with **no** policies, so the
   table is only reachable via the service role key from the server action.
3. Copy the project URL and the `service_role` key (Project Settings → API)
   into your env vars.

## Editing copy

All page copy lives in one file: [`src/lib/content.ts`](src/lib/content.ts).
Each section of the page (hero, features, pricing, FAQ, etc.) has its own
exported object — edit the strings there, no need to touch components.

Placeholders to replace before launch: `[YOUR NAME]` (founder signature in
`finalCta` and the confirmation email in `src/lib/waitlist.ts`) and
`[YOUR EMAIL]` (FAQ lead and footer contact link).

## Editing the interactive demo

The product tour's mock data (studio, tests, applicants, progress, versions,
ratings, gallery photos, floating notifications) lives in
[`src/lib/demo-data.ts`](src/lib/demo-data.ts). The five tab screens are
separate components under [`src/components/demo/`](src/components/demo/), one
file per tab, all driven by that data file — edit the data to change names,
numbers or copy without touching component logic.

## Replacing the knit textures with real photos

Every tinted block you see (the demo frame background, gallery tiles, swatch
thumbnails) is drawn by
[`KnitTexture`](src/components/ui/KnitTexture.tsx), a small SVG stitch
pattern in one of five color pairs (`sage`, `clay`, `ochre`, `rose`, `rust`).

To swap a tile for a real photo, replace the `<KnitTexture />` usage with a
`next/image` (or plain `img`) inside the same wrapping `<span>`/container —
the gallery tiles in [`Gallery.tsx`](src/components/sections/Gallery.tsx) and
[`GalleryScreen.tsx`](src/components/demo/GalleryScreen.tsx) are the two
places most likely to get real finished-object photos first.

## Project structure

```
src/
  app/                 Root layout, home page, OG image route
  components/
    sections/          One component per landing-page section
    demo/              The interactive product tour (one file per tab)
    ui/                 Button, Pill, KnitTexture, Annotation, Badge, ...
  lib/
    content.ts         All page copy
    demo-data.ts        All mock data for the interactive demo
    waitlist.ts          Signup Server Action (validation, Supabase, Resend)
    supabase-admin.ts    Server-only Supabase client (service role)
supabase/
  schema.sql            waitlist table + RLS
```

## Deploying

Deploy target is Vercel: connect the repo, add the environment variables
above in the project settings, and deploy. Vercel Analytics is already wired
up via `@vercel/analytics`.
