// Generates unique, on-spec suburb intro copy (client request: 200–300 words
// per suburb, suburb name used 2–3×, postcode, local council, suburb character,
// common surfaces/challenges, and a natural mention of services).
//
// Why a generator (not 81 hand-written strings): the copy is assembled from
// character-specific templates PLUS each suburb's unique `localProfile`, with a
// deterministic per-slug variant, so pages read distinctly rather than as
// near-duplicates. Hand-authored entries in src/data/suburb-content.ts still
// override this (they are spread on top in the page).
//
// WIRING (when you're ready, in app/perth/[slug]/page.tsx):
//   import { getSuburbCopy } from '@/app/utils/suburb-intro';
//   const generatedContent = getSuburbCopy(suburb);             // was buildSuburbIntro(...)
//   const content = { ...generatedContent, ...suburbContent[suburb.slug] };

import type { SuburbData } from '@/data/suburbs';
import { suburbMeta, type SuburbCharacter, type SuburbMeta } from '@/data/suburb-meta';

export type SuburbCopy = { intro: string; localContext: string };

/** Stable, dependency-free hash so variant choice is deterministic per slug. */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function councilPhrase(council: string): string {
  return /^(City|Town|Shire) of /.test(council) ? `within the ${council}` : `within ${council}`;
}

const DELICATE: SuburbCharacter[] = ['coastal', 'riverside', 'heritage', 'inner-city'];

const openings = [
  (name: string, postcode: string, council: string) =>
    `PPS Exterior Cleaning provides professional pressure cleaning and soft washing in ${name} ${postcode}, ${councilPhrase(council)}.`,
  (name: string, postcode: string, council: string) =>
    `PPS Exterior Cleaning services homes and businesses throughout ${name} ${postcode}, ${councilPhrase(council)}.`,
];

const challengeByCharacter: Record<SuburbCharacter, string[]> = {
  coastal: [
    `Living this close to the coast has a trade-off: salt air, humidity, and sea spray speed up the build-up of grime, algae, and lichen on driveways, rendered walls, glass, and roofs far faster than most owners expect.`,
    `So close to the ocean, constant salt spray and sea mist leave a gritty film that feeds mould on shaded walls and dulls render, glass, and paving — it returns faster here than it does inland.`,
  ],
  riverside: [
    `Backing onto the river brings dampness, organic film, and midge residue that settle on river-facing walls, glass, and paving, while the shade and moisture let mould take hold quickly.`,
    `Riverside living looks great, but humidity and organic growth off the water leave algae and grime on render, limestone, and shaded paths that ordinary hosing simply won't shift.`,
  ],
  heritage: [
    `Older render, painted brick, limestone, and tuck-pointing are easily damaged by high pressure, so the priority is a gentle, controlled clean that lifts decades of grime and mould without harming period detail.`,
    `Character and heritage homes need a careful hand — too much pressure pits soft render and limestone, so low-pressure soft washing protects original finishes while still cleaning thoroughly.`,
  ],
  'inner-city': [
    `Mixed character homes and busy shopfronts pick up traffic film, foot-traffic grime, and organic staining, while older brick and render need a softer touch than a standard high-pressure blast.`,
    `Between heritage facades, infill homes, and a busy retail strip, surfaces here collect traffic grime and mould, and the older brick and render call for gentle soft washing rather than aggressive pressure.`,
  ],
  'new-estate': [
    `Even near-new homes don't stay clean for long — builder residue, mortar splatter, reticulation iron staining, and the first seasons of algae quickly dull fresh render, aggregate driveways, and roof tiles.`,
    `New doesn't mean spotless: construction dust, mortar haze, bore-water marks, and early mould build up fast on freshly laid driveways, render, and roofs in a growing estate like this.`,
  ],
  established: [
    `Decades of sun, reticulation bore water, and weather leave lichen, oil marks, and ingrained grime on original concrete, brick paving, and tiled roofs — a professional clean restores them without the cost of resurfacing.`,
    `Years of weathering, bore staining, and lichen take their toll on older driveways, paving, and roofs here, but the right clean brings tired surfaces back to life without resurfacing or repainting.`,
  ],
};

const servicesSentences = [
  (name: string) =>
    `Across ${name} we clean driveways, concrete, pavers, liquid and natural limestone, rendered walls, roof tiles, patios, pool surrounds, and full house exteriors — one call instead of chasing separate contractors.`,
  (name: string) =>
    `In ${name} we handle the whole exterior — driveways, paths, pavers, limestone, render, house washing, roof cleaning, patios, and pool surrounds — so the property is sorted in a single visit.`,
];

const methodDelicate =
  `Because so many surfaces here are render, limestone, painted brick, or roof tile, we lead with gentle soft washing and only step up the pressure where a surface can safely take it — thorough results without the damage DIY pressure can cause.`;
const methodRobust =
  `We match the method to the material — stronger pressure on durable concrete and aggregate, gentle soft washing on render, painted finishes, and roof tiles — so every surface is cleaned thoroughly without being damaged.`;

const ctaSentences = [
  (name: string) =>
    `Whether you're preparing a ${name} home for sale, reviving outdoor entertaining areas, or making slippery winter paths safe again, PPS Exterior Cleaning is fully insured, locally operated, and can usually arrange a free quote within the week.`,
  (name: string) =>
    `From pre-sale clean-ups to tired driveways and mould-affected walls, PPS Exterior Cleaning offers fully insured, local service throughout ${name} and the surrounding suburbs, with free, no-obligation quotes usually available within the week.`,
];

const assessmentLine =
  `Every quote starts with a quick assessment of the surfaces and the staining, so you know exactly what we'll do and what it costs before we begin.`;

/**
 * Generic fallback when a suburb has no metadata yet — still mentions the
 * suburb a few times and reads naturally, just without postcode/council.
 */
function fallbackCopy(name: string): SuburbCopy {
  return {
    intro:
      `PPS Exterior Cleaning provides professional pressure cleaning and soft washing for homes and businesses in ${name}. ` +
      `We clean driveways, concrete, pavers, limestone, rendered walls, roof tiles, patios, pool surrounds, and full house exteriors, matching the method to each surface so the result is thorough without damage.`,
    localContext:
      `Properties in ${name} pick up a mix of dust, tyre marks, algae, lichen, bore staining, and winter grime depending on their location, shade, and surface type. ` +
      `We use controlled pressure on durable concrete and gentle soft washing on render, limestone, painted finishes, and roofs. ` +
      `Whether you're preparing a home for sale or reviving outdoor areas, PPS Exterior Cleaning is fully insured, locally operated, and can usually arrange a free quote in ${name} within the week.`,
  };
}

/** Build unique intro + localContext copy for a suburb from its metadata. */
export function getSuburbCopy(suburb: SuburbData): SuburbCopy {
  const meta: SuburbMeta | undefined = suburbMeta[suburb.slug];
  if (!meta) return fallbackCopy(suburb.name);

  const name = suburb.name;
  const v = hashSlug(suburb.slug);
  const pick = <T,>(arr: T[]): T => arr[v % arr.length];
  // NB: unsigned shift — a signed `>>` can go negative for high-bit hashes,
  // which would index the array out of bounds (undefined).
  const pickAlt = <T,>(arr: T[]): T => arr[(v >>> 3) % arr.length];

  const opening = pick(openings)(name, meta.postcode, meta.council);
  const challenge = pickAlt(challengeByCharacter[meta.character]);
  const services = pick(servicesSentences)(name);
  const method = DELICATE.includes(meta.character) ? methodDelicate : methodRobust;
  const cta = pickAlt(ctaSentences)(name);

  return {
    intro: `${opening} ${meta.localProfile} ${challenge}`,
    localContext: `${services} ${method} ${assessmentLine} ${cta}`,
  };
}
