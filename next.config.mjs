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
};

export default nextConfig;
