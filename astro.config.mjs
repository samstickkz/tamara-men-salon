import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // SEO canonical / sitemap host. Mirror src/data/site.ts `url` and
  // public/robots.txt sitemap reference whenever this changes.
  // TODO: swap to 'https://www.tamaracleaning.qa' once the real domain is
  // attached in Vercel → Settings → Domains.
  site: 'https://tamara-cleaning-qa.vercel.app',
  // Hybrid output: pages remain pre-rendered static by default, but API routes
  // and any page that opts in with `export const prerender = false` render on
  // the server. Keeps the static SEO benefits while enabling form handling.
  output: 'static',
  adapter: vercel({
    // Pin to Node 22 — Node 18 retires on Vercel.
    runtime: 'nodejs22.x',
  }),
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
