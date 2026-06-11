'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';

const services = [
  {
    title: 'Concrete Cleaning',
    description: 'Restore the look of your concrete surfaces with our professional deep cleaning services.',
    image: '/service-images/concrete-cleaning-perth.png',
    link: '/concrete-cleaning',
  },
  {
    title: 'Liquid Limestone Cleaning',
    description: 'Specialized care for liquid limestone surfaces to maintain their beauty and longevity.',
    image: '/service-images/limestone-cleaning-perth.png',
    link: '/limestone-cleaning',
  },
  {
    title: 'House Washing',
    description: 'Complete exterior house cleaning to restore your home\'s beauty and curb appeal.',
    image: '/service-images/house-washing-perth.png',
    link: '/house-washing',
  },
  {
    title: 'Pre-Sale & End of Lease',
    description: 'Maximize your property value with our comprehensive pre-sale cleaning services.',
    image: '/service-images/pre-sale-cleaning-perth.png',
    link: '/presale-cleaning',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Remove oil stains, dirt, and grime from your driveway for a pristine appearance.',
    image: '/service-images/driveway-cleaning-perth.png',
    link: '/driveway-cleaning',
  },
  {
    title: 'Paver Cleaning & Sealing',
    description: 'Restore and protect your pavers with our professional cleaning and sealing services.',
    image: '/service-images/paver-cleaning-perth.png',
    link: '/paver-cleaning',
  },
  {
    title: 'Roof & Solar Panel Cleaning',
    description: 'Boost panel efficiency with a safe, gentle clean, handled as part of our roof cleaning service.',
    image: '/service-images/roof-cleaning-perth.png',
    link: '/roof-cleaning',
  },
];

const otherServices = [
  {
    title: 'Window Cleaning',
    description: 'Crystal-clear windows that enhance your property\'s curb appeal and natural light.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772004571088-48a7ae73-d9df-4aae-91a6-8c219ad34901.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzIwMDQ1NzEwODgtNDhhN2FlNzMtZDlkZi00YWFlLTkxYTYtOGMyMTlhZDM0OTAxLmpwZyIsImlhdCI6MTc3MjAwNDU3MSwiZXhwIjoxODAzNTQwNTcxfQ.ssBsWHZ0f1bfSTglyZPp2ON4bWQ9ZA-WRpcbPcMzcPI',
    link: '/window-cleaning',
  },
  {
    title: 'Roof Cleaning',
    description: 'Safe roof cleaning to remove moss, algae, lichen, and weather staining.',
    image: '/service-images/roof-cleaning-perth.png',
    link: '/roof-cleaning',
  },
];

export function ServicesShowcase() {
  const [showOtherServices, setShowOtherServices] = useState(false);

  return (
    <section className="py-20 bg-[#020B1C] border-t border-[#2A3D5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0057FF]">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pressure Cleaning Services in Perth
          </h2>
          <div className="mx-auto mb-5 h-1 w-12 bg-[#0057FF]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-lg border border-[#2A3D5E] bg-[#06152E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} Perth - Professional pressure washing services for residential and commercial properties`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#D6DCE5] mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#0057FF] hover:gap-3 transition-all"
                >
                  <span className="font-semibold">Learn More About {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-4 text-[#D6DCE5] leading-relaxed">
          <p className="text-lg">
            We offer comprehensive pressure cleaning solutions for residential and commercial properties across Perth.
          </p>
          <p>
            PPS Exterior Cleaning services homes and businesses across Perth and the greater metropolitan area. Whether it&apos;s a driveway that&apos;s built up years of grime and discolouration, a limestone path gone green after winter, a roof covered in lichen, or a rendered exterior that hasn&apos;t been washed in years — we handle it all. One company, one call, everything on the outside of your property taken care of.
          </p>
          <p>
            We use a combination of high-pressure cleaning and soft washing depending on the surface — the right technique matters, and using the wrong one can cause real damage. Our team works across all common Perth surfaces: exposed aggregate, liquid limestone, concrete, clay pavers, Colorbond roofing, and rendered walls.
          </p>
          <p>
            We&apos;re based in Perth, fully insured with $20M public liability cover, and available seven days a week. Most jobs can be booked within the same week. If you&apos;re not sure what your property needs, give us a call — we&apos;re happy to talk it through before you commit to anything.
          </p>
        </div>

        {showOtherServices && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-lg border border-[#2A3D5E] bg-[#06152E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} Perth - Professional pressure washing services for residential and commercial properties`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#D6DCE5] mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#0057FF] hover:gap-3 transition-all"
                  >
                    <span className="font-semibold">Learn More About {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setShowOtherServices(!showOtherServices)}
            className="text-[#0057FF] font-semibold hover:underline transition-all"
          >
            {showOtherServices ? 'Show Less' : 'Our Other Services'}
          </button>
        </div>
      </div>
    </section>
  );
}
