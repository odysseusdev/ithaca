import { describe, it, expect } from 'vitest';
import { filterProjects } from '@/lib/filter-projects';
import type { Project } from '@/types/project';

function buildProject(overrides: Partial<Project>): Project {
  return {
    name: 'Placeholder',
    tags: ['tag'],
    description: 'A placeholder project.',
    urls: {},
    ...overrides,
  };
}

describe('filterProjects', () => {
  it('returns every project for an empty query', () => {
    const projects = [buildProject({ name: 'Hephaestus' }), buildProject({ name: 'Virgil' })];

    expect(filterProjects(projects, '')).toStrictEqual(projects);
  });

  it('returns every project for a whitespace-only query', () => {
    const projects = [buildProject({ name: 'Hephaestus' }), buildProject({ name: 'Virgil' })];

    expect(filterProjects(projects, '   ')).toStrictEqual(projects);
  });

  it('trims the query before matching', () => {
    const projects = [buildProject({ name: 'Hephaestus' }), buildProject({ name: 'Virgil' })];

    const result = filterProjects(projects, '  hephaestus  ');

    expect(result.map((project) => project.name)).toStrictEqual(['Hephaestus']);
  });

  it('matches case-insensitively on name', () => {
    const projects = [buildProject({ name: 'Hephaestus' }), buildProject({ name: 'Virgil' })];

    const result = filterProjects(projects, 'HEPHAESTUS');

    expect(result.map((project) => project.name)).toStrictEqual(['Hephaestus']);
  });

  it('matches case-insensitively on any tag', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['forge', 'tools'] }),
      buildProject({ name: 'Virgil', tags: ['epic poetry'] }),
    ];

    const result = filterProjects(projects, 'EPIC POETRY');

    expect(result.map((project) => project.name)).toStrictEqual(['Virgil']);
  });

  it('returns an empty array when the query matches neither name nor tag', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['forge'] }),
      buildProject({ name: 'Virgil', tags: ['poetry'] }),
    ];

    expect(filterProjects(projects, 'nonexistent')).toStrictEqual([]);
  });

  it('returns a project matching on both name and tag exactly once', () => {
    const projects = [buildProject({ name: 'Odyssey', tags: ['odyssey-adventure'] })];

    const result = filterProjects(projects, 'odyssey');

    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('Odyssey');
  });

  it('preserves source order in the result', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['forge'] }),
      buildProject({ name: 'Virgil', tags: ['classics'] }),
      buildProject({ name: 'ReelClose', tags: ['forge'] }),
    ];

    const result = filterProjects(projects, 'forge');

    expect(result.map((project) => project.name)).toStrictEqual(['Hephaestus', 'ReelClose']);
  });

  it('returns the exact same array reference for an empty query, not a copy', () => {
    const projects = [buildProject({ name: 'Hephaestus' })];

    expect(filterProjects(projects, '')).toBe(projects);
  });

  it('does not mutate the input array when the query filters out some projects', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['forge'] }),
      buildProject({ name: 'Virgil', tags: ['poetry'] }),
    ];
    const snapshot = projects.map((project) => ({ ...project }));

    const result = filterProjects(projects, 'hephaestus');

    expect(projects).toStrictEqual(snapshot);
    expect(projects).toHaveLength(2);
    expect(result).not.toBe(projects);
  });

  it('matches substrings containing regex-special characters without throwing', () => {
    const projects = [
      buildProject({ name: 'C++ Toolkit', tags: ['a.b*c'] }),
      buildProject({ name: 'Virgil', tags: ['poetry'] }),
    ];

    expect(() => filterProjects(projects, 'c++')).not.toThrow();
    expect(filterProjects(projects, 'c++').map((project) => project.name)).toStrictEqual([
      'C++ Toolkit',
    ]);
    expect(filterProjects(projects, 'a.b*c').map((project) => project.name)).toStrictEqual([
      'C++ Toolkit',
    ]);
  });

  it('matches accented unicode characters case-insensitively', () => {
    const projects = [buildProject({ name: 'Café Odyssey' }), buildProject({ name: 'Virgil' })];

    const result = filterProjects(projects, 'CAFÉ');

    expect(result.map((project) => project.name)).toStrictEqual(['Café Odyssey']);
  });

  it('does not match a tag on a substring outside its prefix', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['ai', 'cli'] }),
      buildProject({ name: 'Ithaca', tags: ['web', 'tailwind'] }),
    ];

    const result = filterProjects(projects, 'ai');

    expect(result.map((project) => project.name)).toStrictEqual(['Hephaestus']);
  });

  it('matches a tag on a genuine prefix', () => {
    const projects = [
      buildProject({ name: 'Ithaca', tags: ['tailwind'] }),
      buildProject({ name: 'Virgil', tags: ['markdown'] }),
    ];

    const result = filterProjects(projects, 'tail');

    expect(result.map((project) => project.name)).toStrictEqual(['Ithaca']);
  });

  it('returns an empty array when the query is longer than any project name or tag', () => {
    const projects = [
      buildProject({ name: 'Hephaestus', tags: ['forge'] }),
      buildProject({ name: 'Virgil', tags: ['poetry'] }),
    ];
    const longQuery = 'x'.repeat(200);

    expect(filterProjects(projects, longQuery)).toStrictEqual([]);
  });
});
