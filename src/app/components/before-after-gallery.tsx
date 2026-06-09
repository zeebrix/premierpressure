'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPairs } from '@/data/gallery';

interface BeforeAfterGalleryProps {
  /** When set, before/after pairs from this suburb are shown first. */
  suburbName?: string;
  /** Max number of pairs to rotate through (default 8). */
  limit?: number;
  /** Hide the component's own heading (e.g. when a parent section already has one). */
  showHeading?: boolean;
}

export function BeforeAfterGallery({ suburbName, limit = 8, showHeading = true }: BeforeAfterGalleryProps) {
  const local = suburbName
    ? galleryPairs.filter((p) => p.suburb.toLowerCase() === suburbName.toLowerCase())
    : [];
  const ordered = local.length
    ? [...local, ...galleryPairs.filter((p) => !local.includes(p))]
    : galleryPairs;
  const items = ordered.slice(0, limit);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  if (items.length === 0) return null;
  const currentItem = items[currentIndex] ?? items[0];
  const locationLabel = currentItem.suburb ? `${currentItem.suburb}, Perth` : 'Perth';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#020B1C] mb-4">
              Pressure Cleaning Results in Perth - Before &amp; After.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the incredible results our professional pressure cleaning delivers across Perth.
            </p>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Before/After Side-by-Side */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Before Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] bg-gray-200">
                <img
                  src={currentItem.beforeUrl}
                  alt={currentItem.beforeAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-[#020B1C]/80 text-white px-4 py-2 rounded-md text-sm font-semibold">
                  Before
                </div>
              </div>
            </div>

            {/* After Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] bg-gray-200">
                <img
                  src={currentItem.afterUrl}
                  alt={currentItem.afterAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4 bg-[#0057FF]/90 text-[#020B1C] px-4 py-2 rounded-md text-sm font-semibold">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#020B1C] mb-1">
              {currentItem.service}
            </h3>
            <p className="text-gray-600">{locationLabel}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#020B1C] text-white flex items-center justify-center hover:bg-[#020B1C]/90 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`p-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-transparent'
                      : 'bg-transparent hover:bg-gray-100'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className={`block w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#0057FF] w-8'
                      : 'bg-gray-300'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#020B1C] text-white flex items-center justify-center hover:bg-[#020B1C]/90 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
