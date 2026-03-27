import { Facebook, Instagram, Mail, Phone, MapPin, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function Footer() {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);

  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                Premier Pressure Solutions{' '}
                <span className="text-[#00d4ff]">WA</span>
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Perth's trusted pressure cleaning experts. Professional, reliable, and eco-friendly services for homes and businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Premier-Pressure-Solutions-WA-61576345864247/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00d4ff] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/premier.pressure.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00d4ff] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/eVdJIOu0Wqj2sLs2N"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00d4ff] transition-colors"
                aria-label="Visit our Google Business profile"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services with Dropdowns */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            
            {/* Residential Dropdown */}
            <div className="mb-3">
              <button
                onClick={() => setResidentialOpen(!residentialOpen)}
                className="flex items-center justify-between w-full text-sm text-white/70 hover:text-[#00d4ff] transition-colors group"
              >
                <span>Residential Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 ml-3 space-y-2 text-sm overflow-hidden transition-all duration-300 ${residentialOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li>
                  <Link to="/services/driveway-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Driveway Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/concrete-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Concrete Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/limestone-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Limestone Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/roof-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Roof Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/paver-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Paver Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/pool-patio-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Pool Area & Patio Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/window-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Window Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/house-washing" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    House Washing
                  </Link>
                </li>
                <li>
                  <Link to="/services/presale-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Pre-Sale Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Commercial Dropdown */}
            <div>
              <button
                onClick={() => setCommercialOpen(!commercialOpen)}
                className="flex items-center justify-between w-full text-sm text-white/70 hover:text-[#00d4ff] transition-colors group"
              >
                <span>Commercial Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${commercialOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 ml-3 space-y-2 text-sm overflow-hidden transition-all duration-300 ${commercialOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li>
                  <Link to="/commercial/school-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    School Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/strata-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Strata Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/shopping-centre-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Shopping Centres
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/building-washing" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Building Washing
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/industrial-washing" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Industrial Washing
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/playground-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Playground Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/commercial/restaurant-cleaning" className="text-white/60 hover:text-[#00d4ff] transition-colors">
                    Restaurant Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <a href="tel:+61452579657" className="text-white/70 hover:text-[#00d4ff] transition-colors">
                  0452 579 657
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@premierpressuresolutions.com" className="text-white/70 hover:text-[#00d4ff] transition-colors">
                  info@premierpressuresolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Serving Greater Perth, WA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 Premier Pressure Solutions WA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#00d4ff] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#00d4ff] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}