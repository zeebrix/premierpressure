'use client';

import { Award, FileText, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  // Using public URL instead of signed URL for better caching and faster LCP
  const heroImageUrl = "https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772546534545-3460df8e-5613-401a-be7d-a720ad396872.webp";

  const trustBadges = [
    { icon: ShieldCheck, title: 'Fully Insured', text: '$20M public liability' },
    { icon: Star, title: '5-Star Rated', text: 'Local Perth reviews' },
    { icon: Award, title: 'Satisfaction Guaranteed', text: 'Quality workmanship' },
    { icon: MapPin, title: 'Perth Owned & Operated', text: 'Local, reliable team' },
  ];

  return (
    <section className="relative min-h-[760px] lg:min-h-[690px] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 bg-[#020B1C]">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt="Professional pressure cleaning service Perth"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C]/95 via-[#06152E]/45 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020B1C] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-5 h-1 w-16 bg-[#0057FF]"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mb-5 sm:mb-6 leading-[1.04] drop-shadow-lg">
            Professional Pressure Cleaning &amp; Exterior Cleaning in Perth
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#D6DCE5] mb-8 sm:mb-9 max-w-xl leading-relaxed drop-shadow-md">
            Transform your property in as little as one day. Driveways, patios, limestone, house washing, roof cleaning and commercial exterior cleaning by PPS Exterior Cleaning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:+61452579657"
              className="inline-flex items-center justify-center gap-2 bg-[#0057FF] text-white px-7 py-4 rounded-md transition-all hover:bg-[#0049d8] shadow-lg hover:shadow-xl font-semibold text-base min-h-[56px] touch-manipulation"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Call 0452 579 657</span>
            </a>
            
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white px-7 py-4 rounded-md transition-all hover:bg-white hover:text-[#020B1C] shadow-lg hover:shadow-xl font-semibold text-base min-h-[56px] touch-manipulation"
            >
              <FileText className="w-5 h-5 flex-shrink-0" />
              <span>Get a Free Quote</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-start gap-3 border-r border-[#2A3D5E] pr-4 last:border-r-0"
              >
                <badge.icon className="mt-0.5 h-8 w-8 shrink-0 text-[#0057FF]" />
                <div>
                  <div className="text-xs font-bold uppercase leading-tight text-white">
                    {badge.title}
                  </div>
                  <p className="mt-1 text-xs leading-snug text-[#D6DCE5]">{badge.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
