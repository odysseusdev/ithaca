import type { MouseEvent, ReactElement } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

/**
 * Renders a bouncing chevron at the bottom of the hero that scrolls
 * to the projects section on click.
 *
 * @returns the scroll chevron.
 */
export function ScrollChevron(): ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasScrolledPastThreshold = useScrollThreshold(80);

  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    document
      .getElementById('work')
      ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <a
      href="#work"
      onClick={handleClick}
      aria-label="scroll to projects"
      aria-hidden={hasScrolledPastThreshold}
      tabIndex={hasScrolledPastThreshold ? -1 : undefined}
      data-faded={hasScrolledPastThreshold}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 p-2 opacity-100 transition-opacity duration-300 hover:opacity-70 data-[faded=true]:pointer-events-none data-[faded=true]:opacity-0 motion-safe:animate-bounce"
    >
      <CaretDownIcon size={20} className="text-muted-foreground" />
    </a>
  );
}
