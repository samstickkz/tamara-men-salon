// Home-page marketing content blocks: pricing, team, projects, blog posts.

export type Plan = {
  name: string;
  badge?: string;
  popular?: boolean;
  monthly: number;
  annual: number; // billed as effective per-month price when paying yearly
  unit: string; // e.g. "QAR / month"
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export type HourlyPlan = {
  name: string;
  badge?: string;
  popular?: boolean;
  rate: number;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

// Pricing competitive against Doha market (typical 1BR deep ~QR 300-600,
// 3BR ~QR 500-900, villa ~QR 900-1500). Monthly subscriptions bundle visits
// per month. Annual prepay = 10% saving on the per-month rate.
export const plans: Plan[] = [
  {
    name: 'Basic Clean',
    badge: 'Starter',
    monthly: 499,
    annual: 449,
    unit: 'QAR / month',
    description: '4 visits/month — studios and 1-bedroom apartments. Floors, kitchen, bathroom, bins.',
    features: [
      '4 weekly cleaning visits',
      'Up to 2 cleaners per visit',
      '3-hour standard visit',
      'Eco-friendly supplies included',
      'WhatsApp coordination',
      'Cancel any time',
    ],
    cta: { label: 'Book Basic', href: '/services/apartment-cleaning' },
  },
  {
    name: 'Deep Clean',
    badge: 'Most Popular',
    popular: true,
    monthly: 999,
    annual: 899,
    unit: 'QAR / month',
    description: '4 weekly visits + 1 monthly deep clean — 2 to 4 bedroom homes.',
    features: [
      '4 weekly visits + 1 monthly deep',
      'Up to 3 cleaners per visit',
      'Inside cabinets & oven',
      'AC vents & grilles wiped',
      'Limescale & grout brighten',
      'Priority scheduling',
      'Cancel any time',
    ],
    cta: { label: 'Book Deep Clean', href: '/services/deep-cleaning' },
  },
  {
    name: 'Villa Premium',
    badge: 'Full Service',
    monthly: 1499,
    annual: 1349,
    unit: 'QAR / month',
    description: 'Weekly villa visits with full crew. Indoor, outdoor majlis, driveway, garage.',
    features: [
      '4 weekly villa visits',
      'Up to 4 cleaners + team lead',
      'Outdoor majlis & driveway',
      'Garage and window detail',
      'Quarterly deep clean included',
      'Same-day support window',
      'Cancel any time',
    ],
    cta: { label: 'Book Villa Premium', href: '/services/villa-cleaning' },
  },
];

// Hourly tiers — for ad-hoc bookings (3-hour minimum).
// Doha market rates: 35–60 QAR/hr. These undercut the floor while still
// covering supplies on the All-In and Specialist tiers.
export const hourlyPlans: HourlyPlan[] = [
  {
    name: 'Standard',
    badge: 'You supply',
    rate: 29,
    description: 'Ad-hoc cleaning where you provide the supplies. Perfect for a quick top-up.',
    features: [
      'Vetted, trained cleaner',
      '1-hour minimum booking',
      'You provide cleaning supplies',
      'Greater Doha coverage',
      'WhatsApp booking',
    ],
    cta: { label: 'Book Standard Hourly', href: '/contact' },
  },
  {
    name: 'All-In',
    badge: 'Most Popular',
    popular: true,
    rate: 39,
    description: 'Cleaner arrives with eco-friendly supplies, microfibre kit, and a vacuum.',
    features: [
      'Vetted, trained cleaner',
      '1-hour minimum booking',
      'All supplies and equipment',
      'Eco-friendly, low-fragrance products',
      'Greater Doha coverage',
      'WhatsApp booking',
    ],
    cta: { label: 'Book All-In Hourly', href: '/contact' },
  },
  {
    name: 'Specialist',
    badge: 'Deep work',
    rate: 59,
    description: 'For sofa/carpet extraction, post-construction, or detail deep cleaning.',
    features: [
      'Senior team lead on site',
      '1-hour minimum booking',
      'HEPA vacuum + hot-water extraction',
      'Limescale and grout treatment',
      'Greater Doha coverage',
      'Photo walk-through after visit',
    ],
    cta: { label: 'Book Specialist Hourly', href: '/contact' },
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  fact: string;
  hue: 'blue' | 'yellow' | 'navy' | 'sand';
  link?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Samuel Daniel',
    role: 'Founder & Owner',
    initials: 'SD',
    fact: 'Built Tamara around one promise: same crew, same standard, every visit.',
    hue: 'navy',
    link: 'https://www.linkedin.com/in/samuel-joseph-daniel/',
  },
  {
    name: 'Tamara Samuel',
    role: 'Partner',
    initials: 'TS',
    fact: 'The namesake of the company. Drives standards, hospitality, and customer care.',
    hue: 'blue',
  },
  {
    name: 'Beauty Porbeni',
    role: 'Partner',
    initials: 'BP',
    fact: 'Leads operations and crew coordination across Doha route days.',
    hue: 'yellow',
  },
  {
    name: 'Nonso Emmanuel',
    role: 'Partner',
    initials: 'NE',
    fact: 'Handles client onboarding, quotes, and after-visit quality reviews.',
    hue: 'sand',
  },
];

export type Project = {
  title: string;
  category: string;
  area: string;
  image: string;     // remote photo URL
  fallback: 'villa' | 'apartment' | 'office' | 'postCon' | 'sofa' | 'kitchen';
};

// Real Unsplash photos covering each cleaning category. Each card has a flat
// SVG fallback in ProjectCard in case the remote image fails.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=70&auto=format&fit=crop`;

export const projects: Project[] = [
  {
    title: '4-bed villa weekly contract',
    category: 'Villa Cleaning',
    area: 'Al Waab',
    image: u('1564013799919-ab600027ffc6'),
    fallback: 'villa',
  },
  {
    title: 'Tower apartment deep clean',
    category: 'Deep Cleaning',
    area: 'The Pearl',
    image: u('1600585154340-be6161a56a0c'),
    fallback: 'apartment',
  },
  {
    title: 'Full-floor office handover',
    category: 'Office Cleaning',
    area: 'West Bay',
    image: u('1497366216548-37526070297c'),
    fallback: 'office',
  },
  {
    title: 'Post-renovation handover',
    category: 'Post-construction',
    area: 'Lusail Marina',
    image: u('1581873372796-635b67ca2008'),
    fallback: 'postCon',
  },
  {
    title: 'Majlis carpet & sofa revival',
    category: 'Sofa & Carpet',
    area: 'Old Airport',
    image: u('1631679706909-1844bbd07221'),
    fallback: 'sofa',
  },
  {
    title: 'Kitchen & bathroom restoration',
    category: 'Deep Cleaning',
    area: 'Al Sadd',
    image: u('1556909114-f6e7ad7d3136'),
    fallback: 'kitchen',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: '#',
    title: '10 cleaning tips for Qatar\'s dusty season',
    category: 'Tips',
    date: 'Apr 14, 2026',
    excerpt: 'How to stay ahead of the dust between cleaning visits — from AC filter swaps to multi-pass dusting.',
    readTime: '6 min read',
  },
  {
    slug: '#',
    title: 'Move-out cleaning: what landlords in Qatar inspect',
    category: 'Tenants',
    date: 'Mar 28, 2026',
    excerpt: 'The actual checklist letting agents use — and the five places they always look first.',
    readTime: '4 min read',
  },
  {
    slug: '#',
    title: 'Are eco-friendly products as effective in Qatar?',
    category: 'Cleaning 101',
    date: 'Mar 12, 2026',
    excerpt: 'A practical look at low-VOC products against limescale, hard water, and desert dust.',
    readTime: '5 min read',
  },
];
