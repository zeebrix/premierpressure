import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PaverBeforeAfterProps {
  serviceName: string;
}

const beforeAfterData = [
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340494350-98f74a3c-dc61-4dd1-a25b-46b12e4aa8bb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA0OTQzNTAtOThmNzRhM2MtZGM2MS00ZGQxLWEyNWItNDZiMTJlNGFhOGJiLmpwZyIsImlhdCI6MTc3MTM0MDQ5NSwiZXhwIjoxODAyODc2NDk1fQ._-P_LzX8vm2wwUJS2Enumnm-qpJA7M_5S158puPH63w',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340497920-ec3481ff-a213-4d69-9748-ec111bcc6c3a.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA0OTc5MjAtZWMzNDgxZmYtYTIxMy00ZDY5LTk3NDgtZWMxMTFiY2M2YzNhLmpwZyIsImlhdCI6MTc3MTM0MDQ5OCwiZXhwIjoxODAyODc2NDk4fQ.kpFRSOADhX1W8Y5cUo-R1UeLUCOgn_Ep5bw6JAc_5AI',
    location: 'Gwelup',
    description: 'Paver cleaning',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340506204-e39c5ff2-84f2-4caf-b092-2e97ee30bca1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA1MDYyMDQtZTM5YzVmZjItODRmMi00Y2FmLWIwOTItMmU5N2VlMzBiY2ExLmpwZyIsImlhdCI6MTc3MTM0MDUwNiwiZXhwIjoxODAyODc2NTA2fQ.m5r7sIZ46DuWaGrJ-EQ6buOBckWuRe8mfRP_7Z0PCaY',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340499808-11a502ce-379e-4ca4-b6f1-becd865f6f75.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA0OTk4MDgtMTFhNTAyY2UtMzc5ZS00Y2E0LWI2ZjEtYmVjZDg2NWY2Zjc1LmpwZyIsImlhdCI6MTc3MTM0MDUwMCwiZXhwIjoxODAyODc2NTAwfQ.4T4bxlDUFdXTAxKkGRlsgKtL1ajrjNNwd01t8QKZF3Y',
    location: 'Victoria Park',
    description: 'Paver Restoration',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340502167-069fb70b-01f3-4766-a9cb-1e89a122ba8e.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA1MDIxNjctMDY5ZmI3MGItMDFmMy00NzY2LWE5Y2ItMWU4OWExMjJiYThlLmpwZyIsImlhdCI6MTc3MTM0MDUwMiwiZXhwIjoxODAyODc2NTAyfQ.B22YhPrI8sIXrQLXwSrKLu-lfJKpLuXJCfyFm_-9ryE',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771340501084-16e6e6a9-35a4-445e-8a06-2240ae3b1055.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzEzNDA1MDEwODQtMTZlNmU2YTktMzVhNC00NDVlLThhMDYtMjI0MGFlM2IxMDU1LmpwZyIsImlhdCI6MTc3MTM0MDUwMSwiZXhwIjoxODAyODc2NTAxfQ.NLSD_U3id80Yr2Q6UsRu66Puud13MC7ytwu-beenQSA',
    location: 'Burswood',
    description: 'Patio paver deep cleaning',
  },
];

export function PaverBeforeAfter({ serviceName }: PaverBeforeAfterProps) {
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