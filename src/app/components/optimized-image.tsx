import { useState, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const ERROR_IMG_SRC = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImage unavailable%3C/text%3E%3C/svg%3E';

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes,
  priority = false,
  style,
  ...rest 
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate srcset for responsive images if the image is from Supabase
  const generateSrcSet = (originalSrc: string): string | undefined => {
    // Disable srcset generation to avoid extra parameters that might slow down LCP
    // We're using a direct public URL for optimal performance
    return undefined;
  };

  const srcset = generateSrcSet(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={style}
      >
        <img 
          src={ERROR_IMG_SRC} 
          alt="Error loading image" 
          {...rest} 
          data-original-url={src}
          className={className}
        />
      </div>
    );
  }

  return (
    <>
      {/* Blur placeholder while loading - only for non-priority images */}
      {!isLoaded && !priority && (
        <div 
          className={`absolute inset-0 bg-gray-200 ${className}`}
          style={style}
          aria-hidden="true"
        />
      )}
      
      <img
        src={src}
        srcSet={srcset}
        sizes={sizes || '100vw'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'auto'}
        onError={handleError}
        onLoad={handleLoad}
        {...rest}
      />
    </>
  );
}