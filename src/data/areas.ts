export type Area = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  blurb: string;
  highlights: string[];
};

export const areas: Area[] = [
  {
    slug: 'doha',
    name: 'Doha',
    metaTitle: 'Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Professional cleaning in Doha — villas, apartments and offices across Bin Mahmoud, Msheireb, Old Airport, Al Sadd and beyond. Book on WhatsApp today.',
    blurb:
      'Doha is our home base. From Msheireb townhouses to Bin Mahmoud apartments and Al Sadd offices, we know the buildings, the tower management rules, and the dust patterns. Same-day visits for most postcodes.',
    highlights: [
      'Msheireb, Bin Mahmoud, Al Sadd, Old Airport',
      'Same-day scheduling for central Doha',
      'Tower and compound access experienced',
      'Bilingual coordination available',
    ],
  },
  {
    slug: 'lusail',
    name: 'Lusail',
    metaTitle: 'Cleaning Services in Lusail, Qatar | Tamara Cleaning',
    metaDescription:
      'Lusail apartment and villa cleaning — Marina, Fox Hills, Erkyah, Waterfront. Vetted cleaners, eco-friendly products, transparent flat-rate pricing.',
    blurb:
      'Lusail is one of the fastest-growing communities in Qatar — from Marina towers to Fox Hills and Waterfront villas. Our crews work tower security, parking, and lift-booking systems daily.',
    highlights: [
      'Marina District, Fox Hills, Erkyah, Waterfront',
      'Tower lift-booking and security forms handled',
      'Apartment and villa specialists',
      'Recurring weekly and biweekly slots',
    ],
  },
  {
    slug: 'al-wakrah',
    name: 'Al Wakrah',
    metaTitle: 'Cleaning Services in Al Wakrah, Qatar | Tamara Cleaning',
    metaDescription:
      'Al Wakrah villa, compound and office cleaning. Trusted crews, dust-aware methods built for Qatar climate. Same-week scheduling available.',
    blurb:
      'Al Wakrah and Al Wukair are full of family villas and compound houses where dust and sand are part of daily life. We bring routines built specifically for that — multi-pass dusting, dry-mop then wet-mop floors, and AC-vent attention.',
    highlights: [
      'Compound villa specialists',
      'Sand and dust-aware methods',
      'Same-week scheduling',
      'Long-term contracts available',
    ],
  },
  {
    slug: 'al-rayyan',
    name: 'Al Rayyan',
    metaTitle: 'Cleaning Services in Al Rayyan, Qatar | Tamara Cleaning',
    metaDescription:
      'Al Rayyan home and office cleaning. Education City, Aspire, Al Gharrafa, Al Waab. Vetted cleaners, supplies included, WhatsApp booking.',
    blurb:
      'Al Rayyan covers a huge area — from Aspire Zone and Education City to Al Gharrafa and Al Waab. We schedule routes by neighbourhood so you get a punctual arrival window, not a vague half-day slot.',
    highlights: [
      'Education City, Aspire, Al Gharrafa, Al Waab',
      'Tight arrival windows, not half-day slots',
      'Villa and townhouse specialists',
      'Move-in/move-out covered',
    ],
  },
  {
    slug: 'al-khor',
    name: 'Al Khor',
    metaTitle: 'Cleaning Services in Al Khor, Qatar | Tamara Cleaning',
    metaDescription:
      'Cleaning services in Al Khor and Al Thakhira — villas, compounds and offices. Trusted crews, transparent pricing, north-of-Doha route days.',
    blurb:
      'Al Khor is north of Doha and we run scheduled route days to keep travel costs out of your invoice. Compound villas, oil-and-gas family housing, and small offices are all part of our weekly rotation here.',
    highlights: [
      'Scheduled route days from Doha',
      'Compound and family-housing experienced',
      'Office and clinic rotations available',
      'Transparent flat-rate pricing',
    ],
  },
  {
    slug: 'the-pearl',
    name: 'The Pearl',
    metaTitle: 'Cleaning Services in The Pearl, Qatar | Tamara Cleaning',
    metaDescription:
      'The Pearl-Qatar apartment, townhouse and office cleaning. Porto Arabia, Viva Bahriya, Qanat Quartier. Tower-management approved, discreet crews.',
    blurb:
      'The Pearl is one of our busiest areas — Porto Arabia, Viva Bahriya, Qanat Quartier and Floresta. We are familiar with each tower\'s rules around access, parking, and lift bookings, so visits stay on time.',
    highlights: [
      'Porto Arabia, Viva Bahriya, Qanat Quartier',
      'Tower-management approved cleaners',
      'Apartment, duplex, and townhouse experienced',
      'Same-cleaner-each-visit on recurring plans',
    ],
  },
  {
    slug: 'west-bay',
    name: 'West Bay',
    metaTitle: 'Cleaning Services in West Bay, Doha | Tamara Cleaning',
    metaDescription:
      'West Bay office and high-rise apartment cleaning. Daily, evening, and weekend office rotations. Discreet crews, supplies included.',
    blurb:
      'West Bay is Doha\'s commercial heart and the place we run more office contracts than any other. Daily morning, evening and weekend rotations available, with the same crew lead for continuity.',
    highlights: [
      'High-rise office cleaning rotations',
      'Apartment and serviced-residence cleaning',
      'Daily, evening, and weekend slots',
      'Single point of contact per contract',
    ],
  },
];

export const getArea = (slug: string): Area | undefined =>
  areas.find((a) => a.slug === slug);
