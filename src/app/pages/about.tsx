import image_3825eeae6ac41dce0ee90580b9d8c79b9558cd3f from 'figma:asset/3825eeae6ac41dce0ee90580b9d8c79b9558cd3f.webp'
import { motion } from 'motion/react';
import { Award, Shield, Users, Zap, CheckCircle, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/seo';
import { GoogleMapSection } from '../components/google-map-section';

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We deliver exceptional results using commercial-grade equipment and proven techniques tailored to each surface type.',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete public liability insurance coverage gives you peace of mind while we work on your property.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We communicate clearly, arrive on time, and exceed expectations every time.',
    },
    {
      icon: Zap,
      title: 'Efficient Service',
      description: 'We respect your time and property, working efficiently to minimize disruption while delivering outstanding results.',
    },
  ];

  const expertise = [
    'Residential & commercial pressure cleaning',
    'Specialist exposed aggregate restoration',
    'Delicate limestone & natural stone cleaning',
    'Roof cleaning without damage to tiles',
    'Professional paver cleaning & sealing',
    'House washing & window cleaning',
    'Pre-sale property presentation',
    'Eco-friendly cleaning solutions',
  ];

  const serviceAreas = [
    'Perth CBD',
    'Northern Suburbs',
    'Southern Suburbs',
    'Eastern Suburbs',
    'Coastal Areas',
    'Hills Districts',
  ];

  return (
    <main>
      <SEO 
        title="About Us - Professional Pressure Cleaning Perth"
        description="Learn about Premier Pressure Solutions WA, Perth's trusted pressure cleaning specialists. Fully insured, experienced team serving residential & commercial properties across Perth."
        keywords="pressure cleaning perth about, pressure washing company perth, professional cleaners perth, fully insured pressure cleaning"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a2b45] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Premier Pressure Solutions WA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Perth's trusted pressure cleaning specialists, dedicated to transforming properties across Western Australia with professional care and exceptional results.
            </p>
          </motion.div>
        </div>
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Premier Pressure Solutions WA was built on a simple belief — Perth properties deserve to look their best.
                </p>
                <p>
                  What started as a small, locally owned operation quickly grew through word of mouth, repeat customers, and one clear difference: we treat every property like it's our own.
                </p>
                <p>
                  Living and working here in Perth, we understand the harsh Western Australian conditions. Coastal salt air, red dust, mould growth, and stubborn stains can quickly make driveways, roofs, and exterior surfaces look tired and neglected. We saw too many homeowners frustrated with unreliable contractors, rushed jobs, and surface damage caused by improper pressure cleaning.
                </p>
                <p className="font-semibold text-[#0a1628]">
                  So we decided to raise the standard.
                </p>
                <p>
                  From day one, our focus has been on delivering premium results using the right equipment, the right pressure, and the right techniques for every surface. No shortcuts. No damage. No mess left behind.
                </p>
                
                <div className="pt-4">
                  <p className="font-semibold text-[#0a1628] mb-3">We specialise in:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Driveway and paver cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>House washing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Roof cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Limestone and liquid limestone restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Commercial pressure cleaning</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Every job starts with honest advice and ends with a property that looks refreshed, protected, and ready to impress.
                </p>
                <p>
                  We're fully insured, professional, and committed to showing up when we say we will. Our goal isn't just to clean your surfaces — it's to build long-term relationships with homeowners and businesses across Perth.
                </p>
                <p>
                  At Premier Pressure Solutions WA, we believe a clean exterior doesn't just improve appearance — it adds value, protects your investment, and restores pride in your property.
                </p>
                <p className="font-semibold text-[#0a1628] italic">
                  And we're just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src={image_3825eeae6ac41dce0ee90580b9d8c79b9558cd3f}
                alt="Pressure cleaning professional at work"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#00d4ff] text-[#0a1628] px-8 py-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm font-semibold">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from the first phone call to the final inspection.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#0a1628] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Our Expertise
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With years of experience serving Perth properties, we've developed specialized expertise across all types of pressure cleaning services. We understand the unique challenges facing different materials and surfaces, and we know exactly how to achieve exceptional results safely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our team stays current with the latest cleaning techniques and equipment, ensuring we deliver the best possible results while protecting your surfaces from damage.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0a1628] to-[#1a2b45] text-white p-8 md:p-10 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Service Areas
              </h3>
              <p className="text-white/90 mb-6">
                We proudly serve Perth and surrounding suburbs, bringing our professional pressure cleaning services to properties across the metropolitan area.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/80">
                Not sure if we service your area? Give us a call and we'll be happy to help!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6 text-center">
              Why Perth Chooses Us
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-[#0a1628]">Local Knowledge:</strong> We understand Perth's unique climate challenges, from red dirt staining to coastal salt buildup, and we have proven solutions for all of them.
              </p>
              <p>
                <strong className="text-[#0a1628]">Professional Equipment:</strong> We invest in commercial-grade pressure cleaning equipment that delivers superior results without the risks associated with DIY or budget alternatives.
              </p>
              <p>
                <strong className="text-[#0a1628]">Surface Specialists:</strong> Different surfaces require different approaches. We're trained in proper techniques for concrete, exposed aggregate, limestone, pavers, tiles, rendered walls, and more.
              </p>
              <p>
                <strong className="text-[#0a1628]">Transparent Pricing:</strong> No hidden fees or surprises. We provide detailed quotes upfront and stick to them.
              </p>
              <p>
                <strong className="text-[#0a1628]">Satisfaction Guaranteed:</strong> We take pride in our work and stand behind our results. If you're not completely satisfied, we'll make it right.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2b45] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the Premier Pressure Solutions WA difference. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61452579657"
                className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call 0452 579 657</span>
              </a>
              <a
                href="mailto:info@premierpressuresolutions.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Email Us for a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMapSection />
    </main>
  );
}