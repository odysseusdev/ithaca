/**
 * Augments `typewriter-effect`'s bundled type declarations, which omit the
 * `pauseFor` option even though its runtime `Options` object supports it.
 *
 * This would cause tsc error if it was omitted.
 */
declare module 'typewriter-effect' {
  interface Options {
    /**
     * Delay, in milliseconds, after a string finishes typing before it
     * starts deleting.
     *
     * @default 1500
     */
    pauseFor?: number;
  }
}
