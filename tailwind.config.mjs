/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Charcoal — dark surfaces, headings, footer
        charcoal: {
          50: '#F6F5F3',
          100: '#E6E4E0',
          200: '#BFBAB1',
          300: '#8A847A',
          400: '#4A4640',
          500: '#2A2723',
          600: '#1F1D1A',
          700: '#161412',
          800: '#0E0D0B',
          900: '#070605',
        },
        // Gold — primary accent, CTAs, dividers
        gold: {
          50: '#FBF7EE',
          100: '#F4ECD4',
          200: '#E9D8A6',
          300: '#DCBE73',
          400: '#CFA94D',
          500: '#B89758', // primary accent
          600: '#9A7C42',
          700: '#7B6234',
          800: '#5E4A28',
          900: '#3F311B',
        },
        // Cream / bone — light section backgrounds
        cream: {
          50: '#FBF8F1',
          100: '#F5EFE2',
          200: '#EDE2C8',
          300: '#E0D0A8',
        },
        // Ink — body text
        ink: {
          DEFAULT: '#1A1714',
          soft: '#3D3833',
          muted: '#6E6760',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        condensed: ['"Oswald"', '"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(15, 12, 8, 0.18)',
        card: '0 2px 12px -4px rgba(15, 12, 8, 0.10)',
        gold: '0 8px 30px -10px rgba(184, 151, 88, 0.55)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
