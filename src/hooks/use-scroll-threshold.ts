import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether the window has been scrolled past a given threshold,
 * coalescing scroll updates to at most one state change per animation frame.
 *
 * @param pixels - the scroll distance, in px, above which the hook reports `true`.
 * @returns whether `window.scrollY` currently exceeds `pixels`.
 */
export function useScrollThreshold(pixels: number): boolean {
  const [isPastThreshold, setIsPastThreshold] = useState<boolean>(() => window.scrollY > pixels);
  const pendingFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    function handleScroll(): void {
      if (pendingFrameIdRef.current !== null) {
        return;
      }

      pendingFrameIdRef.current = requestAnimationFrame(() => {
        pendingFrameIdRef.current = null;

        setIsPastThreshold((previous) => {
          const next = window.scrollY > pixels;
          return previous === next ? previous : next;
        });
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (pendingFrameIdRef.current !== null) {
        cancelAnimationFrame(pendingFrameIdRef.current);
      }
    };
  }, [pixels]);

  return isPastThreshold;
}
