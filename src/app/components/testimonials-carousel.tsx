import { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'Absolutely fantastic service! Our driveway looks brand new. The team was professional, punctual, and the results exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    date: '2 weeks ago',
    initials: 'SM',
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Premier Pressure Solutions WA transformed our outdoor entertaining area. The liquid limestone looks incredible. Highly recommend their services!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    date: '1 month ago',
    initials: 'DC',
  },
  {
    name: 'Emily Chen',
    rating: 5,
    text: 'Professional, efficient, and eco-friendly. They cleaned our solar panels and windows with outstanding results. Great value for money!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    date: '3 weeks ago',
    initials: 'EC',
  },
  {
    name: 'Michael O\'Brien',
    rating: 5,
    text: 'Brilliant job on our commercial property. The team was respectful, thorough, and left everything spotless. Will definitely use them again.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    date: '1 week ago',
    initials: 'MO',
  },
];

export function TestimonialsCarousel() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#202124]">
              Google Reviews
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
            Our reputation is built on genuine results
          </p>
        </div>

        {/* Google Business Header */}
        <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 mb-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Business Logo Placeholder */}
            
            
            <div className="flex-1">
              <h2 className="text-xl font-normal text-[#202124] mb-1">
                Premier Pressure Solutions WA
              </h2>
              
              {/* Rating Summary */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#202124] font-medium">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                
              </div>
              
              <p className="text-sm text-[#70757a]">Pressure washing service</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#e0e0e0] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {/* Reviewer Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#ea4335] flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#202124] text-sm">
                      {review.name}
                    </div>
                  </div>
                </div>

                {/* Rating and Date */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#70757a]">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#3c4043] leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {testimonials.length > 3 && (
            <div className="text-center mt-6">
              
            </div>
          )}

          {/* Footer Link */}
          <div className="text-center mt-6 pt-6 border-t border-[#e0e0e0]">
            <a
              href="https://www.google.com/search?q=premier+pressure+solutions+wa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a73e8] text-sm font-medium hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}