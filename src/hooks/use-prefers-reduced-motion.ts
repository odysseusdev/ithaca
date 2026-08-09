import { useEffect, useState } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

/**
 * Tracks the user's `prefers-reduced-motion` OS setting.
 *
 * @returns whether the user has requested reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => window.matchMedia(reducedMotionQuery).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(reducedMotionQuery);

    function handleChange(event: MediaQueryListEvent): void {
      setPrefersReducedMotion(event.matches);
    }

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
