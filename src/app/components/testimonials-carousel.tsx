'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsCarousel() {
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#020B1C]">
              Google Reviews
            </h2>
          </div>
          <p className="text-lg text-[#2A3D5E] max-w-2xl mx-auto">
            Our reputation is built on genuine results
          </p>
        </div>

        {/* Google Business Header */}
        <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 mb-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Business Logo Placeholder */}
            
            
            <div className="flex-1">
              <h2 className="text-xl font-normal text-[#020B1C] mb-1">
                PPS Exterior Cleaning
              </h2>
              
              {/* Rating Summary */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#020B1C] font-medium">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                
              </div>
              
              <p className="text-sm text-[#2A3D5E]">Pressure washing service</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#020B1C] border border-[#2A3D5E] rounded-lg p-6 text-center"
          >
            <p className="text-[#D6DCE5] leading-relaxed mb-5">
              Live Google review embeds need an approved reviews widget or Google Places API setup. Until the real review feed is connected, this section sends visitors straight to the current PPS Exterior Cleaning Google profile.
            </p>
            <div className="flex justify-center gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
              ))}
            </div>
            <a
              href="https://share.google/KLOO2pe1BBeKlOPda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0057FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0049d8] transition-all"
            >
              See PPS Reviews on Google
            </a>
          </motion.div>

          <div className="text-center mt-6 pt-6 border-t border-[#e0e0e0]">
            <a
              href="https://share.google/KLOO2pe1BBeKlOPda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0057FF] text-sm font-medium hover:underline"
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
