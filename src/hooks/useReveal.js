import { useEffect, useRef, useState } from 'react';

/**
 * Recreates the original page's IntersectionObserver reveal-on-scroll effect.
 * Returns a ref to attach to the element and a boolean for whether it's "on".
 *
 * @param {boolean} initiallyOn - true for above-the-fold content that should
 *                                render visible immediately (e.g. the masthead).
 */
export default function useReveal(initiallyOn = false) {
  const ref = useRef(null);
  const [on, setOn] = useState(initiallyOn);

  useEffect(() => {
    if (initiallyOn) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOn(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [initiallyOn]);

  return [ref, on];
}
