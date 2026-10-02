import { clsx } from "@/lib/clsx";

/**
 * The Valen & Partners mark. Navy V, grey &P.
 *
 * The path is relative in the static preview build and absolute under Next,
 * which serves it from /public — see preview/build.mjs.
 */
const MARK_SRC = process.env.NEXT_PUBLIC_MARK_SRC ?? "/vp-mark.png";

/** Intrinsic ratio of the asset, used to reserve space and avoid layout shift. */
const RATIO = 428 / 160;

export function Wordmark({
  height = 22,
  className,
  alt = "Valen & Partners",
}: {
  height?: number;
  className?: string;
  /** Empty when an adjacent text label already names the brand. */
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={MARK_SRC}
      alt={alt}
      width={Math.round(height * RATIO)}
      height={height}
      /* An explicit width, not auto: inside a column flex container the
         default align-items:stretch resizes an auto width to the full
         container, which blew the mark up to 350px on a phone. */
      style={{ height, width: Math.round(height * RATIO) }}
      className={clsx("block shrink-0 self-start select-none", className)}
      draggable={false}
    />
  );
}
