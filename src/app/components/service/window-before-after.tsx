import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WindowBeforeAfterProps {
  serviceName: string;
}

const beforeAfterData = [
  {
    before: 'https://images.unsplash.com/photo-1726041452947-c91302d15c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1605100673524-394e344c5c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    location: 'Nedlands',
    description: 'Window cleaning restoration',
  },
  {
    before: 'https://images.unsplash.com/photo-1586269941030-3c0019ba4bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1700455350393-34e80e3e0997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    location: 'Wembley',
    description: 'Streak-free glass cleaning',
  },
  {
    before: 'https://images.unsplash.com/photo-1769527818855-588befec1b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1759632789123-ae5b55ae2755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    location: 'Mosman Park',
    description: 'Complete window detailing',
  },
];

export function WindowBeforeAfter({ serviceName }: WindowBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
  };

  const current = beforeAfterData[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Before & After Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformative results our professional {serviceName} pressure cleaning delivers across Perth
          </p>
        </div>

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
                  <ImageWithFallback
                    src={current.before}
                    alt={`Before ${serviceName} pressure cleaning ${current.location} Perth - ${current.description} - Premier Pressure Solutions WA`}
                    className="w-full h-96 md:h-[600px] object-contain"
                  />
                </div>

                {/* After */}
                <div className="relative bg-gray-100">
                  <div className="absolute top-4 left-4 z-10 bg-[#00d4ff] text-[#0a1628] px-4 py-2 rounded-lg font-semibold">
                    After
                  </div>
                  <ImageWithFallback
                    src={current.after}
                    alt={`After ${serviceName} pressure cleaning ${current.location} Perth - ${current.description} restored by Premier Pressure Solutions WA`}
                    className="w-full h-96 md:h-[600px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0a1628] text-lg mb-1">
                      {current.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{current.location}, Perth</span>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-2">
                    {beforeAfterData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-[#00d4ff] w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
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
            className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-full hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-[#0a1628]" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-[#0a1628]" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#0a1628]" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#0a1628]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
