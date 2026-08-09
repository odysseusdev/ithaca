import type { Project } from '@/types/project';

/**
 * Filters projects by a case-insensitive match based on the following
 * criteria:
 * - a substring match against the project's name, or
 * - a prefix match against any of its tags
 *
 * @param projects - the full list of projects to filter.
 * @param query - the raw search query.
 * @returns the projects whose name contains, or whose any tag starts with, the query, in source order.
 */
export function filterProjects(projects: readonly Project[], query: string): readonly Project[] {
  const normalisedQuery = query.trim().toLowerCase();

  if (normalisedQuery === '') {
    return projects;
  }

  return projects.filter((project) => {
    const nameMatches = project.name.toLowerCase().includes(normalisedQuery);
    const tagMatches = project.tags.some((tag) => tag.toLowerCase().startsWith(normalisedQuery));

    return nameMatches || tagMatches;
  });
}
