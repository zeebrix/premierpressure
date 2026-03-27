import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ConcreteBeforeAfterProps {
  serviceName: string;
}

const beforeAfterData = [
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896181261-8e31e67a-ca40-44ea-b3f6-c0e0e7609f0f.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTgxMjYxLThlMzFlNjdhLWNhNDAtNDRlYS1iM2Y2LWMwZTBlNzYwOWYwZi5qcGciLCJpYXQiOjE3NzA4OTYxODEsImV4cCI6MTgwMjQzMjE4MX0.YIlUs3S4WxqKcAtXrjgfcOIkV0QCQKszxhLvrpxmeR8',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896180046-25be4c79-4e48-4666-afcc-08fc40872c03.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTgwMDQ2LTI1YmU0Yzc5LTRlNDgtNDY2Ni1hZmNjLTA4ZmM0MDg3MmMwMy5qcGciLCJpYXQiOjE3NzA4OTYxODAsImV4cCI6MTgwMjQzMjE4MH0.Avs4_8LHpZU5TFVsE3plUGLX_xf4tYRO3crEQ4wZE2E',
    location: 'Joondalup',
    description: 'Concrete Floor Deep Cleaning',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896178793-904584a0-609d-4ad6-b731-aee9d6a8d2d4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTc4NzkzLTkwNDU4NGEwLTYwOWQtNGFkNi1iNzMxLWFlZTlkNmE4ZDJkNC5qcGciLCJpYXQiOjE3NzA4OTYxNzksImV4cCI6MTgwMjQzMjE3OX0.sx-uQRhwKykvySAa8kpQWxEH_Dbe5Hj9SHUa7s34u4w',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896177590-2edcb0ba-3552-404d-b76f-fddbcce702f8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTc3NTkwLTJlZGNiMGJhLTM1NTItNDA0ZC1iNzZmLWZkZGJjY2U3MDJmOC5qcGciLCJpYXQiOjE3NzA4OTYxNzcsImV4cCI6MTgwMjQzMjE3N30.H0qccGwZexMUOvotv4uJGkLXLTrrZHJcpWtrJ4Q0F1E',
    location: 'Subiaco',
    description: 'Concrete Pad Clean',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896176509-0052a539-f17e-4058-9614-d6994d471fb5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTc2NTA5LTAwNTJhNTM5LWYxN2UtNDA1OC05NjE0LWQ2OTk0ZDQ3MWZiNS5qcGciLCJpYXQiOjE3NzA4OTYxNzYsImV4cCI6MTgwMjQzMjE3Nn0.ja5covwK9kHPEd9lUmC_vdbrfSUPM6GF3ncHnLig5tM',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/concrete/1770896175197-f8b22a3d-0858-44e6-8b3e-4fdd51a6529b.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9jb25jcmV0ZS8xNzcwODk2MTc1MTk3LWY4YjIyYTNkLTA4NTgtNDRlNi04YjNlLTRmZGQ1MWE2NTI5Yi5qcGciLCJpYXQiOjE3NzA4OTYxNzUsImV4cCI6MTgwMjQzMjE3NX0.oojOzLkETGDbHypgJqEu7PmKsHH52AuVHhspX-9gljg',
    location: 'Joondalup',
    description: 'Concrete Floor Deep Cleaning',
  },
];

export function ConcreteBeforeAfter({ serviceName }: ConcreteBeforeAfterProps) {
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
            See the transformative results our professional cleaning delivers across Perth
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
                    alt={`Before ${serviceName} pressure cleaning Perth - ${current.location} - ${current.description}`}
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
                    alt={`After ${serviceName} pressure cleaning Perth - Professional results by Premier Pressure Solutions WA`}
                    className="w-full h-96 md:h-[600px] object-contain"
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