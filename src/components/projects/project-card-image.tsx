import type { ReactElement } from 'react';

/**
 * Props for {@link ProjectCardImage}.
 */
export type ProjectCardImageProps = {
  readonly image?: string;
};

/**
 * Renders a project card's background image, or a placeholder pattern
 * when no image is provided.
 *
 * @param props - the component props.
 * @returns the card's image layer.
 */
export function ProjectCardImage({ image }: ProjectCardImageProps): ReactElement {
  const backgroundImage =
    image !== undefined
      ? `url(${image})`
      : 'repeating-linear-gradient(135deg, #363a4f 0px, #363a4f 12px, #2c2f45 12px, #2c2f45 24px)';

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mask-[linear-gradient(to_left,#000_0%,#000_32px,transparent_148px)] bg-size-[auto_100%] bg-position-[right_center]"
        style={{ backgroundImage }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2c2f45_0px,#2c2f45_32px,rgba(44,47,69,0.55)_96px,transparent_148px)]"
      />
    </>
  );
}
