import { motion } from 'motion/react';
import { Phone, Calendar, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Get in Touch',
    description: 'Call us or request a free quote online. We respond quickly to all inquiries.',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/20 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                </div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col min-h-[240px]">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00d4ff] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#0a1628]">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#0a1628] rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}