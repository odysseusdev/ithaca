import type { ChangeEvent, ReactElement } from 'react';
import { useId } from 'react';
import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react';

/**
 * Props for {@link ProjectsSearchInput}.
 */
export type ProjectsSearchInputProps = {
  readonly value: string;
  readonly onChange: (nextValue: string) => void;
  readonly resultCount: number;
};

/**
 * Renders the controlled search input, with a visually-hidden
 * label and a visually-hidden live region announcing the filtered result
 * count.
 *
 * @param props - the component props.
 * @returns the search input group.
 */
export function ProjectsSearchInput({
  value,
  onChange,
  resultCount,
}: ProjectsSearchInputProps): ReactElement {
  const inputId = useId();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.target.value);
  }

  function handleClear(): void {
    onChange('');
  }

  return (
    <div
      role="search"
      className="flex min-w-55 items-center gap-2.5 border-b border-muted-foreground px-1 py-2 transition-colors duration-200 has-focus-visible:border-primary max-[480px]:w-full"
    >
      <label htmlFor={inputId} className="sr-only">
        search projects
      </label>
      <MagnifyingGlassIcon
        size={15}
        className="shrink-0 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="search by name or tag"
        className="w-full border-none bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="clear search"
          className="shrink-0 cursor-pointer text-muted-foreground hover:text-primary"
        >
          <XIcon size={14} />
        </button>
      )}
      <span aria-live="polite" className="sr-only">
        {resultCount === 1 ? '1 project' : `${resultCount} projects`}
      </span>
    </div>
  );
}
