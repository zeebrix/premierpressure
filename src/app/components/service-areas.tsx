import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const suburbs = [
  'Subiaco', 'South Perth', 'Nedlands', 'Claremont', 'Cottesloe',
  'Fremantle', 'Applecross', 'Mount Lawley', 'Victoria Park', 'Leederville',
  'West Leederville', 'Shenton Park', 'Crawley', 'Dalkeith', 'Peppermint Grove',
  'Mosman Park', 'North Perth', 'East Perth', 'Northbridge', 'Maylands',
];

export function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00d4ff]/10 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-[#00d4ff]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Servicing Perth & Surrounds
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We proudly serve homes and businesses across the greater Perth metropolitan area.
          </p>
        </motion.div>

        {/* Suburbs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
        >
          {suburbs.map((suburb, index) => (
            <motion.div
              key={suburb}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#00d4ff]/10 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
              <span className="text-sm text-gray-700">{suburb}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#0a1628] to-[#0a1628]/90 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't See Your Suburb Listed?
          </h3>
          <p className="text-lg text-white/90 mb-6">
            We service many more areas across Perth. Give us a call to check if we cover your location.
          </p>
          <a
            href="tel:+61452579657"
            className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg transition-all hover:bg-[#00c4ef] shadow-lg hover:shadow-xl font-semibold"
          >
            <MapPin className="w-5 h-5" />
            <span>Contact Us Today</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}