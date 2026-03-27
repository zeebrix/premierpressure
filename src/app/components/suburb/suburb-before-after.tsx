import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BeforeAfterPair {
  before: string;
  after: string;
  description?: string;
}

interface SuburbBeforeAfterProps {
  images: BeforeAfterPair[];
}

export function SuburbBeforeAfter({ images }: SuburbBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-gray-600">
          <p>No images available yet.</p>
        </div>
      </div>
    );
  }

  const current = images[currentIndex];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Before */}
              <div className="relative bg-gray-100">
                <div className="absolute top-4 left-4 z-10 bg-[#0a1628] text-white px-4 py-2 rounded-lg font-semibold">
                  Before
                </div>
                <img
                  src={current.before}
                  alt="Before pressure cleaning Perth - Dirty driveway, patio, or exterior surface before professional cleaning"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>

              {/* After */}
              <div className="relative bg-gray-100">
                <div className="absolute top-4 left-4 z-10 bg-[#00d4ff] text-[#0a1628] px-4 py-2 rounded-lg font-semibold">
                  After
                </div>
                <img
                  src={current.after}
                  alt="After pressure cleaning Perth - Clean restored driveway, patio, or exterior surface showing professional results"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Description */}
            {current.description && (
              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="font-medium">{current.description}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-[#0a1628] rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-[#0a1628] rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-transparent'
                    : 'bg-transparent hover:bg-gray-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <span className={`block w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#00d4ff] w-8'
                    : 'bg-gray-300'
                }`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}