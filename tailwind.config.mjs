/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Bright cleaning blue — primary CTAs, hero, accents
        brand: {
          50: '#EFF4FF',
          100: '#DBE6FE',
          200: '#BFD2FE',
          300: '#93B4FD',
          400: '#608CFB',
          500: '#3D6EF9',
          600: '#1E5BFB', // primary
          700: '#1A4ADB',
          800: '#193FB0',
          900: '#1A3A8B',
          950: '#102357',
        },
        // Brand secondary — yellow accent for "GET A QUOTE" and highlights
        accent: {
          50: '#FFFCEB',
          100: '#FFF6C5',
          200: '#FFEC85',
          300: '#FFDB46',
          400: '#FFCA1F',
          500: '#FFB800', // primary accent
          600: '#E29400',
          700: '#BB6B02',
          800: '#985208',
          900: '#7C430B',
        },
        // Navy retained for logo, dark surfaces, footer
        navy: {
          50: '#F4F7FA',
          100: '#E2EAF3',
          400: '#7BA4C4',
          600: '#1F3A5F',
          700: '#182F4D',
          900: '#0C1928',
        },
        sand: {
          50: '#FBF8F3',
          100: '#F5EFE6',
          200: '#EADFC9',
          300: '#DCC8A4',
        },
        ink: {
          DEFAULT: '#0B1733', // dark text
          soft: '#334466',
          muted: '#6B7A99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(15, 23, 42, 0.12)',
        card: '0 2px 12px -4px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
