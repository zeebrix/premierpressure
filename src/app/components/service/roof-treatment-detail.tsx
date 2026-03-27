import { motion } from 'motion/react';
import { Shield, Clock, Leaf, CheckCircle2, Sparkles } from 'lucide-react';

export function RoofTreatmentDetail() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Our Premium Treatment Method
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Gentle, Long-Lasting Clean
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              When most people think about roof cleaning, they imagine high-pressure washing – but that approach can actually cause more problems than it solves! We use gentle softwashing techniques and specialized roof treatments designed to get your roof sparkling clean while keeping it completely safe from damage.
            </p>

            <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-[#0a1628] mb-2">How Our Roof Treatment Works:</h3>
              <p className="text-gray-700 mb-3">
                We apply a specific chemical solution (<strong>Benzalkonium Chloride</strong>) that kills and breaks down algae, lichen, and fungus <strong>at their roots</strong>. Over 9–18 months, the organic growth breaks down and rinses away naturally with Perth's weather patterns.
              </p>
              <p className="text-gray-700">
                While you don't get the instant wow factor, this method offers superior long-term protection for your investment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a1628] mb-1">No Roof Walking</h4>
                  <p className="text-sm text-gray-600">Applied safely from ground level in most cases</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a1628] mb-1">7-10+ Years</h4>
                  <p className="text-sm text-gray-600">vs 4-5 years for pressure washing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <Leaf className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a1628] mb-1">Kills at Roots</h4>
                  <p className="text-sm text-gray-600">Eliminates growth from the source</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a1628] mb-1">Safest Method</h4>
                  <p className="text-sm text-gray-600">Protects tile integrity and warranties</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Treatment Benefits Include:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Can be applied after pressure cleaning for instant results PLUS long-term protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Minimal risk of tile breakage or damage to capping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Won't void manufacturer warranties on newer roofs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Natural breakdown process—nature does the work</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6 text-center">
                Treatment Timeline
              </h3>
              
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00d4ff] text-[#0a1628] flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-[#0a1628] mb-1">Day 1: Treatment Applied</h4>
                    <p className="text-sm text-gray-600">Benzalkonium Chloride solution applied to kill organic growth at the roots. Safe, low-pressure application.</p>
                  </div>
                </div>

                {/* 3 Months */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                      3M
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-[#0a1628] mb-1">3 Months: Growth Dying</h4>
                    <p className="text-sm text-gray-600">Organic materials begin breaking down. You'll notice moss and lichen starting to loosen and fade.</p>
                  </div>
                </div>

                {/* 9 Months */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                      9M
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-[#0a1628] mb-1">9-18 Months: Natural Rinse</h4>
                    <p className="text-sm text-gray-600">Perth's rain naturally rinses away dead organic matter. Your roof gradually returns to its clean state.</p>
                  </div>
                </div>

                {/* 7+ Years */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                      7Y+
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1628] mb-1">7-10+ Years: Long-Term Protection</h4>
                    <p className="text-sm text-gray-600">Your roof stays cleaner for 2-3 times longer than pressure washing alone. Maximum value for your investment.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-center text-gray-700">
                  <strong className="text-green-700">Pro Tip:</strong> Combine treatment with softwashing for immediate visible results AND long-term protection!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
