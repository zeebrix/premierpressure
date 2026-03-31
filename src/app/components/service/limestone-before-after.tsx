import image_c7d4fc88143ed06b153de9e8393f52bb62afa98e from 'figma:asset/c7d4fc88143ed06b153de9e8393f52bb62afa98e.webp'
import image_2b7041eca5d18b5bed17d538d7e6af0d637e9ae5 from 'figma:asset/2b7041eca5d18b5bed17d538d7e6af0d637e9ae5.webp'
import image_c1ad607c64109c9af2b69e96ceb3b3ac026b13ab from 'figma:asset/c1ad607c64109c9af2b69e96ceb3b3ac026b13ab.webp'
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LimestoneBeforeAfterProps {
  serviceName: string;
}

const beforeAfterData = [
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/limestone/1770892052873-f8a57acd-f3f7-47a2-baee-80ef83c4ebc5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9saW1lc3RvbmUvMTc3MDg5MjA1Mjg3My1mOGE1N2FjZC1mM2Y3LTQ3YTItYmFlZS04MGVmODNjNGViYzUuanBnIiwiaWF0IjoxNzcwODkyMDUzLCJleHAiOjE4MDI0MjgwNTN9.v3VRwDYI5O-oCqQjNMoFy3z3lEawVtcOovD8oNd8pnE',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/limestone/1770892049405-8fa44127-d9a7-4791-b4c2-c1d768161ade.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9saW1lc3RvbmUvMTc3MDg5MjA0OTQwNS04ZmE0NDEyNy1kOWE3LTQ3OTEtYjRjMi1jMWQ3NjgxNjFhZGUuanBnIiwiaWF0IjoxNzcwODkyMDUwLCJleHAiOjE4MDI0MjgwNTB9.cD-m1SyxM5JSE8KXW3eEV9X0p2rqb004bOP3RJunfNo',
    location: 'Beaconsfield',
    description: 'Limestone Steps Restoration',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/limestone/1770891899171-36c04a16-7756-44a3-8f6c-992d6b167349.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9saW1lc3RvbmUvMTc3MDg5MTg5OTE3MS0zNmMwNGExNi03NzU2LTQ0YTMtOGY2Yy05OTJkNmIxNjczNDkuanBnIiwiaWF0IjoxNzcwODkxODk5LCJleHAiOjE4MDI0Mjc4OTl9.RSoaKtn3rw4o4-PWEq7BAlyn9TWcuxIS_tGRHbnjZTQ',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/limestone/1770891900349-f2131583-a6e7-4d79-bb3a-b9e19d4dd917.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9saW1lc3RvbmUvMTc3MDg5MTkwMDM0OS1mMjEzMTU4My1hNmU3LTRkNzktYmIzYS1iOWUxOWQ0ZGQ5MTcuanBnIiwiaWF0IjoxNzcwODkxOTAwLCJleHAiOjE4MDI0Mjc5MDB9.6zO4SDMLlDsJIG-kXjkacqqWfyj4dXx88MMR7WTWU-8',
    location: 'Wembley Downs',
    description: 'Liquid Limestone Cleaning',
  },
  {
    before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1770895109942-5da3d71a-1181-4f95-853b-e4d5cb982fe9.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzA4OTUxMDk5NDItNWRhM2Q3MWEtMTE4MS00Zjk1LTg1M2ItZTRkNWNiOTgyZmU5LmpwZyIsImlhdCI6MTc3MDg5NTExMCwiZXhwIjoxODAyNDMxMTEwfQ.kYKGYQeAfsSRWxX7yB8eEoZLSq4asVW1pQB76d75iFI',
    after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1770895111105-199b1036-5e84-4966-9c7f-ebc03c9d5bd1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzA4OTUxMTExMDUtMTk5YjEwMzYtNWU4NC00OTY2LTljN2YtZWJjMDNjOWQ1YmQxLmpwZyIsImlhdCI6MTc3MDg5NTExMSwiZXhwIjoxODAyNDMxMTExfQ.3Y5cMBGtrtjTU30Bz6DLsXDm0D8dwlpNj4R1NCyPFQU',
    location: 'Alkimos',
    description: 'Limestone Cleaning',
  },
];

export function LimestoneBeforeAfter({ serviceName }: LimestoneBeforeAfterProps) {
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