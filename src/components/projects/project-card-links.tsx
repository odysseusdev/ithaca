import type { ReactElement } from 'react';
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import type { ProjectUrls } from '@/types/project';

/**
 * Props for {@link ProjectCardLinks}.
 */
export type ProjectCardLinksProps = {
  readonly urls: ProjectUrls;
  readonly projectName: string;
};

/**
 * Renders a project card's outbound links, including a "visit" link,
 * a "source" link, both, or a "links coming soon" message when neither
 * is present.
 *
 * @param props - the component props.
 * @returns the link row for the project.
 */
export function ProjectCardLinks({ urls, projectName }: ProjectCardLinksProps): ReactElement {
  if (urls.live === undefined && urls.source === undefined) {
    return (
      <div className="flex gap-5 font-mono text-sm">
        <span className="text-muted-foreground">links coming soon</span>
      </div>
    );
  }

  return (
    <div className="flex gap-5 font-mono text-sm">
      {urls.live !== undefined && (
        <a
          href={urls.live}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`visit: ${projectName}`}
          className="flex items-center gap-1.5 text-primary transition-colors hover:text-secondary"
        >
          <ArrowSquareOutIcon size={15} />
          visit
        </a>
      )}
      {urls.source !== undefined && (
        <a
          href={urls.source}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`source: ${projectName}`}
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
        >
          <GithubLogoIcon size={15} />
          source
        </a>
      )}
    </div>
  );
}
