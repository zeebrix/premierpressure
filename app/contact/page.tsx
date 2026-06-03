import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FinalCTA } from '@/app/components/final-cta';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Contact PPS Exterior Cleaning | Pressure Cleaning Perth' },
  description:
    'Contact PPS Exterior Cleaning for professional pressure cleaning across Perth. Call 0452 579 657 or request a free quote online.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: 'Contact PPS Exterior Cleaning | Pressure Cleaning Perth',
    description:
      'Contact PPS Exterior Cleaning for professional pressure cleaning across Perth. Call 0452 579 657 or request a free quote online.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'PPS Exterior Cleaning',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contact-page`,
  url: `${SITE_URL}/contact`,
  name: 'Contact PPS Exterior Cleaning',
  about: {
    '@type': 'LocalBusiness',
    name: 'PPS Exterior Cleaning',
    url: SITE_URL,
    telephone: '+61452579657',
    email: 'info@ppsexteriorcleaning.com.au',
    areaServed: { '@type': 'City', name: 'Perth' },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="relative overflow-hidden bg-[#020B1C] pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.18),transparent_34rem)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF] mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get a Free Pressure Cleaning Quote in Perth
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              Speak with PPS Exterior Cleaning about residential or commercial exterior cleaning.
              We respond quickly and provide clear, no-obligation quotes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+61452579657"
              className="rounded-lg border border-gray-200 p-6 shadow-sm hover:border-[#0057FF] transition-colors"
            >
              <Phone className="w-8 h-8 text-[#0057FF] mb-4" />
              <h2 className="text-xl font-bold text-[#020B1C] mb-2">Call</h2>
              <p className="text-gray-600 mb-3">For fast quotes and booking questions.</p>
              <p className="font-semibold text-[#020B1C]">0452 579 657</p>
            </a>

            <a
              href="mailto:info@ppsexteriorcleaning.com.au"
              className="rounded-lg border border-gray-200 p-6 shadow-sm hover:border-[#0057FF] transition-colors"
            >
              <Mail className="w-8 h-8 text-[#0057FF] mb-4" />
              <h2 className="text-xl font-bold text-[#020B1C] mb-2">Email</h2>
              <p className="text-gray-600 mb-3">Send photos or job details for review.</p>
              <p className="font-semibold text-[#020B1C] break-all">info@ppsexteriorcleaning.com.au</p>
            </a>

            <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <MapPin className="w-8 h-8 text-[#0057FF] mb-4" />
              <h2 className="text-xl font-bold text-[#020B1C] mb-2">Service Area</h2>
              <p className="text-gray-600 mb-3">Residential and commercial exterior cleaning.</p>
              <p className="font-semibold text-[#020B1C]">Greater Perth, WA</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
