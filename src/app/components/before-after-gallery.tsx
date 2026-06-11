import { galleryPairs, type GalleryPair } from '@/data/gallery';

interface BeforeAfterGalleryProps {
  /** Explicit set of pairs to show (overrides suburb/featured selection). */
  pairs?: GalleryPair[];
  /** When set, shows that suburb's own before/after jobs (falls back to featured). */
  suburbName?: string;
  /** Homepage mode: show only the featured pairs. */
  featuredOnly?: boolean;
  /** Optional cap on the number of pairs (0 = no cap). */
  limit?: number;
  /** Hide the component's own heading (e.g. when a parent section already has one). */
  showHeading?: boolean;
  /** Image orientation. Suburb/job photos look best portrait; the curated homepage shots are landscape. */
  imageAspect?: 'portrait' | 'landscape';
}

export function BeforeAfterGallery({
  pairs,
  suburbName,
  featuredOnly = false,
  limit = 0,
  showHeading = true,
  imageAspect = 'portrait',
}: BeforeAfterGalleryProps) {
  let items;
  if (pairs) {
    items = pairs;
  } else if (suburbName) {
    const local = galleryPairs.filter(
      (p) => p.suburb.toLowerCase() === suburbName.toLowerCase(),
    );
    items = local.length ? local : galleryPairs.filter((p) => p.featured).slice(0, 4);
  } else if (featuredOnly) {
    items = galleryPairs.filter((p) => p.featured);
  } else {
    items = galleryPairs;
  }
  if (limit > 0) items = items.slice(0, limit);
  if (items.length === 0) return null;

  const aspect = imageAspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#020B1C] mb-4">
              Pressure Cleaning Results in Perth - Before &amp; After.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the incredible results our professional pressure cleaning delivers across Perth.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((pair) => (
            <article
              key={pair.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-2 gap-0">
                <div className={`relative ${aspect} bg-gray-200`}>
                  <img
                    src={pair.beforeUrl}
                    alt={pair.beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-3 left-3 bg-[#020B1C]/80 text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                    Before
                  </span>
                </div>
                <div className={`relative ${aspect} bg-gray-200`}>
                  <img
                    src={pair.afterUrl}
                    alt={pair.afterAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-3 right-3 bg-[#0057FF]/90 text-[#020B1C] px-3 py-1.5 rounded-md text-xs font-semibold">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#020B1C]">{pair.title}</h3>
                <p className="text-sm text-gray-500">
                  {pair.service} · {pair.suburb}, Perth
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
