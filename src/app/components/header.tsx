import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCommercialDropdownOpen, setIsCommercialDropdownOpen] = useState(false);
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCommercialOpen, setIsMobileCommercialOpen] = useState(false);
  const [isMobileOurWorkOpen, setIsMobileOurWorkOpen] = useState(false);

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
    { name: 'Pressure Cleaning', path: '/services/pressure-cleaning' },
    { name: 'Driveway Cleaning', path: '/services/driveway-cleaning' },
    { name: 'Concrete Cleaning', path: '/services/concrete-cleaning' },
    { name: 'Limestone Cleaning', path: '/services/limestone-cleaning' },
    { name: 'Roof Cleaning', path: '/services/roof-cleaning' },
    { name: 'Paver Cleaning & Sealing', path: '/services/paver-cleaning' },
    { name: 'Pool Area & Patio Cleaning', path: '/services/pool-patio-cleaning' },
    { name: 'Window Cleaning', path: '/services/window-cleaning' },
    { name: 'House Washing', path: '/services/house-washing' },
    { name: 'Pre-Sale & End of Lease', path: '/services/presale-cleaning' },
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

  const ourWork = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 min-h-[48px] min-w-[48px] touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={`text-lg sm:text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#0a1628]' : 'text-white'
              }`}>
                Premier Pressure Solutions{' '}
                <span className="text-[#00d4ff]">WA</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/about"
                className={`transition-colors hover:text-[#00d4ff] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                About
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-[#00d4ff] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  aria-label="Residential services menu"
                  aria-expanded={isServicesDropdownOpen}
                >
                  Residential
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
                              to={service.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] transition-colors"
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
              <div 
                className="relative"
                onMouseEnter={() => setIsCommercialDropdownOpen(true)}
                onMouseLeave={() => setIsCommercialDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-[#00d4ff] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
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
                              to={service.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] transition-colors"
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
              <div 
                className="relative"
                onMouseEnter={() => setIsOurWorkDropdownOpen(true)}
                onMouseLeave={() => setIsOurWorkDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-[#00d4ff] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  aria-label="Our work menu"
                  aria-expanded={isOurWorkDropdownOpen}
                >
                  Our Work
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isOurWorkDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg overflow-hidden z-50 w-64"
                    >
                      <ul className="py-2">
                        {ourWork.map((service) => (
                          <li key={service.path}>
                            <Link
                              to={service.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] transition-colors"
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
                to="/areas"
                className={`transition-colors hover:text-[#00d4ff] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Areas
              </Link>
              <a
                href="tel:+61452579657"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-[#00d4ff] text-[#0a1628] hover:bg-[#00c4ef]"
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
                  isScrolled ? 'text-[#0a1628] hover:bg-gray-100' : 'text-white hover:bg-white/10'
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
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                About
              </Link>
              
              {/* Services Expandable Section */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] touch-manipulation"
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
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center touch-manipulation"
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
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] touch-manipulation"
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
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center touch-manipulation"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Work Expandable Section */}
              <div>
                <button
                  onClick={() => setIsMobileOurWorkOpen(!isMobileOurWorkOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] touch-manipulation"
                  aria-label="Toggle our work menu"
                  aria-expanded={isMobileOurWorkOpen}
                >
                  <span className="font-medium">Our Work</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileOurWorkOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileOurWorkOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {ourWork.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center touch-manipulation"
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
                to="/areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Areas
              </Link>

              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('quote');
                }}
                className="block py-3 px-3 text-gray-700 hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                Get Quote
              </a>              
              
              {/* Prominent Call Button at Bottom */}
              <a
                href="tel:+61452579657"
                className="flex items-center justify-center gap-3 bg-[#00d4ff] text-[#0a1628] px-6 py-4 rounded-lg font-bold mt-4 shadow-lg hover:bg-[#00c4ef] min-h-[56px] touch-manipulation"
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