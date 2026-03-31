import { motion } from 'motion/react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';

// Web3Forms API key - linked to info@premierpressuresolutions.com
const WEB3FORMS_KEY = '25ea480e-c6b3-44f6-a5c5-9f59ae8447d0';

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
          subject: `Commercial Quote Request - ${formData.company || formData.name}`,
          from_name: 'Premier Pressure Solutions WA Commercial',
          ...formData,
          service: serviceName,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#00d4ff]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0a1628] border-t border-r border-[#00d4ff]/10 rounded-tr-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Conversion Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Scale Your <span className="text-[#00d4ff]">Property Maintenance</span> with Local Experts
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Experience the difference of commercial-grade restoration. Our team provides detailed reporting and flexible scheduling to fit your business operations.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Liability Insured</h4>
                  <p className="text-white/50 text-sm">Full public liability coverage for peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Fast Turnaround</h4>
                  <p className="text-white/50 text-sm">Responsive quoting and execution schedules.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="min-w-0">
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-2">Direct Line</p>
                <a href="tel:+61452579657" className="text-2xl font-bold text-white hover:text-[#00d4ff] transition-colors leading-none">
                  0452 579 657
                </a>
              </div>
              <div className="hidden sm:block w-[1px] h-full bg-white/10 mx-2" />
              <div className="min-w-0">
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-2">Corporate Support</p>
                <a href="mailto:info@premierpressuresolutions.com" className="text-lg md:text-xl font-bold text-white hover:text-[#00d4ff] transition-colors break-all leading-none">
                  info@premierpressure...
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-xl mx-auto lg:ml-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0a1628] mb-4">Request Received</h3>
                  <p className="text-gray-600 mb-8">We've received your commercial inquiry. Our specialist will review and contact you within 24 business hours.</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="text-[#00d4ff] font-bold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Request Business Quote</h3>
                    <p className="text-gray-500">Fill in the details below for a customized restoration plan.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">Contact Person *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:bg-white outline-none transition-all text-[#0a1628] placeholder:text-gray-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:bg-white outline-none transition-all text-[#0a1628] placeholder:text-gray-300"
                        placeholder="Business Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:bg-white outline-none transition-all text-[#0a1628] placeholder:text-gray-300"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">Contact Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:bg-white outline-none transition-all text-[#0a1628] placeholder:text-gray-300"
                        placeholder="04xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">Scope of Work *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:bg-white outline-none transition-all resize-none text-[#0a1628] placeholder:text-gray-300"
                      placeholder={descriptionPlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0a1628] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#1a2b45] transition-all shadow-xl hover:shadow-[#00d4ff]/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-[#00d4ff]" />
                        <span>Submit Business Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Your data is handled according to our professional privacy standards.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}