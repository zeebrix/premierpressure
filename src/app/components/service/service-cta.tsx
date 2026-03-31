import { useState } from 'react';
import { Phone, Mail, Send, BadgePercent } from 'lucide-react';
import { motion } from 'motion/react';

// Web3Forms API key - linked to maharzain76@gmail.com
const WEB3FORMS_KEY = '25ea480e-c6b3-44f6-a5c5-9f59ae8447d0';

interface ServiceCTAProps {
  serviceName?: string;
  descriptionPlaceholder?: string;
}

export function ServiceCTA({ 
  serviceName = 'Driveway', 
  descriptionPlaceholder = 'Tell us about your cleaning needs...'
}: ServiceCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New ${serviceName} Service Inquiry from ${formData.name}`,
          from_name: 'Premier Pressure Solutions WA Website',
          name: formData.name,
          phone: formData.phone,
          suburb: formData.suburb || 'Not provided',
          service: serviceName,
          description: formData.description || 'No description provided',
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit quote');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', suburb: '', description: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="quote" className="py-12 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#0d1f3a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Column - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full min-w-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your {serviceName}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Get a free, no-obligation quote today. Our Perth-based team is ready to restore your {serviceName} to like-new condition.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-6 sm:mb-8">
              <a
                href="tel:+61452579657"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors group backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00d4ff] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#0a1628]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/70 mb-1">Call us now</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">0452 579 657</p>
                </div>
              </a>

              <a
                href="mailto:maharzain76@gmail.com"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors group backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00d4ff] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#0a1628]" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm text-white/70 mb-1">Email us</p>
                  <p className="text-sm sm:text-base font-semibold text-white break-all">maharzain76@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
              <h3 className="font-semibold text-white mb-3 text-base sm:text-lg">Why Get a Quote?</h3>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1 flex-shrink-0">✓</span>
                  <span>Free, no-obligation assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1 flex-shrink-0">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1 flex-shrink-0">✓</span>
                  <span>Expert advice on the best cleaning approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1 flex-shrink-0">✓</span>
                  <span>Same-day response during business hours</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 w-full min-w-0 relative"
          >
            {/* 10% Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#00d4ff] to-[#00b4df] text-[#0a1628] px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-sm sm:text-base z-10">
              <BadgePercent className="w-5 h-5" />
              <span>10% OFF New Customers</span>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">We've received your inquiry and will contact you within 24 hours.</p>
                <a
                  href="tel:+61452579657"
                  className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 0452 579 657
                </a>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Something went wrong</h3>
                <p className="text-gray-600 mb-6">{errorMessage}</p>
                <a
                  href="tel:+61452579657"
                  className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 0452 579 657
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1628] mb-2">
                  Request Your Free Quote
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0a1628] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0a1628] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
                      placeholder="0400 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="suburb" className="block text-sm font-semibold text-[#0a1628] mb-2">
                      Suburb *
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      required
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
                      placeholder="e.g. Applecross, Nedlands"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-[#0a1628] mb-2">
                      Job Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all resize-none"
                      placeholder={descriptionPlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00d4ff] text-[#0a1628] px-6 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0a1628]"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Get Your Free Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to be contacted by Premier Pressure Solutions WA
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