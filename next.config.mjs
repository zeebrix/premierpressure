/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO: tighten back to false at end of migration once all legacy Vite source
  // (src/app/{App.tsx,routes.tsx,pages}) is removed and remaining TS errors are addressed.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iigpdyyiqskohqejmqob.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'premierpressuresolutions.com.au' }],
        destination: 'https://www.ppsexteriorcleaning.com.au/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.premierpressuresolutions.com.au' }],
        destination: 'https://www.ppsexteriorcleaning.com.au/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ppsexteriorcleaning.com.au' }],
        destination: 'https://www.ppsexteriorcleaning.com.au/:path*',
        statusCode: 301,
      },
      {
        source: '/solar-panel-cleaning',
        destination: '/roof-cleaning',
        permanent: true,
      },
      {
        source: '/services/solar-panel-cleaning',
        destination: '/roof-cleaning',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/perth/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
