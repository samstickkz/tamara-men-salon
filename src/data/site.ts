// Single source of truth for site-wide business information.
// Swap the WhatsApp number, email, and address details here when going live.

export const site = {
  name: 'Tamara Cleaning Services',
  shortName: 'Tamara Cleaning',
  legalName: 'Tamara Cleaning Services — Limited Liability Company (One Person)',
  owner: 'Samuel Daniel',
  ownerLinkedIn: 'https://www.linkedin.com/in/samuel-joseph-daniel/',
  established: '2025',
  cr: '226690',
  // SEO canonical host — mirror astro.config.mjs `site` and public/robots.txt
  // whenever this changes. Swap to https://www.tamaracleaning.qa once that
  // domain is live in Vercel.
  url: 'https://tamara-cleaning-qa.vercel.app',
  defaultLocale: 'en',
  phone: '+974 3019 2270',
  phoneIntl: '+97430192270',
  whatsappNumber: '97430192270', // digits only for wa.me links
  whatsappMessage: 'Hello Tamara Cleaning, I would like a quote for cleaning services.',
  email: 'info@tamaracleaning.qa',
  address: {
    streetAddress: 'Doha, Qatar',
    addressLocality: 'Doha',
    addressRegion: 'Ad Dawhah',
    postalCode: '',
    addressCountry: 'QA',
  },
  // Approximate geo coordinates for Doha city center.
  geo: {
    latitude: 25.276987,
    longitude: 51.520008,
  },
  // Trading hours — 7 days a week, customer-facing only.
  openingHours: [
    { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun'], opens: '08:00', closes: '20:00' },
    { days: ['Fri'], opens: '14:00', closes: '20:00' },
  ],
  areaServed: 'Qatar',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export const whatsappLink = (message?: string): string => {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
};

export const mailtoLink = (subject?: string): string => {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${site.email}${params}`;
};
