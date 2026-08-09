import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectsSearchInput } from '@/components/projects/projects-search-input';
import { projects } from '@/data/projects';
import { siteContent } from '@/lib/constants';
import { filterProjects } from '@/lib/filter-projects';

/**
 * Renders the projects section, including a search bar and responsive
 * project grid.
 *
 * @returns the projects section.
 */
export function Projects(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredProjects = useMemo(() => filterProjects(projects, searchQuery), [searchQuery]);

  return (
    <section
      id="work"
      className="relative z-1 mx-auto max-w-7xl scroll-mt-20 px-12 pt-8 pb-30 max-[480px]:px-6"
    >
      <span className="font-mono text-sm tracking-wide text-primary uppercase">
        {siteContent.projectsLabel}
      </span>
      <div className="mt-3 mb-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="m-0 font-display text-section-title font-bold">
          {siteContent.projectsHeading}
        </h2>
        <ProjectsSearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          resultCount={filteredProjects.length}
        />
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} onTagClick={setSearchQuery} />
          ))}
        </div>
      ) : (
        <p className="py-24 text-center font-mono text-sm text-muted-foreground">
          {siteContent.noResultsHeading} &ldquo;{searchQuery}&rdquo;. {siteContent.noResultsHint}
        </p>
      )}
    </section>
  );
}
