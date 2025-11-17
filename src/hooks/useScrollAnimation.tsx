import { useState, useEffect, useRef } from "react";

export const useSafeScrollAnimation = (delayPerItem = 120) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Fallback: se entro 400ms non si attiva, mostriamo tutto
    const fallback = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [hasTriggered]);

  return { ref, isVisible };
};
