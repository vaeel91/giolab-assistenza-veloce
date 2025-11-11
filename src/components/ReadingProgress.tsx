import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setProgress(Math.min(scrollPercent, 100));
    };

    // Update on mount
    updateProgress();

    // Update on scroll
    window.addEventListener("scroll", updateProgress, { passive: true });
    
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-giolab-blue via-giolab-blue-light to-giolab-blue transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Glow effect at the end of the progress bar */}
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-giolab-blue/50 to-transparent blur-sm" />
      </div>
    </div>
  );
};

export default ReadingProgress;
