/**
 * Builds the landing page into a static, self-contained preview that can be
 * published as a Claude artifact. Not part of the production build.
 *
 *   node preview/build.mjs
 *
 * Output lands in preview/dist: index.html plus app.css and app.js.
 */
import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "preview/dist");
mkdirSync(dist, { recursive: true });

// 1. Tailwind, scanning the real components so no utility is missed.
execFileSync(
  "npx",
  ["@tailwindcss/cli", "-i", "app/globals.css", "-o", "preview/dist/app.css", "--minify"],
  { cwd: root, stdio: "inherit" },
);

// 2. Bundle React, Motion and every component into one same-origin script.
await build({
  entryPoints: [resolve(root, "preview/entry.tsx")],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  jsx: "automatic",
  outfile: resolve(dist, "app.js"),
  define: { "process.env.NODE_ENV": '"production"' },
  loader: { ".tsx": "tsx", ".ts": "ts" },
  // baseUrl + paths live in preview/tsconfig.build.json so esbuild resolves
  // the "@/" alias the same way Next does, extensions included.
  tsconfig: resolve(root, "preview/tsconfig.build.json"),
  alias: {
    // The preview has no API route, so the form resolves locally instead.
    "@/lib/submit": resolve(root, "preview/submit-preview.ts"),
  },
});

// 3. The artifact shell. No doctype/html/head/body — the platform wraps it.
const css = readFileSync(resolve(dist, "app.css"), "utf8");
writeFileSync(
  resolve(dist, "index.html"),
  `<title>ValenOS Founding Members</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:wght@300..800&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap">
<style>${css}</style>
<style>
  /* The artifact frame pins its own light ground; the page owns its surface. */
  :root { color-scheme: light; }
  #preview-note {
    background: var(--color-paper);
    border-top: 1px solid var(--color-line);
    color: var(--color-muted);
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    padding: 1rem 1.25rem calc(1rem + env(safe-area-inset-bottom, 0px));
    text-align: center;
  }
</style>
<div id="root"></div>
<p id="preview-note">
  Preview build of the founding-members landing page. The application form is
  not connected yet, so submitting it sends nothing.
</p>
<script src="app.js"></script>
`,
  "utf8",
);

console.log("preview built ->", dist);
