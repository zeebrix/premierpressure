'use client';

import { Home, Building2, Droplets, Wind, Sparkles, Package, Layers, Wrench, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

const mainServices = [
  {
    icon: Home,
    title: 'Driveway Cleaning',
    description: 'Remove oil stains, dirt, and grime from concrete and paved driveways',
    link: '/driveway-cleaning',
  },
  {
    icon: Building2,
    title: 'House Washing',
    description: 'Gentle yet effective exterior house washing to restore your home\'s appearance',
    link: '/house-washing',
  },
  {
    icon: Layers,
    title: 'Limestone Cleaning',
    description: 'Specialist cleaning for limestone walls, fences, and features',
    link: '/limestone-cleaning',
  },
  {
    icon: Wind,
    title: 'Paver Cleaning',
    description: 'Deep clean and seal pavers to restore their original beauty',
    link: '/paver-cleaning',
  },
  {
    icon: Droplets,
    title: 'Pool Area & Patio',
    description: 'Professional cleaning for pool surrounds, patios, and alfresco areas',
    link: '/pool-patio-cleaning',
  },
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Crystal clear windows inside and out for a sparkling finish',
    link: '/window-cleaning',
  },
  {
    icon: Package,
    title: 'Pre Sale',
    description: 'Complete property clean to maximise your sale price',
    link: '/presale-cleaning',
  },
];

const otherServices = [
  {
    icon: Droplets,
    title: 'Roof Cleaning',
    description: 'Safe roof cleaning to remove moss, algae, and weather stains',
    link: '/roof-cleaning',
  },
  {
    icon: Wrench,
    title: 'Concrete Cleaning',
    description: 'Professional concrete surface cleaning and restoration',
    link: '/concrete-cleaning',
  },
];

interface SuburbServicesProps {
  suburbName: string;
}

export function SuburbServices({ suburbName }: SuburbServicesProps) {
  const [showOtherServices, setShowOtherServices] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020B1C] mb-4">
            Our Pressure Cleaning Services in {suburbName}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional pressure cleaning solutions for {suburbName} homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.link}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#0057FF] transition-all hover:shadow-lg group h-full cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#0057FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0057FF]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#0057FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#020B1C] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-[#0057FF] font-semibold group-hover:underline inline-flex items-center gap-1">
                    {service.title} in {suburbName} →
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Other Services Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <button
            onClick={() => setShowOtherServices(!showOtherServices)}
            className="w-full bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#0057FF] transition-all hover:shadow-lg group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#020B1C] mb-2">
                  Other Services Available
                </h3>
                <p className="text-gray-600">
                  Click to view additional professional cleaning solutions
                </p>
              </div>
              <ChevronDown 
                className={`w-8 h-8 text-[#0057FF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                  showOtherServices ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {showOtherServices && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  {otherServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        href={service.link}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#0057FF] transition-all hover:shadow-lg group h-full cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-[#0057FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0057FF]/20 transition-colors">
                            <Icon className="w-6 h-6 text-[#0057FF]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#020B1C] mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <span className="text-[#0057FF] font-semibold group-hover:underline inline-flex items-center gap-1">
                            {service.title} in {suburbName} →
                          </span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#0057FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0049d8] transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}