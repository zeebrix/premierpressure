import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page on route change
 * Essential for multi-page React Router applications
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
