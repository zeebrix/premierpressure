import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import windowImg1 from '../../../assets/PPSWA-window-cleaning.jpeg';
import windowImg2 from '../../../assets/window-cleaning-perth.png';
import windowImg3 from '../../../assets/Window-cleaning-pps-perth.jpg';

interface WindowBeforeAfterProps {
  serviceName: string;
}

const imageData = [
  {
    image: windowImg1,
    label: 'Before',
    location: 'Perth',
    description: 'Professional window cleaning results (Pre-clean)',
  },
  {
    image: windowImg2,
    label: 'After',
    location: 'Perth',
    description: 'Professional window cleaning results (Post-clean)',
  },
  {
    image: windowImg3,
    label: 'Before',
    location: 'Perth WA',
    description: 'Streak-free glass cleaning (Accumulated dirt)',
  },
  {
    image: windowImg2, // Reusing after image as in original data
    label: 'After',
    location: 'Perth WA',
    description: 'Streak-free glass cleaning (Restored)',
  },
];

export function WindowBeforeAfter({ serviceName }: WindowBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % imageData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  const current = imageData[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Transformation Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformative results our professional {serviceName} services deliver across Perth
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative bg-gray-100 aspect-[4/3] md:aspect-video flex items-center justify-center overflow-hidden">
                <div className={`absolute top-6 left-6 z-10 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg ${
                  current.label === 'Before' 
                    ? 'bg-[#0a1628] text-white' 
                    : 'bg-[#00d4ff] text-[#0a1628]'
                }`}>
                  {current.label}
                </div>
                <ImageWithFallback
                  src={current.image}
                  alt={`${current.label} ${serviceName} cleaning ${current.location} Perth - Premier Pressure Solutions WA`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="p-8 bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#0a1628] text-xl mb-2">
                      {current.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <MapPin className="w-4 h-4 text-[#00d4ff]" />
                      <span>{current.location}, Perth</span>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-2">
                    {imageData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-[#00d4ff] w-10'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-2xl hover:bg-gray-50 transition-all z-20 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-[#0a1628] group-hover:text-[#00d4ff] transition-colors" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-2xl hover:bg-gray-50 transition-all z-20 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-[#0a1628] group-hover:text-[#00d4ff] transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
