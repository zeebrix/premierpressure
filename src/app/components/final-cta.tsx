'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const WEB3FORMS_KEY = '25ea480e-c6b3-44f6-a5c5-9f59ae8447d0';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Quote Request from ${formData.name}`,
          from_name: 'PPS Exterior Cleaning Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          suburb: formData.suburb || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message || 'No additional details',
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', suburb: '', service: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-[#020B1C] via-[#020B1C] to-[#06152E] overflow-hidden">
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
                className="flex items-center gap-3 sm:gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 hover:border-[#0057FF]/40 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0057FF] to-[#0049d8] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 shadow-[0_10px_24px_rgba(0,87,255,0.28)] ring-1 ring-white/20">
                  <Phone className="w-6 h-6 text-white" strokeWidth={2.4} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/70">Call us now</p>
                  <p className="text-lg font-semibold text-white">0452 579 657</p>
                </div>
              </a>

              <a
                href="mailto:info@ppsexteriorcleaning.com.au"
                className="flex items-center gap-3 sm:gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 hover:border-[#0057FF]/40 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0057FF] to-[#0049d8] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 shadow-[0_10px_24px_rgba(0,87,255,0.28)] ring-1 ring-white/20">
                  <Mail className="w-6 h-6 text-white" strokeWidth={2.4} />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm text-white/70">Email us</p>
                  <p className="text-base sm:text-lg font-semibold text-white break-all">info@ppsexteriorcleaning.com.au</p>
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
            {submitStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#020B1C] mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">We've received your quote request and will contact you within 24 hours.</p>
                <a href="tel:+61452579657" className="inline-flex items-center gap-2 bg-[#0057FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0049d8] transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now: 0452 579 657
                </a>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#020B1C] mb-2">Something went wrong</h3>
                <p className="text-gray-600 mb-6">Please call us directly or try again.</p>
                <a href="tel:+61452579657" className="inline-flex items-center gap-2 bg-[#0057FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0049d8] transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now: 0452 579 657
                </a>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#0057FF]/10 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-[#0057FF]/20">
                    <MessageSquare className="w-5 h-5 text-[#0057FF]" strokeWidth={2.4} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#020B1C]">Get Your Free Quote</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all"
                        placeholder="name@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel" id="phone" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">Suburb *</label>
                    <input
                      type="text" id="suburb" name="suburb" required
                      value={formData.suburb} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all"
                      placeholder="Cottesloe"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      id="service" name="service" required
                      value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="concrete">Concrete Cleaning</option>
                      <option value="driveway">Driveway Cleaning</option>
                      <option value="window">Window Cleaning</option>
                      <option value="roof">Roof Cleaning</option>
                      <option value="limestone">Liquid Limestone Cleaning</option>
                      <option value="house">House Washing</option>
                      <option value="paver">Paver Cleaning & Sealing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057FF] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-[#020B1C] text-white py-4 rounded-lg font-semibold hover:bg-[#020B1C]/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      'Request Free Quote'
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted about your quote.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
