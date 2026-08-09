/**
 * A single project rendered as one card in the project grid.
 */
export type Project = {
  readonly name: string;
  readonly tags: readonly string[];
  readonly description: string;
  readonly urls: ProjectUrls;
  readonly image?: string;
};

/**
 * Optional external links for a project.
 */
export type ProjectUrls = {
  readonly live?: string;
  readonly source?: string;
};
