export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  icon: string; // simple SVG path or emoji-free identifier rendered in components
  highlights: string[];
};

// Order matters — used for nav and home grid.
export const services: Service[] = [
  {
    slug: 'villa-cleaning',
    title: 'Villa Cleaning Services in Doha',
    shortTitle: 'Villa Cleaning',
    tagline: 'Full villa and compound house cleaning across Qatar.',
    metaTitle: 'Villa Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Professional villa cleaning in Doha and across Qatar. Trained crews, eco-friendly products, dust-aware methods built for Qatar villas and compounds. Book on WhatsApp.',
    icon: 'home',
    highlights: [
      'Multi-floor and large-area villa specialists',
      'Trained two-to-four-person crews',
      'Dust-aware methods for Qatar climate',
      'Weekly, biweekly, or one-time service',
    ],
  },
  {
    slug: 'apartment-cleaning',
    title: 'Apartment Cleaning in Doha & The Pearl',
    shortTitle: 'Apartment Cleaning',
    tagline: 'Reliable apartment cleaning across Doha towers and compounds.',
    metaTitle: 'Apartment Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Affordable, reliable apartment cleaning in Doha, The Pearl, West Bay and Lusail. Discreet vetted cleaners, flexible scheduling, transparent flat-rate pricing.',
    icon: 'building',
    highlights: [
      'Studios up to 4-bedroom apartments',
      'Tower- and compound-friendly access',
      'Same cleaner each visit on recurring plans',
      'Eco-friendly, low-fragrance products',
    ],
  },
  {
    slug: 'office-cleaning',
    title: 'Office Cleaning Services in Qatar',
    shortTitle: 'Office Cleaning',
    tagline: 'Daily, evening, and weekend office cleaning across Qatar.',
    metaTitle: 'Office Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Commercial office cleaning in Doha and across Qatar. Daily, evening, and weekend schedules. Vetted teams, supplies included, transparent monthly contracts.',
    icon: 'briefcase',
    highlights: [
      'Daily, nightly, and weekend rotations',
      'Vetted staff with company IDs',
      'Supplies, consumables, and chemicals included',
      'Monthly contracts with clear SLAs',
    ],
  },
  {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning Services in Doha',
    shortTitle: 'Deep Cleaning',
    tagline: 'Top-to-bottom deep cleaning for homes and offices.',
    metaTitle: 'Deep Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Detail-led deep cleaning in Doha and across Qatar. Inside cabinets, behind appliances, AC vents, baseboards and grout. Ideal for seasonal resets and handovers.',
    icon: 'sparkle',
    highlights: [
      'Inside cabinets, oven, fridge, behind appliances',
      'AC vent and grille wipe-down',
      'Detail work on grout, baseboards, switches',
      'Two-visit follow-up option',
    ],
  },
  {
    slug: 'move-in-move-out-cleaning',
    title: 'Move-in & Move-out Cleaning in Qatar',
    shortTitle: 'Move-in / Move-out Cleaning',
    tagline: 'Handover-ready cleans for tenants, landlords, and agents.',
    metaTitle: 'Move-in / Move-out Cleaning in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Move-in and move-out cleaning in Doha. Get your deposit back or hand over a spotless property. Kitchens, bathrooms, AC vents, windows and balconies covered.',
    icon: 'box',
    highlights: [
      'Deposit-back focus for tenants',
      'Agent and landlord handover checklists',
      'Empty-property pricing — no furniture surcharge',
      'Same-week scheduling',
    ],
  },
  {
    slug: 'post-construction-cleaning',
    title: 'Post-construction Cleaning in Qatar',
    shortTitle: 'Post-construction Cleaning',
    tagline: 'Fine-dust removal and snag-list cleans for new fit-outs.',
    metaTitle: 'Post-construction Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Post-construction and post-renovation cleaning in Doha. Removal of fine cement dust, paint splatter, sticker residue and debris. Sites handed over photo-ready.',
    icon: 'tools',
    highlights: [
      'Fine cement and gypsum dust removal',
      'Paint, sealant, and sticker residue cleanup',
      'Multi-stage clean for rough, fine, and final',
      'HEPA vacuums and microfibre system',
    ],
  },
  {
    slug: 'sofa-carpet-cleaning',
    title: 'Sofa & Carpet Cleaning in Doha',
    shortTitle: 'Sofa & Carpet Cleaning',
    tagline: 'Hot-water extraction for sofas, rugs, and majlis carpets.',
    metaTitle: 'Sofa & Carpet Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Sofa, majlis, and carpet cleaning in Doha. Hot-water extraction, stain treatment and odour control. Safe for kids, pets and delicate upholstery fabrics.',
    icon: 'sofa',
    highlights: [
      'Hot-water extraction equipment',
      'Stain pre-treatment for coffee, food, ink',
      'Majlis carpets and rugs welcome',
      'Pet- and child-safe solutions',
    ],
  },
  {
    slug: 'mattress-cleaning',
    title: 'Mattress Cleaning in Qatar',
    shortTitle: 'Mattress Cleaning',
    tagline: 'Deep mattress cleaning and dust mite treatment.',
    metaTitle: 'Mattress Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Professional mattress cleaning in Doha — dust mite, allergen and stain removal with hot-water extraction. King, queen, and bunk mattresses welcome.',
    icon: 'bed',
    highlights: [
      'Dust mite and allergen treatment',
      'Stain and odour removal',
      'Single, queen, king, and bunk mattresses',
      'Same-day dry option available',
    ],
  },
  {
    slug: 'kitchen-bathroom-deep-cleaning',
    title: 'Kitchen & Bathroom Deep Cleaning',
    shortTitle: 'Kitchen & Bathroom Deep Cleaning',
    tagline: 'Grease, limescale, and grout — gone.',
    metaTitle: 'Kitchen & Bathroom Deep Cleaning in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Kitchen and bathroom deep cleaning in Doha. Grease and limescale removal, grout brightening, oven, hood, and fridge interiors. Restore the shine.',
    icon: 'spray',
    highlights: [
      'Oven, hood, and grease trap detail',
      'Hard-water limescale removal',
      'Grout brightening and re-sealing',
      'Cabinet interiors and drawer wipe-down',
    ],
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning in Doha',
    shortTitle: 'Window Cleaning',
    tagline: 'Streak-free interior and exterior window cleaning.',
    metaTitle: 'Window Cleaning Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Interior and exterior window cleaning in Doha. Streak-free results, hard-water spot removal, frame and track detail. Apartments, villas, and offices.',
    icon: 'window',
    highlights: [
      'Streak-free squeegee finish',
      'Hard-water spot treatment',
      'Frames, tracks, and sills included',
      'Ground-floor and reachable upper floors',
    ],
  },
  {
    slug: 'disinfection-sanitization',
    title: 'Disinfection & Sanitization Services',
    shortTitle: 'Disinfection & Sanitization',
    tagline: 'Hospital-grade disinfection for homes, offices, and clinics.',
    metaTitle: 'Disinfection & Sanitization Services in Doha, Qatar | Tamara Cleaning',
    metaDescription:
      'Disinfection and sanitization in Doha — fogging and surface treatment with approved, food-safe disinfectants. Homes, offices, clinics, and nurseries.',
    icon: 'shield',
    highlights: [
      'ULV fogging and electrostatic options',
      'Food-safe, low-residue disinfectants',
      'High-touch surface protocol',
      'Same-day emergency response',
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
