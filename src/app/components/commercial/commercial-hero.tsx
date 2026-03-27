import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

interface CommercialHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function CommercialHero({ title, subtitle, description }: CommercialHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a2b45] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full mb-6">
            <span className="text-[#00d4ff] font-semibold">{subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+61452579657"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call 0452 579 657</span>
            </a>
            <a
              href="mailto:info@premierpressuresolutions.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email for Quote</span>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
