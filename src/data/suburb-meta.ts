// Per-suburb factual + character metadata used to generate unique, non-thin
// suburb intros (client request: 200–300 words each with postcode, local
// council, suburb character, and common surfaces/challenges).
//
// IMPORTANT — VERIFY BEFORE FULL DEPLOY:
// `postcode` and `council` are compiled from general knowledge of the Perth
// metro area and should be spot-checked against Australia Post / the relevant
// LGA. A few suburbs sit across more than one council (flagged inline); the
// dominant LGA is used.
//
// `character` drives sentence templates in src/app/utils/suburb-intro.ts.
// `localProfile` is a unique, suburb-specific sentence — it is what makes each
// generated intro genuinely different from the next (the anti-duplicate hook).

export type SuburbCharacter =
  | 'coastal'
  | 'riverside'
  | 'heritage'
  | 'inner-city'
  | 'new-estate'
  | 'established';

export type SuburbMeta = {
  /** Australia Post postcode, e.g. "6011". */
  postcode: string;
  /** Local government area, written for prose: "City of Joondalup". */
  council: string;
  /** Primary character — selects the intro sentence template. */
  character: SuburbCharacter;
  /** One unique, specific sentence about this suburb's properties/challenges. */
  localProfile: string;
};

export const suburbMeta: Record<string, SuburbMeta> = {
  'alexander-heights': {
    postcode: '6064',
    council: 'City of Wanneroo',
    character: 'established',
    localProfile:
      'Alexander Heights is an established 1980s–90s family suburb where original brick-veneer homes, aggregate and brushed-concrete driveways, and tiled roofs have weathered decades of sun, reticulation bore staining, and lichen on shaded paths.',
  },
  alkimos: {
    postcode: '6038',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Alkimos is a fast-growing beachside estate where near-new render, modern roof tiles, and exposed-aggregate driveways already cop wind-blown sand and salt-laden air rolling in off the Indian Ocean.',
  },
  applecross: {
    postcode: '6153',
    council: 'City of Melville',
    character: 'riverside',
    localProfile:
      'Applecross is a prestigious riverside suburb near the Canning Bridge precinct, where premium homes, limestone walls, and rendered facades collect river dampness, organic film, and midge residue on Swan-River-facing elevations.',
  },
  balcatta: {
    postcode: '6021',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Balcatta is a practical, established suburb mixing post-war and 80s homes with light-industrial frontages, where concrete hardstands, brick paving, and tiled roofs build up grime, oil marks, and weathering.',
  },
  bayswater: {
    postcode: '6053',
    council: 'City of Bayswater',
    character: 'established',
    localProfile:
      'Bayswater blends Federation and character cottages near the Swan River with newer infill, so jobs range from gentle soft washing of painted weatherboard and tuck-pointed brick to lifting lichen from older concrete and red-brick paving.',
  },
  beldon: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Beldon is a quiet, established family suburb where original concrete driveways, brick-paved courtyards, and tiled roofs pick up lichen, leaf staining, and winter mould on shaded southern elevations.',
  },
  booragoon: {
    postcode: '6154',
    council: 'City of Melville',
    character: 'established',
    localProfile:
      'Booragoon, home to the Garden City precinct, is a settled south-of-river suburb where mature trees leave leaf tannin, sap, and lichen on driveways, paths, and tiled roofs.',
  },
  brabham: {
    postcode: '6055',
    council: 'City of Swan',
    character: 'new-estate',
    localProfile:
      'Brabham is a brand-new Swan Valley-edge estate where builder residue, mortar splatter, and fine red dust settle on freshly laid exposed-aggregate driveways, render, and Colorbond before homes are even a year old.',
  },
  'burns-beach': {
    postcode: '6028',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Burns Beach is an exclusive oceanfront pocket where premium homes face constant salt spray and sea mist that etch glass, stain render, and feed mould on south- and west-facing walls.',
  },
  burswood: {
    postcode: '6100',
    council: 'Town of Victoria Park',
    character: 'riverside',
    localProfile:
      'Burswood, on the river beside the Crown and stadium precinct, is dense with apartments, townhouses, and strata complexes where shared driveways, car-park aprons, and rendered facades collect river grime and traffic film.',
  },
  butler: {
    postcode: '6036',
    council: 'City of Wanneroo',
    character: 'new-estate',
    localProfile:
      'Butler is a young northern-corridor estate of modern family homes where near-new render, aggregate driveways, and roof tiles gather builder dust, reticulation marks, and the first seasons of algae.',
  },
  byford: {
    postcode: '6122',
    council: 'Shire of Serpentine-Jarrahdale',
    character: 'new-estate',
    localProfile:
      'Byford is an expanding semi-rural growth area on Perth’s southern fringe where larger blocks, new driveways, and patios pick up red dirt, paddock dust, and reticulation iron staining.',
  },
  carine: {
    postcode: '6020',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Carine is a leafy, sought-after established suburb beside Carine Open Space where mature gums drop sap and leaf tannin onto driveways, paving, and tiled roofs.',
  },
  churchlands: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Churchlands is a prestigious western suburb of large, modern homes where extensive rendered walls, limestone features, and exposed-aggregate driveways need careful, streak-free cleaning.',
  },
  'city-beach': {
    postcode: '6015',
    council: 'Town of Cambridge',
    character: 'coastal',
    localProfile:
      'City Beach is a premium oceanfront suburb where architectural homes, large glazed elevations, and limestone walls take a constant beating from salt air, sea spray, and wind-driven sand.',
  },
  claremont: {
    postcode: '6010',
    council: 'Town of Claremont',
    character: 'heritage',
    localProfile:
      'Claremont mixes grand heritage residences and riverside estates with a busy retail precinct, so delicate period render, tuck-pointing, and painted brick call for low-pressure soft washing rather than aggressive blasting.',
  },
  clarkson: {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'new-estate',
    localProfile:
      'Clarkson is a busy northern transit-hub suburb of 2000s homes where render, aggregate driveways, and roof tiles gather coastal salt haze, traffic film, and shaded-side mould.',
  },
  como: {
    postcode: '6152',
    council: 'City of South Perth',
    character: 'riverside',
    localProfile:
      'Como is a settled riverside suburb between the Canning and Swan rivers, where character homes, apartments, and limestone walls collect river dampness, organic growth, and midge residue.',
  },
  connolly: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Connolly is a quiet established pocket wrapped around the Joondalup Resort golf course, where well-kept homes, paved entertaining areas, and tiled roofs pick up lawn-irrigation marks and lichen.',
  },
  cottesloe: {
    postcode: '6011',
    council: 'Town of Cottesloe',
    character: 'coastal',
    localProfile:
      'Cottesloe is a premium beachside suburb with a great deal of natural and liquid limestone, where salt air, humidity, and sea spray accelerate algae, lichen, and grime on driveways, rendered walls, and pool surrounds.',
  },
  craigie: {
    postcode: '6025',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Craigie is an affordable, established family suburb where original 80s concrete driveways, brick paving, and tiled roofs carry years of lichen, oil marks, and weathering.',
  },
  currambine: {
    postcode: '6028',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Currambine is a now-mature 90s estate beside the rail line where exposed-aggregate driveways, render, and roof tiles have picked up a decade-plus of reticulation staining and shaded-side mould.',
  },
  dayton: {
    postcode: '6055',
    council: 'City of Swan',
    character: 'new-estate',
    localProfile:
      'Dayton is a new eastern-corridor estate near the Swan Valley where fresh render, aggregate driveways, and Colorbond fencing collect builder residue and fine red dust.',
  },
  doubleview: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Doubleview is a popular established suburb being steadily rebuilt, so work spans tired original driveways and paving through to crisp new render and aggregate on knock-down-rebuild homes.',
  },
  duncraig: {
    postcode: '6023',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Duncraig is a large, leafy, established suburb where mature trees and reticulation leave sap, leaf tannin, lichen, and bore staining across driveways, paths, and tiled roofs.',
  },
  edgewater: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Edgewater sits beside Lake Joondalup, where elevated, bush-fringed homes collect leaf litter, organic growth, and damp-side mould on driveways, paving, and roofs.',
  },
  eglinton: {
    postcode: '6034',
    council: 'City of Wanneroo',
    character: 'new-estate',
    localProfile:
      'Eglinton is a rapidly building coastal estate where brand-new render, roof tiles, and aggregate driveways already meet wind-blown sand and salt haze off the nearby beaches.',
  },
  floreat: {
    postcode: '6014',
    council: 'Town of Cambridge',
    character: 'established',
    localProfile:
      'Floreat is a prestigious, leafy suburb of original mid-century and rebuilt homes near Bold Park, where limestone walls, rendered facades, and shaded driveways attract lichen and organic staining.',
  },
  greenwood: {
    postcode: '6024',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Greenwood is a settled family suburb where established gardens and reticulation leave leaf tannin, lichen, and bore-water iron marks on driveways, paving, and tiled roofs.',
  },
  gwelup: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Gwelup wraps around the Careniup wetlands, so its homes deal with heavy organic growth, leaf litter, and damp-side mould on driveways, paths, and north-facing roofs.',
  },
  hamersley: {
    postcode: '6022',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Hamersley is a quiet, mature suburb of original brick-and-tile homes where decades of lichen, reticulation staining, and weathering have dulled driveways, paving, and roofs.',
  },
  harrisdale: {
    postcode: '6112',
    council: 'City of Armadale',
    character: 'new-estate',
    localProfile:
      'Harrisdale is a booming southern estate of near-new homes where fresh render, exposed-aggregate driveways, and roof tiles gather builder dust, reticulation marks, and early algae.',
  },
  heathridge: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Heathridge has a lot of brick-veneer homes, older concrete driveways, brick paving, and tiled roofs that have weathered decades of red dust, bore marks, tyre staining, and lichen on shaded paths.',
  },
  'henley-brook': {
    postcode: '6055',
    council: 'City of Swan',
    character: 'new-estate',
    localProfile:
      'Henley Brook is a new Swan Valley estate of larger blocks where fresh driveways, render, and patios collect vineyard-fringe dust, red dirt, and reticulation iron staining.',
  },
  hillarys: {
    postcode: '6025',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Hillarys, home to the Boat Harbour, is a premium coastal suburb where homes near the marina face salt spray, sea mist, and wind-blown sand that stain render, glass, and pool surrounds.',
  },
  hocking: {
    postcode: '6065',
    council: 'City of Wanneroo',
    character: 'new-estate',
    localProfile:
      'Hocking is a 2000s family estate where aggregate driveways, render, and roof tiles have begun showing reticulation staining, shaded-side mould, and the first build-up of grime.',
  },
  iluka: {
    postcode: '6028',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Iluka is an exclusive coastal enclave of large limestone-and-render homes where ocean salt, sea mist, and humidity drive algae and grime on walls, driveways, and alfresco areas.',
  },
  innaloo: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Innaloo blends established homes with a major retail and commercial hub, so work spans residential driveways and roofs through to shopfronts, car-park aprons, and rendered commercial frontages.',
  },
  jindalee: {
    postcode: '6036',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Jindalee is a newer beachside estate where near-new render, roof tiles, and aggregate driveways already battle wind-driven sand and salt haze off the dunes.',
  },
  joondalup: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Joondalup is the northern suburbs’ commercial and civic hub around the lake, ECU, and CBD, so jobs span family homes, strata complexes, and commercial frontages, car parks, and entry paving.',
  },
  kallaroo: {
    postcode: '6025',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Kallaroo is an established coastal suburb on the rise above Hillarys where homes catch salt haze and sea mist that feed mould on render and staining on driveways and roofs.',
  },
  karrinyup: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Karrinyup is a quality established suburb being renewed around its upgraded shopping centre, mixing original brick-and-tile homes with new render and aggregate on rebuilt blocks.',
  },
  kingsley: {
    postcode: '6026',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Kingsley is a popular, leafy family suburb where mature gardens and reticulation leave leaf tannin, lichen, and bore staining on driveways, paths, and tiled roofs.',
  },
  leederville: {
    postcode: '6007',
    council: 'City of Vincent',
    character: 'inner-city',
    localProfile:
      'Leederville is a vibrant inner-city pocket of character cottages, warehouse conversions, and a busy café and retail strip, where heritage brick, painted render, and shopfront paving need careful soft washing.',
  },
  madeley: {
    postcode: '6065',
    council: 'City of Wanneroo',
    character: 'established',
    localProfile:
      'Madeley is a settled 2000s suburb beside Kingsway where aggregate driveways, render, and roof tiles now show reticulation staining, shaded-side mould, and steady weathering.',
  },
  marmion: {
    postcode: '6020',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Marmion is a tightly held coastal suburb above the reef where premium homes face relentless salt spray and sea mist on render, glass, and limestone.',
  },
  melville: {
    postcode: '6156',
    council: 'City of Melville',
    character: 'established',
    localProfile:
      'Melville is a settled south-of-river suburb of original and rebuilt homes where mature trees and reticulation leave sap, lichen, and iron staining on driveways and roofs.',
  },
  merriwa: {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Merriwa is an affordable coastal-corridor suburb of 90s and 2000s homes where aggregate driveways, render, and roof tiles pick up salt haze, sand, and shaded-side mould.',
  },
  mindarie: {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Mindarie centres on its marina, where waterfront homes, townhouses, and pool surrounds take constant salt spray and sea mist that etch glass and feed render mould.',
  },
  'mosman-park': {
    postcode: '6012',
    council: 'Town of Mosman Park',
    character: 'heritage',
    localProfile:
      'Mosman Park stretches from the river to the ocean and is rich in grand heritage and character homes, where original render, limestone, and tuck-pointed brick need gentle soft washing, not high pressure.',
  },
  'mount-lawley': {
    postcode: '6050',
    // NOTE: Mount Lawley spans City of Stirling, City of Vincent and City of Bayswater.
    council: 'City of Stirling',
    character: 'heritage',
    localProfile:
      'Mount Lawley is a prized character suburb of Federation and Art-Deco homes along leafy streets, where period render, painted brick, and tuck-pointing call for careful low-pressure soft washing.',
  },
  mullaloo: {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Mullaloo is a relaxed beachside family suburb where homes near the dunes catch wind-blown sand and salt haze that stain render, glass, and driveways.',
  },
  nedlands: {
    postcode: '6009',
    council: 'City of Nedlands',
    character: 'riverside',
    localProfile:
      'Nedlands is a prestigious riverside suburb of large homes near QEII and UWA, where limestone driveways, rendered walls, and waterfront patios collect river dampness and organic film.',
  },
  'north-beach': {
    postcode: '6020',
    council: 'City of Stirling',
    character: 'coastal',
    localProfile:
      'North Beach is a relaxed oceanfront suburb where homes along the dunes face salt spray, sea mist, and sand that dull render, glass, and limestone.',
  },
  'north-fremantle': {
    postcode: '6159',
    council: 'City of Fremantle',
    character: 'heritage',
    localProfile:
      'North Fremantle is a port-side, river-and-ocean suburb of historic cottages and warehouses, where salt-laden air and a gritty film settle on heritage render, limestone, and glass that need gentle soft washing.',
  },
  'ocean-reef': {
    postcode: '6027',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Ocean Reef is a coastal suburb being transformed by its new marina, where homes near the water take constant salt spray and sea mist on render, roofs, and pool areas.',
  },
  padbury: {
    postcode: '6025',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Padbury is a settled, affordable family suburb where original concrete driveways, brick paving, and tiled roofs carry years of lichen, reticulation staining, and weathering.',
  },
  'peppermint-grove': {
    postcode: '6011',
    council: 'Shire of Peppermint Grove',
    character: 'riverside',
    localProfile:
      'Peppermint Grove is Perth’s most exclusive riverside enclave of grand estates, where extensive limestone, heritage render, and manicured paved surrounds demand a meticulous, damage-free clean.',
  },
  'piara-waters': {
    postcode: '6112',
    council: 'City of Armadale',
    character: 'new-estate',
    localProfile:
      'Piara Waters is a fast-growing southern estate of near-new homes where fresh render, aggregate driveways, and roof tiles collect builder dust, reticulation marks, and early algae.',
  },
  'quinns-rocks': {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Quinns Rocks is an old-school beachside suburb where homes close to the foreshore face heavy salt spray and wind-blown sand on render, glass, and driveways.',
  },
  ridgewood: {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'established',
    localProfile:
      'Ridgewood is a settled coastal-corridor suburb of 90s and 2000s homes where aggregate driveways, render, and roof tiles show salt haze, reticulation staining, and shaded-side mould.',
  },
  scarborough: {
    postcode: '6019',
    council: 'City of Stirling',
    character: 'coastal',
    localProfile:
      'Scarborough is a landmark beachfront suburb mixing apartments, rebuilt homes, and a busy esplanade, where salt spray and sea mist etch glass and feed render and balcony mould.',
  },
  sorrento: {
    postcode: '6020',
    council: 'City of Joondalup',
    character: 'coastal',
    localProfile:
      'Sorrento is a premium coastal suburb above Hillarys Boat Harbour where elevated homes catch salt haze and sea mist on render, limestone, glass, and pool surrounds.',
  },
  'south-perth': {
    postcode: '6151',
    council: 'City of South Perth',
    character: 'riverside',
    localProfile:
      'South Perth’s riverside apartments, strata complexes, and heritage homes along the foreshore collect organic film, algae, and midge residue, especially on river-facing walls and glass.',
  },
  stirling: {
    postcode: '6021',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Stirling is a well-connected established suburb beside the freeway and major centres, where original brick-and-tile homes and paved areas carry lichen, traffic film, and weathering.',
  },
  subiaco: {
    postcode: '6008',
    council: 'City of Subiaco',
    character: 'heritage',
    localProfile:
      'Subiaco is a character-rich inner suburb of Federation cottages, terraces, and a heritage retail strip, where delicate period render, painted brick, and tuck-pointing need low-pressure soft washing.',
  },
  success: {
    postcode: '6164',
    council: 'City of Cockburn',
    character: 'new-estate',
    localProfile:
      'Success is a newer southern suburb near Cockburn Gateway where modern homes with render, aggregate driveways, and roof tiles gather builder residue, reticulation marks, and early algae.',
  },
  swanbourne: {
    postcode: '6010',
    // NOTE: Swanbourne sits across the City of Nedlands and Town of Claremont.
    council: 'City of Nedlands',
    character: 'coastal',
    localProfile:
      'Swanbourne is a tightly held coastal suburb of established and rebuilt homes near the beach and Allen Park, where salt air and sea mist drive grime on limestone, render, and driveways.',
  },
  'tamala-park': {
    postcode: '6030',
    council: 'City of Wanneroo',
    character: 'new-estate',
    localProfile:
      'Tamala Park (the Catalina estate) is a brand-new coastal community where freshly built render, roof tiles, and aggregate driveways already meet wind-blown sand and salt haze.',
  },
  tapping: {
    postcode: '6065',
    council: 'City of Wanneroo',
    character: 'established',
    localProfile:
      'Tapping is a settled 2000s family suburb where aggregate driveways, render, and roof tiles now show reticulation staining, shaded-side mould, and steady weathering.',
  },
  trigg: {
    postcode: '6029',
    council: 'City of Stirling',
    character: 'coastal',
    localProfile:
      'Trigg is a premium surf-side suburb where elevated homes and large glazed elevations take a constant beating from salt spray, sea mist, and wind-driven sand.',
  },
  'two-rocks': {
    postcode: '6037',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Two Rocks is a far-northern coastal community around its marina where homes face strong salt spray and sand that stain render, glass, and driveways.',
  },
  'victoria-park': {
    postcode: '6100',
    council: 'Town of Victoria Park',
    character: 'inner-city',
    localProfile:
      'Victoria Park is a lively inner-city suburb of heritage cottages, modern townhouses, and the busy Albany Highway café strip, where character brick, render, and shopfront paving need careful soft washing.',
  },
  wanneroo: {
    postcode: '6065',
    council: 'City of Wanneroo',
    character: 'established',
    localProfile:
      'Wanneroo blends an old town centre and market gardens with newer estates, so jobs span established brick-and-tile homes, larger semi-rural blocks, and red-dirt-affected driveways and roofs.',
  },
  warwick: {
    postcode: '6024',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Warwick is a handy, established suburb around its transport and leisure hub where original driveways, brick paving, and tiled roofs carry lichen, reticulation staining, and weathering.',
  },
  'watermans-bay': {
    postcode: '6020',
    council: 'City of Stirling',
    character: 'coastal',
    localProfile:
      'Watermans Bay is a small oceanfront suburb where homes along the coast face salt spray and sea mist that dull render, glass, and limestone walls.',
  },
  wembley: {
    postcode: '6014',
    council: 'Town of Cambridge',
    character: 'established',
    localProfile:
      'Wembley is an established inner-western suburb of character homes and infill near Lake Monger, where painted render, older brick paving, and tiled roofs attract lichen and organic staining.',
  },
  'wembley-downs': {
    postcode: '6019',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Wembley Downs is a quiet, elevated western suburb near Bold Park and the coast, where limestone walls, render, and shaded driveways pick up salt haze and organic growth.',
  },
  woodlands: {
    postcode: '6018',
    council: 'City of Stirling',
    character: 'established',
    localProfile:
      'Woodlands is a leafy, tightly held established suburb where mature street trees leave sap, leaf tannin, and lichen on driveways, paving, and tiled roofs.',
  },
  woodvale: {
    postcode: '6026',
    council: 'City of Joondalup',
    character: 'established',
    localProfile:
      'Woodvale is a settled family suburb beside Yellagonga wetlands where leaf litter, organic growth, and damp-side mould collect on driveways, paths, and north-facing roofs.',
  },
  yanchep: {
    postcode: '6035',
    council: 'City of Wanneroo',
    character: 'coastal',
    localProfile:
      'Yanchep is a fast-growing far-northern beachside town where new estates of render and roof tiles meet strong coastal salt, sand, and sun close to the dunes.',
  },
};
