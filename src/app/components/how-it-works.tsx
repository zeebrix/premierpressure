'use client';

import { motion } from 'motion/react';
import { Phone, Calendar, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Get in Touch',
    description: 'Call us or request a free quote online. We respond within 2 hours during business hours.',
  },
  {
    icon: Calendar,
    title: 'Schedule Service',
    description: 'Choose a convenient time that works for you. We offer flexible scheduling.',
  },
  {
    icon: Sparkles,
    title: 'Professional Clean',
    description: 'Our expert team arrives on time and delivers exceptional results.',
  },
  {
    icon: CheckCircle,
    title: 'Enjoy the Results',
    description: 'Sit back and admire your refreshed, pristine property.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020B1C] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#2A3D5E] max-w-2xl mx-auto">
            Getting your property cleaned is simple. Follow these four easy steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-1/2 w-full h-px bg-gradient-to-r from-[#0057FF]/45 to-[#2A3D5E]/15 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-2 border-[#0057FF] rounded-full"></div>
                </div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-xl p-6 shadow-[0_12px_30px_rgba(2,11,28,0.08)] hover:shadow-[0_18px_40px_rgba(2,11,28,0.14)] transition-shadow h-full flex flex-col min-h-[240px] border border-[#2A3D5E]/10">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#0057FF]/20">
                  <span className="w-8 h-8 rounded-full bg-[#0057FF] text-white text-sm font-bold flex items-center justify-center">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#0057FF] to-[#0049d8] rounded-2xl flex items-center justify-center mb-5 shadow-[0_10px_24px_rgba(0,87,255,0.24)] ring-4 ring-[#0057FF]/10">
                  <step.icon className="w-7 h-7 text-white" strokeWidth={2.4} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#020B1C] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#2A3D5E] flex-grow leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-[#0057FF] text-white px-8 py-4 rounded-lg transition-all hover:bg-[#0049d8] shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg min-h-[56px] touch-manipulation"
          >
            Start Now - Get Your Free Quote within 2 hours
          </a>
        </div>
      </div>
    </section>
  );
}
