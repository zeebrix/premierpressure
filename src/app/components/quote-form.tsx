import { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

// Web3Forms API key - linked to maharzain76@gmail.com
const WEB3FORMS_KEY = '25ea480e-c6b3-44f6-a5c5-9f59ae8447d0';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
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
          subject: `New Quote Request from ${formData.name}`,
          from_name: 'Premier Pressure Solutions WA Website',
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          address: formData.address || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message || 'No additional details',
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit quote');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">We've received your quote request and will contact you shortly.</p>
          <a
            href="tel:+61452579657"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us Now: 0452 579 657
          </a>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Oops!</h3>
          <p className="text-gray-600 mb-6">{errorMessage}</p>
          <a
            href="tel:+61452579657"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us Now: 0452 579 657
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
                placeholder="0412 345 678"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Property Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
              placeholder="123 Main Street, Suburb"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all"
            >
              <option value="">Select a service...</option>
              <option value="driveway">Driveway Cleaning</option>
              <option value="house">House Washing</option>
              <option value="roof">Roof Cleaning</option>
              <option value="paver">Paver Cleaning & Sealing</option>
              <option value="window">Window Cleaning</option>
              <option value="concrete">Concrete Cleaning</option>
              <option value="limestone">Limestone Cleaning</option>
              <option value="presale">Pre-Sale Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your cleaning requirements..."
            />
          </div>

          <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong className="text-[#0a1628]">New Customer Offer:</strong> Get 10% off your first service! 
              We'll contact you within 24 hours with a free, no-obligation quote.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0a1628]"></div>
                Submitting...
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5" />
                Get Your Free Quote
              </>
            )}
          </button>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600 mb-3">Or call us directly for an instant quote</p>
            <a
              href="tel:+61452579657"
              className="inline-flex items-center gap-2 text-[#00d4ff] font-semibold hover:text-[#00c4ef] transition-colors"
            >
              <Phone className="w-5 h-5" />
              0452 579 657
            </a>
          </div>
        </form>
      )}
    </div>
  );
}