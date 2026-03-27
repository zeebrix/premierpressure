import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#0d1f35] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full min-w-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Property?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8">
              Get your free, no-obligation quote today. Our friendly team is ready to help you achieve outstanding results.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+61452579657"
                className="flex items-center gap-3 sm:gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#00d4ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/70">Call us now</p>
                  <p className="text-lg font-semibold text-white">0452 579 657</p>
                </div>
              </a>

              <a
                href="mailto:info@premierpressuresolutions.com"
                className="flex items-center gap-3 sm:gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#00d4ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm text-white/70">Email us</p>
                  <p className="text-base sm:text-lg font-semibold text-white break-all">info@premierpressuresolutions.com</p>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-3">Business Hours</h3>
              <div className="space-y-2 text-white/80 text-sm sm:text-base">
                <p>Monday - Sunday: 7:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full min-w-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a1628]">Get Your Free Quote</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none transition-all"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="concrete">Concrete Cleaning</option>
                  <option value="driveway">Driveway Cleaning</option>
                  <option value="window">Window Cleaning</option>
                  <option value="solar">Solar Panel Cleaning</option>
                  <option value="limestone">Liquid Limestone Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0a1628] text-white py-4 rounded-lg font-semibold hover:bg-[#0a1628]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Request Free Quote
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted about your quote.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}