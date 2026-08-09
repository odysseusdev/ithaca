import type { ReactElement } from 'react';
import { IconLink } from '@/components/shared/icon-link';
import { AnimatedBorder } from '@/components/shared/animated-border';
import { siteLinks } from '@/lib/constants';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

const scrollThresholdPixels = 60;

/**
 * Renders the fixed header nav.
 * Renders the fixed header, including the social and support links
 * and the the pp title on.
 *
 * @returns the header.
 */
export function Header(): ReactElement {
  const isScrolled = useScrollThreshold(scrollThresholdPixels);

  return (
    <nav
      id="site-nav"
      data-scrolled={isScrolled}
      className="group fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-transparent bg-transparent px-12 py-5 transition-[background,border-color,backdrop-filter] duration-300 ease-in-out data-[scrolled=true]:border-white/6 data-[scrolled=true]:bg-popover data-[scrolled=true]:backdrop-blur-[14px] max-[480px]:px-6"
    >
      <AnimatedBorder className="bottom-0 opacity-0 transition-opacity duration-300 motion-safe:animate-shimmer-nav group-data-[scrolled=true]:opacity-50" />
      <div className="flex items-center gap-2.5 opacity-0 transition-opacity duration-300 group-data-[scrolled=true]:opacity-100">
        <span className="size-6 shrink-0 overflow-hidden rounded-full border border-white/10">
          <img className="size-full object-cover object-center" src="/logo.png" alt="" />
        </span>
        <span className="font-mono text-[15px] font-medium tracking-[0.5px]">odysseusdev</span>
      </div>
      <div className="ml-auto flex gap-6">
        {siteLinks.map((link) => {
          const Icon = link.icon;

          return (
            <IconLink
              key={link.id}
              href={link.url}
              label={link.label}
              icon={<Icon size={20} />}
            />
          );
        })}
      </div>
    </nav>
  );
}
