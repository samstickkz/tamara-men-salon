// Sister brands cross-promoted on the home page and footer.
// Edit copy and links here — flows into HomeBrands component and Footer.

export type Brand = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accent: 'navy' | 'travel';
  badge?: string;
};

export const brands: Brand[] = [
  {
    name: 'PropStake',
    tagline: 'Grow your wealth without breaking the bank.',
    description:
      'Tap into the world\'s top real estate markets — Dubai, Qatar, Nigeria, Kenya, South Africa, the US, UK and Europe. Start earning passive income from as little as a few USD.',
    url: 'https://www.propstake.org/',
    cta: {
      label: 'Get on Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.prostake.app',
    },
    secondaryCta: { label: 'Visit propstake.org', href: 'https://www.propstake.org/' },
    accent: 'navy',
    badge: 'Real Estate · USD',
  },
  {
    name: 'Travel Expore',
    tagline: 'Work, relocate, and study abroad — done properly.',
    description:
      'UK work visas, UAE residency, US student visas. A Lagos-based agency with a free first consultation. From dossiers to interview prep, the whole route is covered.',
    url: 'https://travelexpore.com/',
    cta: { label: 'Visit Travel Expore', href: 'https://travelexpore.com/' },
    accent: 'travel',
    badge: 'Visas · Relocation',
  },
];
