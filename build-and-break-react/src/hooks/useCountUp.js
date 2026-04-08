import { useEffect, useRef, useState } from 'react';

export const useCountUp = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(easeOut * target));

              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            };

            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return [count, elementRef];
};
