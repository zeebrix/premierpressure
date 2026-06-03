'use client';

import image_41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e from '@/assets/41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e.webp';
import image_87d5f8ec1d66b7b825355f53597f786bcaca1fbc from '@/assets/87d5f8ec1d66b7b825355f53597f786bcaca1fbc.webp';
import image_6bbaf4ca5bf4a991f067849bdb8c19880078fe6d from '@/assets/6bbaf4ca5bf4a991f067849bdb8c19880078fe6d.webp';
import image_9f60771b69b9073d71cb6e9b0f8857c1f1462658 from '@/assets/9f60771b69b9073d71cb6e9b0f8857c1f1462658.webp';
import image_69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06 from '@/assets/69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06.webp';
import image_1ef480a4697ca3350ef723e0ead8e0aa6892ee92 from '@/assets/1ef480a4697ca3350ef723e0ead8e0aa6892ee92.webp';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    before: image_1ef480a4697ca3350ef723e0ead8e0aa6892ee92,
    after: image_41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e,
    service: 'Limestone Cleaning',
    location: 'Burns Beach, Perth',
  },
  {
    before: image_69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06,
    after: image_9f60771b69b9073d71cb6e9b0f8857c1f1462658,
    service: 'Concrete Cleaning',
    location: 'Como, Perth',
  },
  {
    before: image_6bbaf4ca5bf4a991f067849bdb8c19880078fe6d,
    after: image_87d5f8ec1d66b7b825355f53597f786bcaca1fbc,
    service: 'Brick Cleaning',
    location: 'Hillarys, Perth',
  },
];

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  src={currentItem.before.src}
                  alt={`Before professional pressure cleaning Perth - ${currentItem.service} ${currentItem.location}`}
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
                  src={currentItem.after.src}
                  alt={`After professional pressure cleaning Perth - ${currentItem.service} service transformation`}
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
              {galleryItems.map((_, index) => (
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
