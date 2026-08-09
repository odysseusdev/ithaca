import { describe, it, expect } from 'vitest';
import { projects } from '@/data/projects';

describe('projects', () => {
  it('gives every project a non-empty name and description', () => {
    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
    }
  });

  it('has unique names across the array, since name is the React key', () => {
    const names = projects.map((project) => project.name);
    const uniqueNames = new Set(names);

    expect(uniqueNames.size).toBe(names.length);
  });

  it('gives every project at least one tag and no empty tag strings', () => {
    for (const project of projects) {
      expect(project.tags.length).toBeGreaterThan(0);

      for (const tag of project.tags) {
        expect(tag.length).toBeGreaterThan(0);
      }
    }
  });

  it('uses absolute https urls for live and source, when present', () => {
    for (const project of projects) {
      if (project.urls.live !== undefined) {
        expect(project.urls.live.startsWith('https://')).toBe(true);
      }

      if (project.urls.source !== undefined) {
        expect(project.urls.source.startsWith('https://')).toBe(true);
      }
    }
  });

  it('uses a /projects/ prefix for image, when present', () => {
    for (const project of projects) {
      if (project.image !== undefined) {
        expect(project.image.startsWith('/projects/')).toBe(true);
      }
    }
  });

  it('has no leading or trailing whitespace in name, description, or any tag', () => {
    for (const project of projects) {
      expect(project.name).toBe(project.name.trim());
      expect(project.description).toBe(project.description.trim());

      for (const tag of project.tags) {
        expect(tag).toBe(tag.trim());
      }
    }
  });

  it('has no duplicate tags within a single project', () => {
    for (const project of projects) {
      const uniqueTags = new Set(project.tags);

      expect(uniqueTags.size).toBe(project.tags.length);
    }
  });
});
