import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { suburbs } from '@/data/suburbs';
import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PPS Exterior Cleaning | Professional Pressure Cleaning Perth',
    template: '%s | PPS Exterior Cleaning',
  },
  description:
    "Perth's trusted pressure cleaning experts. House washing, driveway cleaning, roof cleaning & more. Servicing 70+ Perth suburbs. Get your free quote today! Call 0452 579 657",
  authors: [{ name: 'PPS Exterior Cleaning' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PPS Exterior Cleaning',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-image.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPS Exterior Cleaning | Professional Pressure Cleaning Perth',
    description:
      "Perth's trusted pressure cleaning experts. House washing, driveway cleaning, roof cleaning & more across 70+ suburbs.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'twitter:url': SITE_URL,
    'theme-color': '#020B1C',
    'msapplication-TileColor': '#020B1C',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'PPS Exterior Cleaning',
    'geo.region': 'AU-WA',
    'geo.placename': 'Perth',
    'geo.position': '-31.9505;115.8605',
    ICBM: '-31.9505, 115.8605',
  },
};

// Site-wide brand entity. The location-specific address/locality lives on the
// per-page LocalBusiness schema (home, service and suburb pages), so this node
// stays a location-agnostic Organization , otherwise a conflicting
// "addressLocality": "Perth" would appear on every page, including suburb pages.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'PPS Exterior Cleaning',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    'Professional pressure cleaning services in Perth, Western Australia. Specialising in house washing, driveway cleaning, roof cleaning and more.',
  telephone: '+61452579657',
  email: 'info@ppsexteriorcleaning.com.au',
  areaServed: [
    { '@type': 'City', name: 'Perth' },
    ...suburbs.map((s) => ({ '@type': 'City', name: s.name })),
  ],
  sameAs: [
    'https://share.google/KLOO2pe1BBeKlOPda',
    'https://www.facebook.com/profile.php?id=61576345864247',
    'https://www.instagram.com/pps.exteriorcleaning/',
  ],
};

import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { ScrollToTop } from '@/app/components/scroll-to-top';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
