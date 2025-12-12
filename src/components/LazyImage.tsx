import { useLazyImage } from "@/hooks/useLazyImage";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  aspectRatio?: "square" | "video" | "auto";
  rootMargin?: string;
}

const LazyImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  aspectRatio = "auto",
  rootMargin = "200px",
}: LazyImageProps) => {
  const { ref, isInView, isLoaded, handleLoad } = useLazyImage({ rootMargin });

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-muted ${aspectClasses[aspectRatio]} ${className}`}
      style={{ width: width || "100%", height: aspectRatio === "auto" ? (height || "auto") : undefined }}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Only load image when in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
};

export default LazyImage;
