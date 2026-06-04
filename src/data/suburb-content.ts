// Per-suburb unique content overlay (Audit #04).
//
// This file is hand-authored and intentionally SEPARATE from the auto-generated
// src/data/suburbs.ts, so regenerating that file never wipes this content.
//
// Add an entry keyed by suburb slug. Any field is optional — the suburb page
// falls back to generic content when a field is missing. Fill these in (and
// add more suburbs) as local context + client testimonials come through.

export type SuburbFAQ = { question: string; answer: string };

export type SuburbContent = {
  /** Short, suburb-specific intro paragraph shown under the hero. */
  intro?: string;
  /** Local context: property types, common issues, landmarks. */
  localContext?: string;
  /** Suburb-specific FAQs. When present, these REPLACE the generic FAQ set. */
  faqs?: SuburbFAQ[];
};

export const suburbContent: Record<string, SuburbContent> = {
  cottesloe: {
    intro:
      'PPS Exterior Cleaning services homes and businesses throughout Cottesloe 6011 and the Town of Cottesloe area. Living this close to the coast comes with a trade-off: salt air, humidity, and sea spray accelerate the build-up of grime, algae, lichen, and black mould on driveways, paved areas, rendered walls, roof tiles, pool surrounds, and glass faster than most people realise. Cottesloe is known for premium coastal homes, older character properties, apartments near the beach, and a lot of limestone, both natural and liquid. Those surfaces need careful handling because aggressive high-pressure cleaning can scar limestone, strip weak render, or force water into cracks. We use pressure cleaning and soft washing methods matched to each surface so the clean is thorough without unnecessary damage.',
    localContext:
      "If you have a driveway that needs cleaning before a sale, a limestone path that has gone green over winter, a roof affected by coastal growth, or a rendered exterior carrying years of salt and grime, PPS Exterior Cleaning can help. We clean driveways, patios, pavers, limestone walls, house exteriors, roof tiles, pool surrounds, and commercial frontage areas throughout Cottesloe and nearby suburbs including Swanbourne, Claremont, Peppermint Grove, Mosman Park, and City Beach. We are fully insured, use surface-appropriate equipment, and can usually arrange a free quote quickly for Cottesloe properties.",
  },

  'north-fremantle': {
    intro:
      'North Fremantle sits right on the coast where constant sea spray and salt-laden air leave a fine, gritty film on render, glass, and paving. Our pressure and soft-wash work is tuned for exactly these coastal conditions.',
    localContext:
      'Being a beachside, port-adjacent suburb, North Fremantle homes battle salt buildup, wind-blown sand, and accelerated mould growth on south-facing walls. Limestone retaining walls and rendered facades are common here and need low-pressure soft washing rather than aggressive blasting to avoid surface damage.',
    faqs: [
      {
        question: 'Why does my North Fremantle home get dirty so quickly?',
        answer:
          "Coastal suburbs like North Fremantle cop constant salt spray and wind-blown sand off the Indian Ocean. That salt film traps dirt and feeds mould, especially on shaded and south-facing walls. Regular soft washing removes the buildup and slows how fast it returns.",
      },
      {
        question: 'Can you safely clean rendered and limestone walls near the coast?',
        answer:
          'Yes. Render and limestone are porous and can be damaged by high pressure, so we use low-pressure soft washing with the right cleaning solutions. This lifts salt, mould, and grime without pitting the surface — important for North Fremantle’s older character homes.',
      },
      {
        question: 'How often should coastal North Fremantle properties be cleaned?',
        answer:
          'Most coastal homes benefit from a wash every 6–12 months given the salt exposure, versus every 12–18 months further inland. We can recommend a schedule after assessing your property’s aspect and exposure.',
      },
    ],
  },

  'south-perth': {
    intro:
      'South Perth’s riverside apartments, strata complexes, and heritage homes have their own cleaning needs — from shared driveways and common areas to delicate older facades along the foreshore.',
    localContext:
      'With the Swan River foreshore, the Zoo precinct, and a high density of strata and apartment living, South Perth jobs often involve common-property paving, car-park aprons, and rendered apartment exteriors. River-facing surfaces collect organic growth and midge residue that needs regular treatment.',
    faqs: [
      {
        question: 'Do you handle strata and apartment common areas in South Perth?',
        answer:
          'Yes — we regularly clean shared driveways, car-park aprons, entry paths, and common paving for South Perth strata complexes. We can coordinate with strata managers and work around resident access and parking.',
      },
      {
        question: 'Can you remove river-related grime and midge residue?',
        answer:
          'Absolutely. Properties near the South Perth foreshore collect organic film, algae, and midge residue, particularly on river-facing walls and glass. We use surface-appropriate soft washing to clear it without damaging render or paint.',
      },
      {
        question: 'Do you clean heritage and older homes in South Perth?',
        answer:
          'Yes. South Perth has many established and heritage properties. We assess each surface and use lower-pressure techniques on older render, brick, and tuck-pointing to clean effectively without causing damage.',
      },
    ],
  },

  heathridge: {
    intro:
            'PPS Exterior Cleaning provides pressure cleaning throughout Heathridge 6027, within the City of Joondalup, for established family homes, rental properties, and local businesses that need reliable exterior cleaning. Heathridge has a lot of brick-veneer homes, older concrete driveways, brick paving, patios, tiled roofs, and boundary walls that have been exposed to decades of Perth weather. Over time those surfaces collect tyre marks, oil stains, bore marks, red dust, algae, lichen, and winter grime, especially on shaded paths and roof sections. A professional clean can make a tired driveway, path, patio, or house exterior look well maintained again without the cost of resurfacing or repainting. We adjust our pressure and cleaning method to suit the surface, using stronger pressure on durable concrete and gentler soft washing on older brick, render, painted finishes, and roof areas.',
    localContext:
            "Common Heathridge jobs include driveway cleaning before a rental inspection or sale campaign, removing slippery growth from paths, refreshing brick paving around outdoor entertaining areas, cleaning roof staining, and washing exterior walls that have picked up years of dust and mould. PPS Exterior Cleaning services Heathridge and nearby suburbs including Craigie, Beldon, Connolly, Edgewater, Ocean Reef, and Joondalup. We are fully insured, locally operated, and set up for residential and commercial exterior cleaning across Perth's northern suburbs.",
    faqs: [
      {
        question: 'Can you restore an old 1980s driveway in Heathridge?',
        answer:
          'Yes — most Heathridge driveways are original concrete or brick paving that respond very well to professional cleaning. We lift oil stains, lichen, and ingrained dirt, and can re-sand and seal brick pavers so the result lasts longer.',
      },
      {
        question: 'Is pressure cleaning safe for older brick-veneer homes?',
        answer:
          'It is, when done correctly. For Heathridge’s aging brick veneer and render we use controlled, lower-pressure soft washing that removes mould and grime without forcing water into mortar joints or behind the veneer.',
      },
      {
        question: 'Do you service the whole Heathridge area?',
        answer:
          'Yes, we cover all of Heathridge and the surrounding northern-corridor suburbs. We’re local and can usually schedule within a few days, with flexible timing for working families.',
      },
    ],
  },
};
