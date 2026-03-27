import { CheckCircle2, Clock, Shield, Award, Leaf, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface SuburbWhyChooseProps {
  suburbName: string;
}

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Local Expertise',
    description: 'We know the specific cleaning needs of properties in this area',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day service available for urgent cleaning needs',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive insurance coverage',
  },
  {
    icon: Award,
    title: '5-Star Rated',
    description: 'Trusted by hundreds of satisfied customers across Perth',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Safe, biodegradable cleaning solutions that protect your property',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Transparent quotes with no hidden fees or surprises',
  },
];

export function SuburbWhyChoose({ suburbName }: SuburbWhyChooseProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why {suburbName} Residents Choose Us
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Premier Pressure Solutions WA is your trusted local pressure cleaning expert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#00d4ff]/50 transition-all hover:bg-white/10 group"
              >
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00d4ff]/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
