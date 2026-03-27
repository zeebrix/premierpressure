import { Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export function HeroSection() {
  // Using public URL instead of signed URL for better caching and faster LCP
  const heroImageUrl = "https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772546534545-3460df8e-5613-401a-be7d-a720ad396872.webp";

  return (
    <section className="relative min-h-screen lg:min-h-[75vh] flex items-start justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Preload Critical Hero Image */}
      <Helmet>
        <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
      </Helmet>

      {/* Background Image - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Professional pressure cleaning service Perth"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          fetchpriority="high"
          decoding="sync"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/40"></div>
      </div>

      {/* Content - Mobile Optimized Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight drop-shadow-lg">
            Perth's Trusted <span className="text-[#00d4ff]">Pressure Cleaning</span> Specialists
          </h1>
          <p className="text-lg sm:text-lg lg:text-xl text-white/95 mb-12 sm:mb-10 max-w-2xl drop-shadow-md">
            Fast, reliable, and eco-friendly pressure cleaning services from your trusted local Perth experts. Fully insured for your peace of mind.
          </p>
          
          {/* CTA Buttons - Mobile First with Larger Touch Targets */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:+61452579657"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 sm:py-3.5 rounded-lg transition-all hover:bg-[#00c4ef] shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Call 0452 579 657</span>
            </a>
            
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 sm:py-3.5 rounded-lg transition-all hover:bg-white/90 shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <FileText className="w-5 h-5 flex-shrink-0" />
              <span>Get a Free Quote</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile Visible, Desktop Hidden on smaller heights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 mx-auto"
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-white/70 text-xs mt-2 text-center font-medium">Scroll</p>
      </motion.div>
    </section>
  );
}