import type { ReactElement } from 'react';
import Typewriter from 'typewriter-effect';
import { siteContent } from '@/lib/constants';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/**
 * Renders the hero's typed tagline, in the format of a terminal command.
 *
 * The animated group is `aria-hidden`, paired with a visually-hidden static
 * paragraph carrying the full phrase.
 *
 * @returns the typed tagline.
 */
export function TypedTagline(): ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <div aria-hidden="true" className="mt-7 text-center font-mono text-tagline">
        <span className="mr-2 text-primary">$</span>
        {prefersReducedMotion ? (
          <span className="text-muted-foreground">{siteContent.tagline}</span>
        ) : (
          <Typewriter
            options={{
              strings: [siteContent.tagline],
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
              pauseFor: 2600,
              cursor: '',
              skipAddStyles: true,
              wrapperClassName: 'text-muted-foreground',
            }}
          />
        )}
        <span className="inline-block h-[1.1em] w-[0.5em] bg-primary align-text-bottom motion-safe:animate-blink" />
      </div>
      <p className="sr-only">{siteContent.tagline}</p>
    </>
  );
}
