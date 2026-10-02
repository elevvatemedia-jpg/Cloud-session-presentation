/** Tiny class joiner. Keeps conditional classNames readable without a dependency. */
export function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
