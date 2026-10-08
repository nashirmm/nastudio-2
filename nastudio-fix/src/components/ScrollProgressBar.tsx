import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none bg-transparent overflow-hidden"
    >
      <div
        className="h-full w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left center',
        }}
      />
    </div>
  );
};
