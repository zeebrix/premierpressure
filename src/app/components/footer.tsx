'use client';

import { Facebook, Instagram, Mail, Phone, MapPin, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);

  return (
    <footer className="bg-[#020B1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                PPS Exterior Cleaning
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Perth's trusted pressure cleaning experts. Professional, reliable, and eco-friendly services for homes and businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61576345864247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0057FF] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/pps.exteriorcleaning/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0057FF] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/KLOO2pe1BBeKlOPda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0057FF] transition-colors"
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
                className="flex items-center justify-between w-full text-sm text-white/70 hover:text-[#0057FF] transition-colors group"
              >
                <span>Residential Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 ml-3 space-y-2 text-sm overflow-hidden transition-all duration-300 ${residentialOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li>
                  <Link href="/driveway-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Driveway Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/concrete-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Concrete Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/limestone-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Limestone Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/roof-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Roof Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/paver-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Paver Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/pool-patio-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Pool Area & Patio Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/window-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Window Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/house-washing" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    House Washing
                  </Link>
                </li>
                <li>
                  <Link href="/presale-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Pre-Sale Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Commercial Dropdown */}
            <div>
              <button
                onClick={() => setCommercialOpen(!commercialOpen)}
                className="flex items-center justify-between w-full text-sm text-white/70 hover:text-[#0057FF] transition-colors group"
              >
                <span>Commercial Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${commercialOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 ml-3 space-y-2 text-sm overflow-hidden transition-all duration-300 ${commercialOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li>
                  <Link href="/commercial/school-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    School Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/strata-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Strata Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/shopping-centre-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Shopping Centres
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/building-washing" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Building Washing
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/industrial-washing" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Industrial Washing
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/playground-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
                    Playground Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/restaurant-cleaning" className="text-white/60 hover:text-[#0057FF] transition-colors">
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
                <Phone className="w-4 h-4 text-[#0057FF] flex-shrink-0 mt-0.5" />
                <a href="tel:+61452579657" className="text-white/70 hover:text-[#0057FF] transition-colors">
                  0452 579 657
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#0057FF] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ppsexteriorcleaning.com.au" className="text-white/70 hover:text-[#0057FF] transition-colors">
                  info@ppsexteriorcleaning.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0057FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Serving Greater Perth, WA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2026 PPS Exterior Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#0057FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#0057FF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
