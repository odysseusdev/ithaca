import type { ReactElement } from 'react';
import { useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import type { OnMoveParams } from 'react-parallax-tilt';
import { ProjectCardImage } from '@/components/projects/project-card-image';
import { ProjectCardLinks } from '@/components/projects/project-card-links';
import type { Project } from '@/types/project';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/**
 * Props for {@link ProjectCard}.
 */
export type ProjectCardProps = {
  readonly project: Project;
  readonly onTagClick: (tag: string) => void;
};

/**
 * Renders a single project card. The 3D tilt and mauve glare are owned
 * entirely by `react-parallax-tilt`'s outer wrapper; the card's visual
 * chrome (border, background, and magnitude-driven border/shadow
 * intensity) lives on an inner div ref'd directly and updated outside
 * React state via `--card-tilt-magnitude`, matching the performance
 * principle of the original hand-rolled implementation.
 *
 * @param props - the component props.
 * @returns the project card.
 */
export function ProjectCard({ project, onTagClick }: ProjectCardProps): ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();
  const innerCardRef = useRef<HTMLDivElement | null>(null);
  const [isPointerInside, setIsPointerInside] = useState<boolean>(false);

  /**
   * Recomputes tilt magnitude from the library's own tilt angles and writes
   * it directly onto the inner card element, bypassing React state.
   *
   * @param params - the library's move params, including `tiltAngleX`/`tiltAngleY` in degrees.
   */
  function handleMove({ tiltAngleX, tiltAngleY }: OnMoveParams): void {
    const tiltMagnitude = Math.min(1, (Math.abs(tiltAngleX) + Math.abs(tiltAngleY)) / 12);
    innerCardRef.current?.style.setProperty('--card-tilt-magnitude', String(tiltMagnitude));
  }

  /**
   * Marks the pointer as inside the card when it enters the tilt wrapper.
   */
  function handleEnter(): void {
    setIsPointerInside(true);
  }

  /**
   * Resets tilt magnitude and marks the pointer as outside the card when it
   * leaves the tilt wrapper, easing the border/shadow back to neutral.
   */
  function handleLeave(): void {
    innerCardRef.current?.style.setProperty('--card-tilt-magnitude', '0');
    setIsPointerInside(false);
  }

  return (
    <Tilt
      className="cursor-default"
      tiltEnable={!prefersReducedMotion}
      tiltMaxAngleX={6}
      tiltMaxAngleY={7}
      perspective={1600}
      glareEnable={!prefersReducedMotion}
      glareColor="#c6a0f6"
      glareMaxOpacity={0.07}
      glarePosition="all"
      reset={true}
      transitionSpeed={150}
      onMove={handleMove}
      onEnter={handleEnter}
      onLeave={handleLeave}
    >
      <div
        ref={innerCardRef}
        data-pointer-inside={isPointerInside}
        className="relative overflow-hidden rounded-2xl border border-white/8 bg-card shadow-none [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] data-[pointer-inside=true]:border-[rgb(198_160_246/calc(0.25+var(--card-tilt-magnitude)*0.55))] data-[pointer-inside=true]:shadow-[0_20px_40px_-22px_rgb(198_160_246/calc(0.15+var(--card-tilt-magnitude)*0.3))]"
      >
        <ProjectCardImage image={project.image} />

        <div className="relative z-1 flex min-h-57.5 flex-col justify-between p-7">
          <div>
            <h3 className="m-0 font-display text-xl font-bold">{project.name}</h3>
            <p className="mt-2.5 max-w-[80%] text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onTagClick(tag)}
                  className="cursor-pointer rounded-full border border-dashed border-border px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <ProjectCardLinks urls={project.urls} projectName={project.name} />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
