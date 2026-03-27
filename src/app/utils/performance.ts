/**
 * Performance utilities for optimizing animations and user experience
 */

/**
 * Checks if user prefers reduced motion (accessibility)
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Returns optimized animation props based on user preferences
 * Use this wrapper for Motion components to respect accessibility
 */
export const getAnimationProps = (animationProps: Record<string, any>) => {
  if (prefersReducedMotion()) {
    return {};
  }
  return animationProps;
};

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if element is in viewport (for manual lazy loading)
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Preload an image
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Check device connection quality
 */
export const getConnectionQuality = (): 'slow' | 'fast' | 'unknown' => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }
  
  const connection = (navigator as any).connection;
  if (!connection) return 'unknown';
  
  // Check for slow connection (2G or slow-2g)
  if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
    return 'slow';
  }
  
  // Check for data saver mode
  if (connection.saveData) {
    return 'slow';
  }
  
  return 'fast';
};

/**
 * Conditional lazy loading based on connection
 */
export const shouldLazyLoad = (priority: boolean = false): boolean => {
  if (priority) return false; // Never lazy load priority images
  
  const quality = getConnectionQuality();
  if (quality === 'slow') return true; // Always lazy load on slow connections
  
  return true; // Default to lazy loading for performance
};
