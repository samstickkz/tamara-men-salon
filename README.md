# Tamara Cleaning Services — Marketing Site

Production-ready, SEO-optimized static site for **Tamara Cleaning Services** (Doha, Qatar) built with **Astro + Tailwind CSS + TypeScript**.

- Static-rendered for fast loading and great SEO
- 27 indexable pages: home, about, contact, careers, services index + 11 service detail, 7 service area, 404, thank-you
- JSON-LD `LocalBusiness`, `Service`, `BreadcrumbList` and `FAQPage` schema
- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter card tags
- Sitemap (`/sitemap-index.xml`) generated automatically, `robots.txt` allowing all crawlers
- Mobile-first, accessible, semantic HTML with one H1 per page
- Three forms (contact, booking, careers with CV upload) → single `/api/submit` endpoint → Resend email
- Pricing toggle with hourly / monthly / annual modes
- Floating WhatsApp button + sticky header with WhatsApp CTA and "We're Hiring" pill

---

## Getting started

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # static output in ./dist
npm run preview
```

Requires Node.js 18.17+ (Node 20 LTS recommended).

---

## Project structure

```
src/
  components/        Reusable .astro components (Header, Footer, cards, schema)
  data/              Single source of truth — business info, services, areas, FAQs, long-form copy
  layouts/           BaseLayout (wraps head, header, footer, floating CTA)
  pages/
    index.astro
    about.astro
    contact.astro
    404.astro
    services/
      index.astro
      [slug].astro   # generated for each service in data/services.ts
    areas/
      [slug].astro   # generated for each area in data/areas.ts
  styles/
    global.css       Tailwind layers + utility class helpers
public/
  favicon.svg, og-image.svg, robots.txt
```

---

## Logo & icon assets

The brand mark lives at **`public/logo.png`** — referenced from the header, footer, and (as a tinted square composite) from every icon variant.

### Pipeline

`scripts/build-icons.mjs` is wired into `predev` and `prebuild`, so it runs automatically before every `npm run dev` and `npm run build`. To regenerate manually:

```bash
npm run icons
```

The script's logic is simple:

1. **If `public/logo.png` exists → use it as the master logo.**
2. **Otherwise → rasterize `public/logo.svg` into `public/logo.png`.** (This is what happens on a fresh clone, so the site always has a working master.)
3. From `public/logo.png`, generate square favicon and app-icon variants on a navy `#1F3A5F` background with the logo centered and tinted to the sand colour for contrast.
4. Render `og-image.png` (1200×630) from `public/og-image.svg`.
5. Write `public/site.webmanifest` for PWA install.

### Replacing the placeholder with your real artwork

**Easiest path — drop in your PNG:**

```bash
# place your branded PNG at public/logo.png (any size, transparent background recommended)
npm run icons
```

The script picks up the existing `logo.png` and regenerates every downstream asset (favicons, Apple touch icon, OG image composite background) from it. No code changes required.

**To customise the OG marketing image:** edit `public/og-image.svg` (or replace it with a 1200×630 PNG at `public/og-image.png` directly — if `og-image.png` already exists, the script won't overwrite the marketing copy).

### File reference

| File | Purpose |
|---|---|
| `logo.png` / `logo.svg` | Brand mark — used in header and footer. PNG is the master; SVG is the placeholder source if no PNG is supplied. |
| `favicon.svg` | Modern-browser favicon (scales to any DPI). |
| `favicon-32.png`, `favicon-16.png` | Legacy browser favicons (auto-generated). |
| `apple-touch-icon.png` (180×180) | iOS home-screen icon (auto-generated). |
| `icon-192.png`, `icon-512.png` | PWA / Android home-screen icons (auto-generated, referenced from `site.webmanifest`). |
| `og-image.png` (1200×630) | Social previews — auto-generated from `og-image.svg`. |
| `site.webmanifest` | PWA install manifest (auto-generated). |

---

## Swapping the placeholders

All business-wide values are in **[`src/data/site.ts`](src/data/site.ts)** — change once, propagated everywhere (header, footer, WhatsApp links, schema, email links).

```ts
// src/data/site.ts
phone: '+974 0000 0000',           // ← real phone number
phoneIntl: '+97400000000',         //   E.164 (digits + leading +)
whatsappNumber: '97400000000',     //   digits only for wa.me links
email: 'info@tamaracleaning.qa',   //   real email
```

Other things you may want to update:

- **Services & body copy** — `src/data/services.ts`, `src/data/serviceContent.ts`, `src/data/faqs.ts`
- **Service areas & body copy** — `src/data/areas.ts`, `src/data/areaContent.ts`
- **Geo coordinates** — `geo.latitude` / `geo.longitude` in `src/data/site.ts` (defaults to Doha city center)
- **Opening hours** — `openingHours` array in `src/data/site.ts`
- **Social URLs** — `social.instagram`, `social.facebook` in `src/data/site.ts`
- **Site URL** — `astro.config.mjs` (`site:`) so the sitemap and canonical tags emit the right host
- **Real OG image** — replace `public/og-image.svg` with a 1200x630 JPG/PNG (and update the `image` extension in `src/components/SeoMeta.astro`)
- **Real testimonials** — `testimonials` array in `src/pages/index.astro`

---

## Deploying (Vercel)

The site uses the `@astrojs/vercel` adapter — Vercel auto-detects everything. All marketing pages are pre-rendered static HTML; only the `/api/submit` endpoint runs as a serverless function (Node 22).

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Vercel, *Add New → Project* and import the repo. Build command and output are auto-detected — leave defaults.
3. **Set environment variables** under *Settings → Environment Variables* (details below).
4. Add your custom domain under *Settings → Domains*.

The repo no longer ships a `vercel.json` — the adapter writes `.vercel/output/config.json` at build time with the correct routing, immutable cache headers for `/_astro/*`, and the `/api/submit` function binding.

### Form submissions (contact / booking / careers)

All three forms POST to `/api/submit`, which:

1. Parses the multipart form data (including the CV file on the careers form).
2. Emails the submission via [Resend](https://resend.com) — the email itself is the record, with the CV as a PDF attachment.
3. Redirects the user to `/thank-you?form=<name>` with a tailored confirmation message.

**Required environment variables in Vercel:**

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_…` | Get one free at [resend.com](https://resend.com). Free tier: 3,000 emails/mo, 100/day. |
| `NOTIFICATION_EMAIL` | Where to receive submissions, e.g. `samuel@tamaracleaning.qa` | Must be a Resend-verified email (until you verify a sending domain). |
| `RESEND_FROM_EMAIL` | *(optional)* e.g. `Tamara Cleaning <notifications@tamaracleaning.qa>` | Defaults to Resend's shared `onboarding@resend.dev` (deliverable only to your verified Resend email). Set this once you verify your own sending domain in Resend. |

**Setup steps (one-time, 2 minutes):**

1. Sign up at [resend.com](https://resend.com) with the email you want to receive applications at.
2. **API Keys → Create API Key** → name it `tamara-prod` → copy the key.
3. In Vercel project → *Settings → Environment Variables* → add `RESEND_API_KEY` and `NOTIFICATION_EMAIL`. Apply to **Production** and **Preview** environments.
4. Redeploy — Vercel rebuilds with the new variables.
5. **(Optional, later)** verify your domain in Resend so emails come from `notifications@tamaracleaning.qa` instead of the shared sender, and the `replyTo` flows naturally. Set `RESEND_FROM_EMAIL` once done.

**Fallback behaviour:** if `RESEND_API_KEY` is missing or Resend errors, the submission is logged to the Vercel function logs (visible under *Logs → /api/submit*) so nothing is lost while you finish setup. The user still sees the success page.

### Other hosts

The Astro Vercel adapter is the only server-side dependency. If you ever switch hosts:
- **Cloudflare Pages, Netlify** — swap to the matching adapter (`@astrojs/cloudflare`, `@astrojs/netlify`). The `/api/submit` route works on all of them.
- **Pure static host** — drop the `output: 'static'`/adapter config and replace the form `action="/api/submit"` with a third-party service like Formspree.

---

## SEO checklist (already wired)

- [x] One `<h1>` per page, semantic H2/H3 hierarchy
- [x] Unique `<title>` and meta description per page
- [x] Canonical URLs on every page
- [x] Open Graph and Twitter Card tags
- [x] JSON-LD `CleaningService` (LocalBusiness type) on every page with NAP, CR number, geo, opening hours, area served, offer catalog
- [x] JSON-LD `Service` schema on each service detail page
- [x] JSON-LD `BreadcrumbList` on inner pages
- [x] JSON-LD `FAQPage` on home page and service detail pages
- [x] `sitemap-index.xml` via `@astrojs/sitemap`
- [x] `robots.txt` allowing all crawlers and pointing to the sitemap
- [x] hreflang `en` + `x-default` placeholders (ready for an Arabic version)
- [x] `lang="en"` `dir="ltr"` on `<html>`
- [x] Descriptive `alt` text on inline SVG images
- [x] Internal links between service pages, area pages, and CTAs
- [x] Mobile-first responsive layout
- [x] Inlined critical Tailwind, hashed long-cached asset bundles

### To do once the site is live

- Verify ownership in [Google Search Console](https://search.google.com/search-console) and submit `https://www.tamaracleaning.qa/sitemap-index.xml`.
- Verify ownership in [Bing Webmaster Tools](https://www.bing.com/webmasters) and submit the sitemap.
- Set up a Google Business Profile under the CR address and link the site.
- Replace the placeholder testimonials and OG image.

---

## Tech notes

- **Astro 5** with `@astrojs/tailwind` and `@astrojs/sitemap` integrations.
- **Tailwind 3** with a custom brand palette in `tailwind.config.mjs` — deep teal `#0F766E`, warm sand `#F5EFE6`, dark slate text.
- **TypeScript strict** — content models live in `src/data/*.ts` with explicit types.
- **No client-side JavaScript framework** — a small inline script powers the mobile nav toggle; everything else is server-rendered HTML/CSS.

## License

Proprietary — Tamara Cleaning Services. All rights reserved.
