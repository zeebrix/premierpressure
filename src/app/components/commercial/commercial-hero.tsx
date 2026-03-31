import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import heroImage from '../../../assets/1ef480a4697ca3350ef723e0ead8e0aa6892ee92.webp';

interface CommercialHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function CommercialHero({ title, subtitle, description }: CommercialHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a1628]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Commercial building background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-[#00d4ff] font-bold uppercase tracking-widest text-xs">{subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+61452579657"
              className="inline-flex items-center justify-center gap-3 bg-[#00d4ff] text-[#0a1628] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#00c4ef] transition-all shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>Get Instant Quote</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Mail className="w-6 h-6" />
              <span>Commercial Inquiry</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Overlay on Desktop */}
      <div className="hidden xl:block absolute right-20 bottom-20 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-[#00d4ff]">24/7</div>
            <div className="text-white/60 text-sm leading-tight uppercase tracking-wider font-semibold">Service<br/>Availability</div>
          </div>
          <div className="w-full h-[1px] bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-[#00d4ff]">100%</div>
            <div className="text-white/60 text-sm leading-tight uppercase tracking-wider font-semibold">Quality<br/>Assurance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
