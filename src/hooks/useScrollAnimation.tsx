import { useState, useEffect, useRef } from "react";

export const useSafeScrollAnimation = (delayPerItem = 120) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      setIsVisible(true);
      return;
    }

    let triggered = false;

    const fallback = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setIsVisible(true);
      }
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setIsVisible(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return { ref, isVisible };
};
