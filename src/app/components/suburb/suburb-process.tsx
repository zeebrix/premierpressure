import { motion } from 'motion/react';
import { MessageSquare, MapPin, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Book Your Free Quote',
    description: 'Call 0452 579 657 or fill out our online form. We respond within hours with a no-obligation quote.',
  },
  {
    icon: MapPin,
    title: 'Site Visit & Confirmation',
    description: 'We visit your property to assess the work and confirm pricing. You choose a convenient time for the clean.',
  },
  {
    icon: Sparkles,
    title: 'We Complete The Clean',
    description: 'Our professional team arrives on time with all equipment and delivers exceptional results you\'ll love.',
  },
];

interface SuburbProcessProps {
  suburbName: string;
}

export function SuburbProcess({ suburbName }: SuburbProcessProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            How It Works in {suburbName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your {suburbName} property professionally cleaned is simple. Just three easy steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/20 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                </div>
              )}

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col min-h-[240px] border border-gray-200">
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

        <div className="text-center mt-12">
          <a
            href="tel:+61452579657"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl"
          >
            <MessageSquare className="w-5 h-5" />
            Get Started - Call 0452 579 657
          </a>
        </div>
      </div>
    </section>
  );
}
