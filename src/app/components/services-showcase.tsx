import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { OptimizedImage } from './optimized-image';

const services = [
  {
    title: 'Concrete Cleaning',
    description: 'Restore the look of your concrete surfaces with our professional deep cleaning services.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772602122153-6a0aa064-515e-4162-9c57-6ef5f621f991.webp',
    link: '/services/concrete-cleaning',
  },
  {
    title: 'Liquid Limestone Cleaning',
    description: 'Specialized care for liquid limestone surfaces to maintain their beauty and longevity.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772602654106-d729ed4a-83df-4c91-9d5a-df9f33e29881.webp',
    link: '/services/limestone-cleaning',
  },
  {
    title: 'House Washing',
    description: 'Complete exterior house cleaning to restore your home\'s beauty and curb appeal.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772602652001-f28342f7-a392-46b1-9bf5-65419885e618.webp',
    link: '/services/house-washing',
  },
  {
    title: 'Pre-Sale & End of Lease',
    description: 'Maximize your property value with our comprehensive pre-sale cleaning services.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772004424329-e0c398d6-f19f-49ea-982b-92f76ce01ff3.webp',
    link: '/services/presale-cleaning',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Remove oil stains, dirt, and grime from your driveway for a pristine appearance.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772602119339-82ed9354-d482-49c1-9d7b-96d8beb5b6cc.webp',
    link: '/services/driveway-cleaning',
  },
  {
    title: 'Paver Cleaning & Sealing',
    description: 'Restore and protect your pavers with our professional cleaning and sealing services.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772602371640-aebac474-a440-4b67-b2e9-dae53ebf68eb.webp',
    link: '/services/paver-cleaning',
  },
];

const otherServices = [
  {
    title: 'Window Cleaning',
    description: 'Crystal-clear windows that enhance your property\'s curb appeal and natural light.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772004571088-48a7ae73-d9df-4aae-91a6-8c219ad34901.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzIwMDQ1NzEwODgtNDhhN2FlNzMtZDlkZi00YWFlLTkxYTYtOGMyMTlhZDM0OTAxLmpwZyIsImlhdCI6MTc3MjAwNDU3MSwiZXhwIjoxODAzNTQwNTcxfQ.ssBsWHZ0f1bfSTglyZPp2ON4bWQ9ZA-WRpcbPcMzcPI',
    link: '/services/window-cleaning',
  },
  {
    title: 'Solar Panel Cleaning',
    description: 'Maximize your solar efficiency with regular professional panel cleaning services.',
    image: 'https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzIwMDMzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/services/pressure-cleaning',
  },
];

export function ServicesShowcase() {
  const [showOtherServices, setShowOtherServices] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive pressure cleaning solutions for residential and commercial properties across Perth.
          </p>
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
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  alt={`${service.title} Perth - Professional pressure washing services for residential and commercial properties`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#00d4ff] hover:gap-3 transition-all"
                >
                  <span className="font-semibold">Learn More About {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
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
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={`${service.title} Perth - Professional pressure washing services for residential and commercial properties`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#00d4ff] hover:gap-3 transition-all"
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
            className="text-[#00d4ff] font-semibold hover:underline transition-all"
          >
            {showOtherServices ? 'Show Less' : 'Our Other Services'}
          </button>
        </div>
      </div>
    </section>
  );
}