import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // SEO canonical / sitemap host. Mirror src/data/site.ts `url` and
  // public/robots.txt sitemap reference whenever this changes.
  site: 'https://tamara-men-salon.vercel.app',
  output: 'static',
  adapter: vercel({
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
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
