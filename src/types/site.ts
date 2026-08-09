import type { Icon } from '@phosphor-icons/react';

/**
 * A single outbound social or support link.
 */
export type SiteLink = {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly icon: Icon;
};
