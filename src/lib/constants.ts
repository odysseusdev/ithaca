import type { SiteLink } from '@/types/site';
import { CoffeeIcon, GithubLogoIcon, HeartIcon } from '@phosphor-icons/react';

/**
 * Site-wide text content shared across components.
 */
export const siteContent = {
  name: 'odysseusdev',
  tagline: 'stuck writing documentation instead of epic poems..',
  projectsLabel: '// projects',
  projectsHeading: "Things I've built",
  searchPlaceholder: 'search by name or tag',
  noResultsHeading: 'No projects match',
  noResultsHint: 'Try a different name or tag.',
  footerLabel: '// to be continued',
  footerHeading: 'more voyages ahead',
  copyright: '© 2026 odysseusdev · stuck writing documentation instead of epic poems..',
} as const;

/**
 * The social and support links rendered in the header and footer.
 */
export const siteLinks: readonly SiteLink[] = [
  {
    id: 'github',
    label: 'github',
    url: 'https://github.com/odysseusdev',
    icon: GithubLogoIcon,
  },
  {
    id: 'sponsor',
    label: 'sponsor',
    url: 'https://github.com/sponsors/odysseusdev?frequency=one-time',
    icon: HeartIcon,
  },
  {
    id: 'ko-fi',
    label: 'ko-fi',
    url: 'https://ko-fi.com/odysseusdev',
    icon: CoffeeIcon,
  },
];
