import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  fetchPriority = "auto"
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Warning in dev if alt text is too short or missing
    if (process.env.NODE_ENV === 'development' && (!alt || alt.length < 10)) {
      console.warn(`⚠️ Image "${src}" has insufficient alt text. Current: "${alt}". Alt text should be descriptive and at least 10 characters for SEO.`);
    }
  }, [alt, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <span className="text-muted-foreground text-sm">Immagine non disponibile</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ maxWidth: width || '100%' }}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          style={{ width: width || '100%', height: height || 'auto' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-auto transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default OptimizedImage;
