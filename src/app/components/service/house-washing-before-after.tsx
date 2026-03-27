import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HouseWashingBeforeAfterProps {
  serviceName: string;
}

const beforeAfterData = [
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771560827853-b9071cb6-8ede-4e56-baca-af4e3f8bb7c8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYwODI3ODUzLWI5MDcxY2I2LThlZGUtNGU1Ni1iYWNhLWFmNGUzZjhiYjdjOC5qcGciLCJpYXQiOjE3NzE1NjA4MjgsImV4cCI6MTgwMzA5NjgyOH0.K8TWpSgZTNGmxo9gorFavPb41J3Omh8EpudzeGshvG0',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771560826342-128cc9cc-0a5e-4fa8-b82a-d4a4e10fc5f4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYwODI2MzQyLTEyOGNjOWNjLTBhNWUtNGZhOC1iODJhLWQ0YTRlMTBmYzVmNC5qcGciLCJpYXQiOjE3NzE1NjA4MjYsImV4cCI6MTgwMzA5NjgyNn0.UasjzKzGb-O7pkuwL_C2KZyklpHEHjR5WlONgc0GHYo',
    location: 'Cottesloe',
    description: 'House exterior washing',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771561587707-b0725a15-fb4d-4af8-bb85-d352fc2f4c4c.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYxNTg3NzA3LWIwNzI1YTE1LWZiNGQtNGFmOC1iYjg1LWQzNTJmYzJmNGM0Yy5qcGciLCJpYXQiOjE3NzE1NjE1ODcsImV4cCI6MTgwMzA5NzU4N30.z0RHWGgK3_5Qs9ZTgOydu3Y3CoG-8MyU0dk34BB1NW8',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771561588995-6e1cdd8d-dccb-4659-9669-8b3d982822ae.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYxNTg4OTk1LTZlMWNkZDhkLWRjY2ItNDY1OS05NjY5LThiM2Q5ODI4MjJhZS5qcGciLCJpYXQiOjE3NzE1NjE1ODksImV4cCI6MTgwMzA5NzU4OX0.-cZ7VFUafxYuBskTHtK1hezQbmTcPnSCuPE81PE27u0',
    location: 'Innaloo',
    description: 'Anti Micro-bial Treatment',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771561586320-c277186a-53c2-4597-9c41-0dd3049f4099.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYxNTg2MzIwLWMyNzcxODZhLTUzYzItNDU5Ny05YzQxLTBkZDMwNDlmNDA5OS5qcGciLCJpYXQiOjE3NzE1NjE1ODYsImV4cCI6MTgwMzA5NzU4Nn0.M3JOXM_irwIlX3dib282_rq6XOZyCycAMxL0KnVRLZE',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/house/1771561585570-096fb209-ec36-4ec9-b36c-26ebc4ddb17a.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9ob3VzZS8xNzcxNTYxNTg1NTcwLTA5NmZiMjA5LWVjMzYtNGVjOS1iMzZjLTI2ZWJjNGRkYjE3YS5qcGciLCJpYXQiOjE3NzE1NjE1ODUsImV4cCI6MTgwMzA5NzU4NX0.f0WoGs9NLJJgfTpsZcK4rpCXNmKhar47CYyc0ACsYzg',
    location: 'Bayswater',
    description: 'Exterior wall cleaning',
  },
];

export function HouseWashingBeforeAfter({ serviceName }: HouseWashingBeforeAfterProps) {
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