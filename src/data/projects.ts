import type { Project } from '@/types/project';

/**
 * The projects to rendered in the project grid.
 *
 * `name` must be unique because it is used as the React key.
 *
 * `tags` drives the search filter.
 *
 * `image` is a path under `/projects/` and may be omitted,
 * in which case the card shows a placeholder.
 */
export const projects: readonly Project[] = [
  {
    name: 'hephaestus',
    tags: ['ai', 'cli'],
    description: 'write agents once in markdown. forge for any harness.',
    urls: {
      live: 'https://hephaestus.odysseusdev.io/',
      source: 'https://github.com/odysseusdev/hephaestus',
    },
    image: '/projects/hephaestus.png',
  },
  {
    name: 'ithaca',
    tags: ['web', 'react', 'tailwind'],
    description: "odysseusdev's rugged land he calls home.",
    urls: {
      live: 'https://odysseusdev.io/',
      source: 'https://github.com/odysseusdev/ithaca',
    },
    image: '/projects/ithaca.png',
  },
  {
    name: 'reel close',
    tags: ['web', 'react', 'shadcn'],
    description: 'five hilariously bad clues. one potentially good movie.',
    urls: {
      live: 'https://reelclose.odysseusdev.io/',
    },
    image: '/projects/reelclose.png',
  },
  {
    name: 'virgil',
    tags: ['ai', 'markdown'],
    description: 'agents that follow me through any circle of ai hell.',
    urls: {
      source: 'https://github.com/odysseusdev/virgil',
    },
    image: '/projects/virgil.png',
  },
];
