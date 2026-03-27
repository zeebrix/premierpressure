import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ScrollToTop } from '../components/scroll-to-top';

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#00d4ff] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-sm text-gray-600">Loading page...</p>
    </div>
  </div>
);

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}