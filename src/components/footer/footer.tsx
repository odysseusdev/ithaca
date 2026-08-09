import type { ReactElement } from 'react';
import { Backdrop } from '@/components/shared/backdrop';
import { IconLink } from '@/components/shared/icon-link';
import { AnimatedBorder } from '@/components/shared/animated-border';
import { siteContent, siteLinks } from '@/lib/constants';

/**
 * Renders the footer, including the social and support links
 * and the copyright line.
 *
 * @returns the footer.
 */
export function Footer(): ReactElement {
  return (
    <footer className="relative z-1 overflow-hidden px-12 pt-30 pb-16 text-center">
      <AnimatedBorder className="top-0 opacity-50 motion-safe:animate-shimmer-footer" />
      <Backdrop
        firstOrbClassName="-top-30 left-[8%] h-80 w-80 opacity-[0.14]"
        secondOrbClassName="right-[10%] -bottom-35 h-75 w-75 opacity-[0.14]"
      />

      <span className="relative font-mono text-sm tracking-wide text-primary uppercase">
        {siteContent.footerLabel}
      </span>
      <h2 className="relative mt-3.5 mb-10 font-display text-footer-title font-bold">
        {siteContent.footerHeading}
      </h2>

      <div className="relative flex flex-wrap justify-center gap-9">
        {siteLinks.map((link) => {
          const Icon = link.icon;

          return (
            <IconLink
              key={link.id}
              href={link.url}
              label={link.label}
              showLabel
              icon={<Icon size={20} />}
            />
          );
        })}
      </div>

      <div className="relative mt-24 font-mono text-xs text-muted-foreground">
        {siteContent.copyright}
      </div>
    </footer>
  );
}
