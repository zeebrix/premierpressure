import { Shield, Leaf, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';

const indicators = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete insurance coverage for your peace of mind',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Environmentally responsible cleaning practices',
  },
  {
    icon: MapPin,
    title: 'Local Perth Company',
    description: 'Proudly serving the Perth community',
  },
  {
    icon: Star,
    title: '5-Star Google Reviews',
    description: 'Trusted by hundreds of satisfied customers',
  },
];

export function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center">
                <indicator.icon className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-[#0a1628] mb-1">
                  {indicator.title}
                </div>
                <p className="text-gray-600 text-sm">
                  {indicator.description}
                </p>
                {indicator.title === '5-Star Google Reviews' && (
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}