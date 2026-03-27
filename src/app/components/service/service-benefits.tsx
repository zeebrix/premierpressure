import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceBenefitsProps {
  intro: string;
  points: string[];
  closing: string;
  serviceName: string;
}

export function ServiceBenefits({ intro, points, closing, serviceName }: ServiceBenefitsProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Why Choose Professional {serviceName}?
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              {intro.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6">
                Benefits of Our Service
              </h3>
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {closing}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}