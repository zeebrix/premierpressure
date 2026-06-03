'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCommercialDropdownOpen, setIsCommercialDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCommercialOpen, setIsMobileCommercialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    { name: 'Pressure Cleaning', path: '/pressure-cleaning' },
    { name: 'Driveway Cleaning', path: '/driveway-cleaning' },
    { name: 'Concrete Cleaning', path: '/concrete-cleaning' },
    { name: 'Limestone Cleaning', path: '/limestone-cleaning' },
    { name: 'Roof Cleaning', path: '/roof-cleaning' },
    { name: 'Paver Cleaning & Sealing', path: '/paver-cleaning' },
    { name: 'Pool Area & Patio Cleaning', path: '/pool-patio-cleaning' },
    { name: 'Window Cleaning', path: '/window-cleaning' },
    { name: 'House Washing', path: '/house-washing' },
    { name: 'Pre-Sale & End of Lease', path: '/presale-cleaning' },
  ];

  const commercial = [
    { name: 'Commercial Pressure Cleaning', path: '/commercial' },
    { name: 'Commercial Building Washing', path: '/commercial/building-washing' },
    { name: 'Industrial Pressure Washing', path: '/commercial/industrial-washing' },
    { name: 'School Pressure Cleaning', path: '/commercial/school-cleaning' },
    { name: 'Strata Cleaning', path: '/commercial/strata-cleaning' },
    { name: 'Shopping Centre Cleaning', path: '/commercial/shopping-centre-cleaning' },
    { name: 'Playground Cleaning', path: '/commercial/playground-cleaning' },
    { name: 'Restaurant Exterior Cleaning', path: '/commercial/restaurant-cleaning' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#020B1C]/95 border-b border-[#2A3D5E]/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 min-h-[56px] min-w-[150px] touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="PPS Exterior Cleaning"
                width={190}
                height={88}
                priority
                className="h-14 sm:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide">
              <Link
                href="/"
                className="text-[#0057FF] transition-colors hover:text-white"
              >
                Home
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-white transition-colors hover:text-[#0057FF]"
                  aria-label="Residential services menu"
                  aria-expanded={isServicesDropdownOpen}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg overflow-hidden z-50 w-64"
                    >
                      <ul className="py-2">
                        {services.map((service) => (
                          <li key={service.path}>
                            <Link
                              href={service.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-[#0057FF]/10 hover:text-[#0057FF] transition-colors"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/areas"
                className="text-white transition-colors hover:text-[#0057FF]"
              >
                Areas We Service
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsCommercialDropdownOpen(true)}
                onMouseLeave={() => setIsCommercialDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-white transition-colors hover:text-[#0057FF]"
                  aria-label="Commercial services menu"
                  aria-expanded={isCommercialDropdownOpen}
                >
                  Commercial
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isCommercialDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg overflow-hidden z-50 w-64"
                    >
                      <ul className="py-2">
                        {commercial.map((service) => (
                          <li key={service.path}>
                            <Link
                              href={service.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-[#0057FF]/10 hover:text-[#0057FF] transition-colors"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/about"
                className="text-white transition-colors hover:text-[#0057FF]"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-white transition-colors hover:text-[#0057FF]"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-white transition-colors hover:text-[#0057FF]"
              >
                Contact
              </Link>
              <a
                href="tel:+61452579657"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all bg-transparent text-[#0057FF] border border-[#0057FF] hover:bg-[#0057FF] hover:text-white"
              >
                <Phone className="w-4 h-4" />
                <span>0452 579 657</span>
              </a>
            </nav>

            {/* Mobile: Menu Only (No Call Button) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-lg transition-colors min-h-[48px] min-w-[48px] touch-manipulation ${
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-lg z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)]"
          >
            <nav className="px-4 py-6 space-y-1">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                About
              </Link>
              
              {/* Services Expandable Section */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] touch-manipulation"
                  aria-label="Toggle residential services menu"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span className="font-medium">Residential</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center touch-manipulation"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Commercial Expandable Section */}
              <div>
                <button
                  onClick={() => setIsMobileCommercialOpen(!isMobileCommercialOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] touch-manipulation"
                  aria-label="Toggle commercial services menu"
                  aria-expanded={isMobileCommercialOpen}
                >
                  <span className="font-medium">Commercial</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileCommercialOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileCommercialOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {commercial.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center touch-manipulation"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Gallery
              </Link>

              <Link
                href="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Resources
              </Link>

              <Link
                href="/areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Areas
              </Link>

              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('quote');
                }}
                className="block py-3 px-3 text-gray-700 hover:text-[#0057FF] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Get Quote
              </a>              
              
              {/* Prominent Call Button at Bottom */}
              <a
                href="tel:+61452579657"
                className="flex items-center justify-center gap-3 bg-[#0057FF] text-white px-6 py-4 rounded-lg font-bold mt-4 shadow-lg hover:bg-[#0049d8] min-h-[56px] touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">Call 0452 579 657</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
