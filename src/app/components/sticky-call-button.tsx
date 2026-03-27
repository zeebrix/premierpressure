import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after user scrolls down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:+61452579657"
      className="fixed bottom-6 right-4 z-50 lg:hidden bg-[#00d4ff] text-[#0a1628] px-5 py-4 rounded-full shadow-2xl hover:bg-[#00c4ef] transition-all flex items-center gap-2 font-bold min-h-[56px] min-w-[56px] touch-manipulation will-change-transform"
      aria-label="Call Premier Pressure Solutions WA"
      style={{ 
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden'
      }}
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm font-bold">Call Now</span>
    </a>
  );
}