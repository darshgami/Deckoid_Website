import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ target, title, prefix = '', suffix = '+', duration = 1500, className = '' }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing: easeOutExpo
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentValue = Math.floor(startValue + easePercentage * (target - startValue));
      
      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <div ref={containerRef} className={className}>
      <div className="text-4xl lg:text-5xl font-black text-white mb-2 font-display tracking-tight select-none">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {title ? (
        <div className="text-sm font-medium text-[#8f42da] tracking-wider uppercase">
          {title}
        </div>
      ) : null}
    </div>
  );
}
