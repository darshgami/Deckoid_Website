import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Track standard reveal targets
    const revealTargets = document.querySelectorAll(
      '.reveal-element, .reveal-element-left, .reveal-element-right, .reveal-element-scale'
    );
    
    revealTargets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      revealTargets.forEach((target) => {
        observer.unobserve(target);
      });
      observer.disconnect();
    };
  }, []); // Re-run when DOM might have changed or on mount
}
