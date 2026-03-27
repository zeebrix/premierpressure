import { Shield, MapPin, Wrench, Star } from 'lucide-react';
import { motion } from 'motion/react';

const indicators = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete public liability coverage',
  },
  {
    icon: MapPin,
    title: 'Local Perth Business',
    description: 'Serving all Perth suburbs',
  },
  {
    icon: Wrench,
    title: 'Commercial-Grade Equipment',
    description: 'Professional results guaranteed',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: 'Trusted by hundreds of customers',
  },
];

export function ServiceTrust() {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 bg-[#00d4ff]/10 rounded-full flex items-center justify-center">
                <indicator.icon className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <div>
                <div className="font-semibold text-[#0a1628] mb-1 text-lg">
                  {indicator.title}
                </div>
                <p className="text-gray-600 text-sm">
                  {indicator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}