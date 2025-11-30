import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Componente per immagini ottimizzate con:
 * - Lazy loading
 * - Placeholder durante il caricamento
 * - Fallback in caso di errore
 * - Dimensioni specificate per evitare layout shift
 * - ⚠️ REMINDER SEO: Verifica sempre che l'alt text sia descrittivo e pertinente!
 *   Esempi corretti: "riparazione-face-id-iphone-13-assemini", "batteria-maggiorata-iphone-xs-giolab"
 *   Evitare: "img1", "foto", "immagine"
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  // ⚠️ SEO WARNING: Controlla che l'alt text sia descrittivo
  if (process.env.NODE_ENV === 'development' && (!alt || alt.length < 10)) {
    console.warn('⚠️ SEO WARNING: Alt text troppo breve o mancante per immagine:', src, '- Alt:', alt);
  }

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 flex items-center justify-center ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
      >
        <span className="text-muted-foreground text-sm">Immagine non disponibile</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-giolab-gray/20 to-giolab-gray/10 animate-pulse ${className}`}
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
