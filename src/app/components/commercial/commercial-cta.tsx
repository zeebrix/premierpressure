import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface CommercialCTAProps {
  serviceName: string;
  descriptionPlaceholder?: string;
}

export function CommercialCTA({ serviceName, descriptionPlaceholder = 'Tell us about your commercial pressure cleaning needs...' }: CommercialCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Commercial Quote Request - ${serviceName}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:info@premierpressuresolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2b45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Commercial Quote
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a customized quote tailored to your commercial property needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00d4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <a href="tel:+61452579657" className="text-[#00d4ff] hover:underline text-lg">
                    0452 579 657
                  </a>
                  <p className="text-white/70 text-sm mt-1">Monday - Sunday, 7am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00d4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <a href="mailto:info@premierpressuresolutions.com" className="text-[#00d4ff] hover:underline">
                    info@premierpressuresolutions.com
                  </a>
                  <p className="text-white/70 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></span>
                  Free, no-obligation quotes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></span>
                  Fully insured & experienced
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></span>
                  Commercial-grade equipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></span>
                  Flexible scheduling
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6">Request a Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none text-gray-900"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none text-gray-900"
                    placeholder="0412 345 678"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none text-gray-900"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Description *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none resize-none text-gray-900"
                    placeholder={descriptionPlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00d4ff] text-[#0a1628] py-4 rounded-lg font-bold text-lg hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}