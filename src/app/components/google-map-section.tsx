import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ServiceAreaMap } from './service-area-map';

export function GoogleMapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Our Service Areas Across Perth
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve all metropolitan Perth suburbs. Click on any shaded region to learn more about our services in your area.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Business Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Location Card */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] mb-2">Service Area</h3>
                  <p className="text-gray-600 text-sm">
                    Perth & Surrounding Suburbs
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] mb-2">Call Us</h3>
                  <a 
                    href="tel:+61452579657" 
                    className="text-[#00d4ff] hover:underline font-medium"
                  >
                    0452 579 657
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] mb-2">Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Mon-Sun: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433082.15314154816!2d115.54954834531247!3d-32.002804927054164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x630a0ba2d38509af%3A0x486bd1fdab99e5ba!2sPremier%20Pressure%20Solutions%20WA!5e0!3m2!1sen!2sau!4v1771988994275!5m2!1sen!2sau" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Pressure Solutions WA Service Area Map"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://maps.app.goo.gl/RAWTDzBcmmZoU7R26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-lg hover:bg-[#3367D6] transition-colors shadow-md hover:shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white"/>
            </svg>
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}