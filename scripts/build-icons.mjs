#!/usr/bin/env node
// Build branded image assets from a single source of truth.

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

// 1) Always rebuild logo.png from logo.svg so we pick up brand changes.
if (await exists(logoSvg)) {
  const svg = await readFile(logoSvg);
  await sharp(svg, { density: 384 })
    .resize({ width: 1280, withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile(logoPng);
  console.log('wrote public/logo.png  (rasterized from logo.svg)');
} else if (!(await exists(logoPng))) {
  console.error('ERROR: neither public/logo.png nor public/logo.svg exists.');
  process.exit(1);
}

// 2) Square icon variants — center logo on charcoal square with breathing room.
const CHARCOAL = { r: 0x16, g: 0x14, b: 0x12, alpha: 1 };
const buildSquareIcon = async (size, outFile) => {
  const inner = Math.round(size * 0.78);
  const innerBuf = await sharp(logoPng)
    .resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    // Tint to gold so the dark wordmark reads on the charcoal field.
    .tint({ r: 0xb8, g: 0x97, b: 0x58 })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: CHARCOAL,
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
  name: 'Tamara Men Salon',
  short_name: 'Tamara Men',
  description: "Premium men's grooming in Doha, Qatar.",
  start_url: '/',
  display: 'standalone',
  background_color: '#161412',
  theme_color: '#B89758',
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
