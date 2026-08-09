import type { ReactElement } from 'react';
import { Backdrop } from '@/components/shared/backdrop';
import { ScrollChevron } from '@/components/hero/scroll-chevron';
import { TypedTagline } from '@/components/hero/typed-tagline';
import { siteContent } from '@/lib/constants';

/**
 * Renders the full-viewport hero section including the logo, the headline
 * and a typewriter typed tagline.
 *
 * @returns the hero section.
 */
export function Hero(): ReactElement {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Backdrop
        firstOrbClassName="top-[12%] left-[18%] h-105 w-105 opacity-[0.32]"
        secondOrbClassName="right-[16%] bottom-[10%] h-95 w-95 opacity-[0.26]"
      />

      <div className="relative z-1 flex flex-col items-center motion-safe:animate-fade-up">
        <div className="mb-6 size-28 overflow-hidden rounded-full border border-white/10 shadow-glow sm:size-32 md:size-40 lg:size-48">
          <img className="size-full object-cover object-center" src="/logo.png" alt="" />
        </div>
        <h1 className="m-0 font-display text-hero font-bold">{siteContent.name}</h1>
        <TypedTagline />
      </div>

      <ScrollChevron />
    </section>
  );
}
