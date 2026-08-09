import type { ReactElement } from 'react';
import { Hero } from '@/components/hero/hero';
import { Projects } from '@/components/projects/projects';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

/**
 * Renders the root of the application.
 *
 * @returns the application root.
 */
export function App(): ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground lowercase">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
