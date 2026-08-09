import { cn } from '@/lib/utils';
import type { ReactElement } from 'react';

/**
 * Props for {@link Backdrop}.
 */
export type BackdropProps = {
  readonly firstOrbClassName: string;
  readonly secondOrbClassName: string;
};

/**
 * Renders two absolutely-positioned, blurred, drifting gradient circles
 * behind an element's content.
 *
 * Position, size, and opacity for each orb are
 * supplied entirely by the caller via `className`.
 *
 * @param props - the component props.
 * @returns the backdrop layer.
 */
export function Backdrop({ firstOrbClassName, secondOrbClassName }: BackdropProps): ReactElement {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-0 rounded-full bg-[radial-gradient(circle,#c6a0f6,transparent_70%)] blur-[90px] motion-safe:animate-drift-1',
          firstOrbClassName,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-0 rounded-full bg-[radial-gradient(circle,#f5bde6,transparent_70%)] blur-[90px] motion-safe:animate-drift-2',
          secondOrbClassName,
        )}
      />
    </>
  );
}
