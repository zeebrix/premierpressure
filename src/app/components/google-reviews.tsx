import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Mitchell',
    date: '2 weeks ago',
    rating: 5,
    text: 'Absolutely blown away by the transformation! Had them clean our driveway, patio, and house exterior. Every oil stain completely gone and the pavers look brand new. Professional team, on time, and cleaned up perfectly.',
    avatar: 'SM',
    helpful: 12,
    service: 'Driveway & House Washing',
  },
  {
    name: 'James Robertson',
    date: '3 weeks ago',
    rating: 5,
    text: 'Used them for our limestone walls and pavers before listing our house. The transformation was remarkable! Our agent said it made a huge difference - we had multiple offers within the first week. Best money spent on sale prep!',
    avatar: 'JR',
    helpful: 18,
    service: 'Pre-Sale Cleaning',
  },
  {
    name: 'Emma Thompson',
    date: '1 month ago',
    rating: 5,
    text: 'Our roof was covered in moss and lichen. They cleaned it safely without damaging a single tile, found drainage issues, and explained everything clearly. The roof looks 20 years younger! Already booked for annual maintenance.',
    avatar: 'ET',
    helpful: 15,
    service: 'Roof & Gutter Cleaning',
  },
  {
    name: 'Michael Chen',
    date: '2 weeks ago',
    rating: 5,
    text: 'Premier Pressure Solutions WA is in a different league! Cleaned our concrete driveway, pool paving, and limestone walls. No streaks, no missed spots, no damage. They even re-sanded and sealed our pavers. Top-notch work!',
    avatar: 'MC',
    helpful: 21,
    service: 'Pool Area & Paver Sealing',
  },
  {
    name: 'Jennifer Moore',
    date: '4 weeks ago',
    rating: 5,
    text: 'Needed end of lease cleaning for our rental. They cleaned everything - driveway, paths, patio, walls, windows. Property manager was impressed and we got our full bond back. Very reasonable price for the amount of work done.',
    avatar: 'JM',
    helpful: 9,
    service: 'End of Lease Cleaning',
  },
  {
    name: 'Robert Taylor',
    date: '1 month ago',
    rating: 5,
    text: 'Windows cleaned inside and out - crystal clear with no streaks. Also cleaned our rendered walls with mould growth. Careful around landscaping, arrived on time, and price matched the quote. Second time using them, excellent both times!',
    avatar: 'RT',
    helpful: 14,
    service: 'House & Window Cleaning',
  },
];

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Google Reviews
            </h2>
          </div>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0a1628] mb-1">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-left">
              <p className="font-semibold text-[#0a1628] mb-1">
                Premier Pressure Solutions WA
              </p>
              <p className="text-sm text-gray-600">Pressure Cleaning Service</p>
              <p className="text-xs text-gray-500 mt-1">Perth, Western Australia</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Review Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0a1628] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#0a1628] text-sm truncate">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-[#FBBC05] text-[#FBBC05]'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-6">
                  {review.text}
                </p>

                {/* Service Type */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-medium text-[#0a1628] bg-gray-100 px-2 py-1 rounded">
                    {review.service}
                  </span>
                </div>

                {/* Helpful Button */}
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#0a1628] transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {reviews.length > 3 && (
            <div className="flex justify-center gap-4">
              <button
                onClick={prevReview}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  currentIndex === 0
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white'
                }`}
                aria-label="Previous review"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  currentIndex >= reviews.length - 3
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white'
                }`}
                aria-label="Next review"
                disabled={currentIndex >= reviews.length - 3}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Reviews Carousel - Mobile/Tablet */}
        <div className="lg:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0a1628] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {reviews[currentIndex].avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#0a1628] text-sm truncate">
                  {reviews[currentIndex].name}
                </h4>
                <p className="text-xs text-gray-500">{reviews[currentIndex].date}</p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>

            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < reviews[currentIndex].rating
                      ? 'fill-[#FBBC05] text-[#FBBC05]'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {reviews[currentIndex].text}
            </p>

            <div className="mb-3">
              <span className="inline-block text-xs font-medium text-[#0a1628] bg-gray-100 px-2 py-1 rounded">
                {reviews[currentIndex].service}
              </span>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
              <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#0a1628] transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                Helpful ({reviews[currentIndex].helpful})
              </button>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border-2 border-[#0a1628] text-[#0a1628] flex items-center justify-center hover:bg-[#0a1628] hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-transparent'
                      : 'bg-transparent hover:bg-gray-100'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                >
                  <span className={`block w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#00d4ff] w-8'
                      : 'bg-gray-300'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border-2 border-[#0a1628] text-[#0a1628] flex items-center justify-center hover:bg-[#0a1628] hover:text-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://share.google/eVdJIOu0Wqj2sLs2N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#0a1628] border-2 border-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1628] hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}