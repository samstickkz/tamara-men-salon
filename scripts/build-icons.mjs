#!/usr/bin/env node
// Build all branded image assets from a single source of truth.
//
// Flow:
//   1. If public/logo.png exists, use it as the master logo (your real artwork).
//      Otherwise rasterize public/logo.svg into public/logo.png so the rest of
//      the pipeline always has a PNG master to work from.
//   2. From public/logo.png, generate square favicon / app icon variants
//      (the logo is centered with padding on a navy background, so a horizontal
//      wordmark still looks deliberate as a small square).
//   3. Render og-image.png (1200×630) from og-image.svg — kept separate because
//      it carries marketing copy, not just the logo.
//   4. Write site.webmanifest for PWA install.
//
// Re-run any time you swap public/logo.png or edit the source SVGs:
//   npm run icons

import sharp from 'sharp';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');

const exists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const logoPng = resolve(publicDir, 'logo.png');
const logoSvg = resolve(publicDir, 'logo.svg');
const ogSvgPath = resolve(publicDir, 'og-image.svg');

await mkdir(publicDir, { recursive: true });

// 1) Ensure public/logo.png exists. If the user has provided their own, leave it
//    alone. Otherwise build it from logo.svg at a print-friendly density.
if (!(await exists(logoPng))) {
  if (!(await exists(logoSvg))) {
    console.error('ERROR: neither public/logo.png nor public/logo.svg exists.');
    process.exit(1);
  }
  const svg = await readFile(logoSvg);
  await sharp(svg, { density: 384 })
    .resize({ width: 1280, withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile(logoPng);
  console.log('wrote public/logo.png  (rasterized from logo.svg)');
} else {
  console.log('using existing public/logo.png as master');
}

// 2) Square icon variants. We center the wide logo on a navy square with
//    breathing room — works whether the source is a horizontal lockup or a
//    pre-cropped mark.
const NAVY = { r: 0x1f, g: 0x3a, b: 0x5f, alpha: 1 };
const buildSquareIcon = async (size, outFile) => {
  const inner = Math.round(size * 0.78);
  const innerBuf = await sharp(logoPng)
    .resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    // Brighten the logo against navy: dark navy glyphs would disappear, so we
    // tint the artwork to a sand-cream so it reads on the navy field.
    .tint({ r: 0xf5, g: 0xef, b: 0xe6 })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([{ input: innerBuf, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(resolve(publicDir, outFile));
  console.log(`wrote public/${outFile}  (${size}×${size})`);
};

await buildSquareIcon(180, 'apple-touch-icon.png');
await buildSquareIcon(192, 'icon-192.png');
await buildSquareIcon(512, 'icon-512.png');
await buildSquareIcon(32, 'favicon-32.png');
await buildSquareIcon(16, 'favicon-16.png');

// 3) OG image (1200×630) from og-image.svg.
if (await exists(ogSvgPath)) {
  const ogSvg = await readFile(ogSvgPath);
  await sharp(ogSvg, { density: 144 })
    .resize(1200, 630, { fit: 'contain' })
    .png({ compressionLevel: 9 })
    .toFile(resolve(publicDir, 'og-image.png'));
  console.log('wrote public/og-image.png  (1200×630)');
}

// 4) PWA manifest.
const manifest = {
  name: 'Tamara Cleaning Services',
  short_name: 'Tamara Cleaning',
  description: 'Professional cleaning services in Doha, Qatar.',
  start_url: '/',
  display: 'standalone',
  background_color: '#F5EFE6',
  theme_color: '#1F3A5F',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
};
await writeFile(
  resolve(publicDir, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2) + '\n'
);
console.log('wrote public/site.webmanifest');
