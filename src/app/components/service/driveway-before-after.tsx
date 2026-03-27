import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DrivewayBeforeAfterProps {
  serviceName: string;
}

const beforeAfterDataByService: Record<string, Array<{
  before: string;
  after: string;
  location: string;
  description: string;
}>> = {
  // Default driveway images
  driveway: [
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771575463497-40539300-8c09-4fad-971b-fc74420a4777.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzU0NjM0OTctNDA1MzkzMDAtOGMwOS00ZmFkLTk3MWItZmM3NDQyMGE0Nzc3LmpwZyIsImlhdCI6MTc3MTU3NTQ2MywiZXhwIjoxODAzMTExNDYzfQ.b_hjud6kT5o0YHxlO0v8gvD9H-WEW__fTGC45GdhRJg',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771575461907-74b360ce-1711-4afa-84e7-5fb740aac148.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzU0NjE5MDctNzRiMzYwY2UtMTcxMS00YWZhLTg0ZTctNWZiNzQwYWFjMTQ4LmpwZyIsImlhdCI6MTc3MTU3NTQ2MiwiZXhwIjoxODAzMTExNDYyfQ.jVuOc4ZL-n_ZhO4dWl7zxyo_PNQy4N2ZpWcgWAFAu7A',
      location: 'Wembley',
      description: 'Complete Restoration',
    },
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771575091346-6288e6c8-ff47-45e2-89a3-42828bcabee7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzUwOTEzNDYtNjI4OGU2YzgtZmY0Ny00NWUyLTg5YTMtNDI4MjhiY2FiZWU3LmpwZyIsImlhdCI6MTc3MTU3NTA5MSwiZXhwIjoxODAzMTExMDkxfQ.1cEGex95SJLKxZbXgVuQdt_XPCVFt2WRkvRIT5BEJrs',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771575089743-dea8e6a8-ff55-4ec2-a590-fd225f2b475d.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzUwODk3NDMtZGVhOGU2YTgtZmY1NS00ZWMyLWE1OTAtZmQyMjVmMmI0NzVkLmpwZyIsImlhdCI6MTc3MTU3NTA5MCwiZXhwIjoxODAzMTExMDkwfQ.mSIr6eTK6AqM6S6vc0nImSDr2V1xr4BuCKOUc8iU4qg',
      location: 'Leederville',
      description: 'Concrete Driveway Deep Clean',
    },
  ],
  // Pool patio images
  'pool-patio': [
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717375156-b4ffceba-7696-4758-9e6d-e151f1ac0230.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzUxNTYtYjRmZmNlYmEtNzY5Ni00NzU4LTllNmQtZTE1MWYxYWMwMjMwLmpwZyIsImlhdCI6MTc3MjcxNzM3NSwiZXhwIjoxODA0MjUzMzc1fQ.D6VMon0JBA1HdoETwtYaLUNy6NafyvyKkG4aP3dtZ68',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717374083-7155ba5a-2c07-4266-9197-2c3742f8656a.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzQwODMtNzE1NWJhNWEtMmMwNy00MjY2LTkxOTctMmMzNzQyZjg2NTZhLmpwZyIsImlhdCI6MTc3MjcxNzM3NCwiZXhwIjoxODA0MjUzMzc0fQ.yp6De8v4O9V7Fon3RxaHdiUVTLBZHMXPsoiAUc9Sw-8',
      location: 'Sorrento',
      description: 'Pool Area Transformation',
    },
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717376612-e89c3742-9d93-42c2-a397-7c17fbbaca36.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzY2MTItZTg5YzM3NDItOWQ5My00MmMyLWEzOTctN2MxN2ZiYmFjYTM2LndlYnAiLCJpYXQiOjE3NzI3MTczNzYsImV4cCI6MTgwNDI1MzM3Nn0.ElLl16TlIKfkOtW54X42lfpd0A8s_gz6LEtLqTT5KI0',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717377789-3981545c-9f4b-49f6-ae91-d8fcf6ceaab5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzc3ODktMzk4MTU0NWMtOWY0Yi00OWY2LWFlOTEtZDhmY2Y2Y2VhYWI1LndlYnAiLCJpYXQiOjE3NzI3MTczNzcsImV4cCI6MTgwNDI1MzM3N30.W1hSjYIUNPA-hIDP9v5im077SZlKD7cPjYi269Tv1_M',
      location: 'Hillarys',
      description: 'Patio & Alfresco Cleaning',
    },
  ],
};

export function DrivewayBeforeAfter({ serviceName }: DrivewayBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get service-specific data or fallback to default driveway images
  const beforeAfterData = beforeAfterDataByService[serviceName] || beforeAfterDataByService.driveway;

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
                    className="w-full h-96 md:h-[600px] object-cover"
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
                    className="w-full h-96 md:h-[600px] object-cover"
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