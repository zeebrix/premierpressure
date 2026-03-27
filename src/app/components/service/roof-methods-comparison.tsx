import { motion } from 'motion/react';
import { Zap, Droplet, Shield, CheckCircle2, XCircle, Clock, TrendingUp } from 'lucide-react';

const methods = [
  {
    name: 'High Pressure Cleaning',
    icon: Zap,
    color: 'bg-red-600',
    tagline: 'Instant Results, Higher Risk',
    description: 'If you\'re selling your home and need instant results to boost curb appeal, high pressure cleaning is your best option. However, we view it as a last resort.',
    pros: [
      'Immediate visible results',
      'Removes heavy buildup quickly',
      'Best for pre-sale situations'
    ],
    cons: [
      'Can damage tiles and capping',
      'Requires walking on roof (tile breakage risk)',
      'May void manufacturer warranties',
      'Regrowth within 4-5 years'
    ],
    bestFor: 'Very old roofs with heavy buildup or urgent pre-sale cleaning',
    longevity: '4-5 years',
    results: 'Immediate'
  },
  {
    name: 'Softwashing',
    icon: Droplet,
    color: 'bg-blue-600',
    tagline: 'Safe, Effective Cleaning',
    recommended: true,
    description: 'A cleaning method that utilizes specially formulated chemical application designed to effectively kill and loosen organic growth such as algae, lichen, moss, and fungus.',
    pros: [
      'Low pressure - safe for tiles',
      'Effective on all roof types',
      'Results visible within days',
      'No harsh scrubbing required'
    ],
    cons: [
      'Requires walking on roof',
      'Regrowth within 4-5 years',
      'Needs professional application'
    ],
    bestFor: 'Newer tiled roofs and Colorbond metal roofing systems',
    longevity: '4-5 years',
    results: 'Within days'
  },
  {
    name: 'Roof Treatment',
    icon: Shield,
    color: 'bg-green-600',
    tagline: 'Long-Lasting Protection',
    recommended: true,
    description: 'We apply a specific chemical (Benzalkonium Chloride) that kills and breaks down algae, lichen, and fungus at their roots. Over 9-18 months, organic growth breaks down and rinses away naturally with the weather.',
    pros: [
      'No roof walking required - applied from ground',
      'Longest lasting results (7-10+ years)',
      'Kills growth at the root',
      'Can be combined with pressure cleaning',
      'Safest for your roof tiles'
    ],
    cons: [
      'Results take 9-18 months',
      'No instant "wow factor"',
      'Patience required'
    ],
    bestFor: 'Homeowners wanting long-term protection and minimal roof contact',
    longevity: '7-10+ years',
    results: '9-18 months'
  }
];

export function RoofMethodsComparison() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Which Cleaning Method is Best?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not all roof cleaning methods are created equal. We offer three approaches, each suited to different needs and priorities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg border-2 overflow-hidden ${
                method.recommended ? 'border-[#00d4ff] relative' : 'border-gray-200'
              }`}
            >
              {method.recommended && (
                <div className="absolute top-4 right-4 bg-[#00d4ff] text-[#0a1628] px-3 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
              )}

              {/* Header */}
              <div className={`${method.color} text-white p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <method.icon className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{method.name}</h3>
                </div>
                <p className="text-white/90 text-sm">{method.tagline}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>

                {/* Pros */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0a1628] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0a1628] mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Considerations
                  </h4>
                  <ul className="space-y-2">
                    {method.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Results
                    </span>
                    <span className="text-sm font-semibold text-[#0a1628]">{method.results}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Longevity
                    </span>
                    <span className="text-sm font-semibold text-[#0a1628]">{method.longevity}</span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-4 bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-3 rounded-r">
                  <p className="text-xs font-semibold text-[#0a1628] mb-1">BEST FOR:</p>
                  <p className="text-sm text-gray-700">{method.bestFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#0a1628] text-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-3">Not Sure Which Method is Right for You?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our team will assess your roof's age, condition, and your specific needs to recommend the best approach. We'll explain all options clearly so you can make an informed decision.
          </p>
          <a
            href="tel:+61452579657"
            className="inline-block bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold hover:bg-[#00c4ef] transition-colors"
          >
            Call 0452 579 657 for Expert Advice
          </a>
        </motion.div>
      </div>
    </section>
  );
}
