import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface ImageMetadata {
  id: string;
  fileName: string;
  category: string;
  description: string;
  uploadedAt: string;
  signedUrl: string;
  originalName: string;
  size: number;
  type: string;
}

interface BeforeAfterCarouselProps {
  category: string;
  limit?: number;
}

export function BeforeAfterCarousel({ category, limit = 6 }: BeforeAfterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-bb20e683`;

  useEffect(() => {
    async function fetchImages() {
      try {
        const url = `${API_URL}/images?category=${category}`;
        
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load images');
        }

        const data = await response.json();
        
        if (data.images && data.images.length > 0) {
          // Limit the number of images
          const limitedImages = data.images.slice(0, limit);
          setImages(limitedImages);
        }
      } catch (error) {
        console.error('Error fetching before/after images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [category, limit]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(images.length / 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(images.length / 2)) % Math.ceil(images.length / 2));
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00d4ff]"></div>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-gray-600">
          <p>No images available for this category yet.</p>
        </div>
      </div>
    );
  }

  // Group images into pairs (before/after)
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    if (images[i + 1]) {
      imagePairs.push({
        before: images[i].signedUrl,
        after: images[i + 1].signedUrl,
        description: images[i].description || `${category} cleaning`,
      });
    }
  }

  if (imagePairs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-gray-600">
          <p>No image pairs available for this category yet.</p>
        </div>
      </div>
    );
  }

  const current = imagePairs[currentIndex];

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
                  alt={`Before ${category} pressure cleaning Perth - Professional exterior washing and restoration services`}
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
                  alt={`After ${category} pressure cleaning Perth - Stunning results from Premier Pressure Solutions WA`}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-[#00d4ff]" />
                <span className="font-medium capitalize">{current.description}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {imagePairs.length > 1 && (
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
        {imagePairs.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {imagePairs.map((_, index) => (
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