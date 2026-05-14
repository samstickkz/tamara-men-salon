export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: 'Which areas in Qatar do you cover?',
    a: 'We cover all of Qatar from our Doha base — including Lusail, The Pearl, West Bay, Al Wakrah, Al Rayyan and Al Khor. Areas outside Greater Doha are scheduled on route days to keep travel costs out of your invoice.',
  },
  {
    q: 'Are your cleaners vetted and trained?',
    a: 'Yes. Every team member is interviewed in person, document-verified for legal work status in Qatar, and shadowed on at least three jobs before working independently. Crews carry company ID and wear branded uniforms.',
  },
  {
    q: 'Do you bring your own supplies and equipment?',
    a: 'Yes. Every standard visit includes microfibre cloths, eco-friendly cleaning products, vacuums, mops, and consumables. Specialist jobs (carpet, sofa, post-construction) bring hot-water extractors and HEPA vacuums on top.',
  },
  {
    q: 'How quickly can I get a booking?',
    a: 'For one-off home visits we usually schedule within 24 to 48 hours. Emergency disinfection and post-construction cleans can be same-day where capacity allows. WhatsApp us for the fastest response.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Most home and office cleans use a flat rate based on property size and scope — no per-hour surprises. Specialist jobs (deep, post-construction, mattress) are quoted up front after a few photos on WhatsApp.',
  },
  {
    q: 'Do you offer Arabic-language coordination?',
    a: 'Yes — our coordinator handles bookings in English and Arabic over WhatsApp, and crews can communicate in basic English on-site. We will add a full Arabic version of this site shortly.',
  },
];

export const serviceFaqs: Record<string, Faq[]> = {
  'villa-cleaning': [
    {
      q: 'How many cleaners are sent for a villa?',
      a: 'Standard villa visits are sent with a crew of two to four cleaners depending on size and scope. A team lead supervises the visit and is your single point of contact.',
    },
    {
      q: 'Do you clean outdoor areas and garages?',
      a: 'Yes — driveways, patios, garages and outdoor majlis are part of our villa scope. We sweep, pressure-rinse where suitable, and wipe down outdoor seating.',
    },
    {
      q: 'Can you handle weekly recurring villa cleaning?',
      a: 'Absolutely. Most of our villa customers are on a weekly or biweekly plan, with the same crew rotating in for continuity.',
    },
  ],
  'apartment-cleaning': [
    {
      q: 'Do I need to be home during the cleaning?',
      a: 'Not at all. Many of our apartment customers leave a key with concierge or use a smart lock code we delete after the visit.',
    },
    {
      q: 'Is tower lift booking handled?',
      a: 'Yes — we have working knowledge of the major Pearl, Lusail and West Bay towers and will book the service lift, security access, and parking on your behalf.',
    },
  ],
  'office-cleaning': [
    {
      q: 'Can you clean outside business hours?',
      a: 'Yes — most of our office contracts run evenings, early mornings, or weekends. We will work around your office schedule, not the other way round.',
    },
    {
      q: 'Are consumables (soap, paper, bin liners) included?',
      a: 'They can be — most clients add them to the monthly contract for a small fixed amount, so you never run out unexpectedly.',
    },
  ],
  'deep-cleaning': [
    {
      q: 'How long does a deep clean take?',
      a: 'A typical 2-bedroom apartment takes 4 to 6 hours with a 2-person crew. Villas can take a full working day. We share a time estimate up front so you can plan around it.',
    },
    {
      q: 'How often should I book a deep clean?',
      a: 'Most homes in Qatar benefit from a deep clean every 3 to 6 months because of fine desert dust. We will recommend a schedule based on your property.',
    },
  ],
  'move-in-move-out-cleaning': [
    {
      q: 'Will I get my deposit back?',
      a: 'We can not guarantee what a landlord decides, but our move-out checklist is built around exactly the points letting agents inspect — and most of our tenant customers get their full deposit back.',
    },
    {
      q: 'Is furniture removal included?',
      a: 'No, we do not handle removals. We do work alongside removal teams on the same day if you coordinate the timing.',
    },
  ],
  'post-construction-cleaning': [
    {
      q: 'Can you start while finishing trades are still on site?',
      a: 'We prefer to start after all trades have left, but we can run a rough phase mid-project and a final phase after handover. Most fit-outs benefit from two visits.',
    },
    {
      q: 'Do you handle fine cement and gypsum dust?',
      a: 'Yes — fine construction dust is the core of post-construction work. We use HEPA vacuums and a multi-pass damp-wipe routine so it does not just resettle.',
    },
  ],
  'sofa-carpet-cleaning': [
    {
      q: 'How long does drying take?',
      a: 'With hot-water extraction, sofas are usually touch-dry in 2 to 4 hours and fully dry overnight. We use air movers on rugs to speed it up further.',
    },
    {
      q: 'Are your solutions safe for kids and pets?',
      a: 'Yes — we use low-VOC, hypoallergenic solutions by default. Mention any specific sensitivities when booking.',
    },
  ],
  'mattress-cleaning': [
    {
      q: 'Do you remove dust mites and allergens?',
      a: 'Yes. Hot-water extraction plus an antimicrobial pre-spray significantly reduces dust mites, allergens, and skin cells embedded in the mattress.',
    },
    {
      q: 'How quickly is the mattress usable again?',
      a: 'Typically 4 to 8 hours to fully dry. We can use rapid-dry settings if you need it ready the same evening.',
    },
  ],
  'kitchen-bathroom-deep-cleaning': [
    {
      q: 'Will limescale and hard water stains come off?',
      a: 'In most cases, yes — we use professional limescale removers that are safe on chrome, glass and porcelain. Severely etched glass may not return to new but will look dramatically better.',
    },
    {
      q: 'Do you clean inside the oven and fridge?',
      a: 'Yes, both are included in our kitchen deep clean — oven racks soaked separately, fridge emptied and wiped inside and out.',
    },
  ],
  'window-cleaning': [
    {
      q: 'Do you do high-rise external window cleaning?',
      a: 'We clean external windows you can reach safely — ground floor, balconies, and from inside via openable frames. Anything requiring rope access or cradles, we will refer to a licensed specialist.',
    },
    {
      q: 'Are frames and tracks included?',
      a: 'Yes. We vacuum tracks, wipe frames, and squeegee glass as part of one fixed price.',
    },
  ],
  'disinfection-sanitization': [
    {
      q: 'Which disinfectants do you use?',
      a: 'Food-safe, hospital-grade quaternary ammonium and hydrogen peroxide blends — low residue and approved for kitchens and clinical settings.',
    },
    {
      q: 'How soon can I re-enter the space?',
      a: 'Usually 30 to 60 minutes after fogging, depending on ventilation. We will leave clear written guidance after every visit.',
    },
  ],
};
