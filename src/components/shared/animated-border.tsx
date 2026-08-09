import { cn } from '@/lib/utils';
import type { ReactElement } from 'react';

/**
 * Props for {@link AnimatedBorder}.
 */
export type AnimatedBorderProps = {
  readonly className?: string;
};

/**
 * Renders an animated horizontal gradient sweep that is used as a border.
 *
 * Positioning, opacity, and animation are supplied entirely by the caller
 * via `className`.
 *
 * @param props - the component props.
 * @returns the shimmer border.
 */
export function AnimatedBorder({ className }: AnimatedBorderProps): ReactElement {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute right-0 left-0 h-0.5 bg-[linear-gradient(90deg,transparent,#c6a0f6,#f5bde6,transparent)] bg-size-[200%_100%]',
        className,
      )}
    />
  );
}
