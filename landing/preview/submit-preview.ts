import type { Application, SubmitResult } from "@/lib/submit";

/**
 * Stands in for lib/submit.ts in the hosted preview build only.
 * There is no API route in a static preview, so this resolves without
 * sending anything. The footer says so on the page.
 */
export async function submitApplication(
  application: Application,
): Promise<SubmitResult> {
  // eslint-disable-next-line no-console
  console.info("[preview] application not sent:", application);
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}

export type { Application, SubmitResult };
