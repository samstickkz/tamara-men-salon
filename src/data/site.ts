// Single source of truth for site-wide business information.
// Swap the WhatsApp number, email, and address details here when going live.

export const site = {
  name: 'Tamara Men Salon',
  shortName: 'Tamara Men',
  legalName: 'Tamara Men Salon',
  owner: 'Tamara Men Salon',
  established: '2026',
  // SEO canonical host — set by deploy step.
  url: 'https://tamara-men-salon.vercel.app',
  defaultLocale: 'en',
  tagline: 'Shaves & Trims',
  heading: 'We Know Your Style Better',
  phone: '+974 7077 5905',
  phoneIntl: '+97470775905',
  whatsappNumber: '97470775905',
  whatsappMessage: 'Hello Tamara Men Salon, I would like to book an appointment.',
  email: 'tamara247salon@gmail.com',
  address: {
    streetAddress: 'B Ring Road, Street 220, Building 100, Zone 15, Unit 1',
    neighbourhood: 'Al Doha Jadeed',
    plusCode: '7GGM+2X6',
    addressLocality: 'Doha',
    addressRegion: 'Ad Dawhah',
    postalCode: '',
    addressCountry: 'QA',
  },
  mapsUrl: 'https://www.google.com/maps/place/Tamara+Men+Salon/@25.2738921,51.5161336,17z',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Tamara+Men+Salon,+B+Ring+Road,+Doha,+Qatar&output=embed',
  geo: {
    latitude: 25.2738,
    longitude: 51.5161,
  },
  openingHours: [
    { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], opens: '09:00', closes: '20:00' },
    { days: ['Sun'], opens: '09:00', closes: '18:00' },
  ],
  hoursDisplay: {
    weekdays: 'Mon–Sat: 9AM – 8PM',
    weekend: 'Sun: 9AM – 6PM',
  },
  // Per-weekday open/close in 24h (0=Sun…6=Sat). Powers the smart time picker.
  hoursByDay: {
    0: { open: '09:00', close: '18:00' }, // Sunday
    1: { open: '09:00', close: '20:00' },
    2: { open: '09:00', close: '20:00' },
    3: { open: '09:00', close: '20:00' },
    4: { open: '09:00', close: '20:00' },
    5: { open: '09:00', close: '20:00' },
    6: { open: '09:00', close: '20:00' },
  },
  rating: {
    score: '5.0',
    count: 48,
  },
  promo: {
    en: 'Now open in Doha — 20% off your first appointment this month.',
    ar: 'افتتحنا في الدوحة — خصم 20٪ على أول حجز هذا الشهر.',
  },
  areaServed: 'Qatar',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://www.tiktok.com/@tamara_salon_qatar',
    googleReview: 'https://g.page/r/Cd8MxeVUg974EBM/review',
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
