import { ClipboardCheck, Droplets, Sparkles, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

const icons = [ClipboardCheck, Droplets, Sparkles, ShieldCheck, CheckCircle];

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-12 md:py-20 bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A systematic approach that delivers consistently excellent results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00d4ff] rounded-full flex items-center justify-center font-bold text-[#0a1628] text-xl shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="w-14 h-14 bg-[#00d4ff]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent -translate-y-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}