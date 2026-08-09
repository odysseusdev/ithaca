import type { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for {@link IconLink}.
 */
export type IconLinkProps = {
  readonly href: string;
  readonly label: string;
  readonly icon: ReactNode;
  readonly showLabel?: boolean;
};

/**
 * Renders an outbound icon link.
 *
 * @param props - the component props.
 * @returns the icon link.
 */
export function IconLink({ href, label, icon, showLabel = false }: IconLinkProps): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className={cn('flex transition-colors hover:text-primary', {
        'text-muted-foreground': !showLabel,
        'items-center gap-2.5 font-mono': showLabel,
      })}
    >
      {icon}
      {showLabel && label}
    </a>
  );
}
