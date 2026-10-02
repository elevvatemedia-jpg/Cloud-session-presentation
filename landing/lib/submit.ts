export type Application = {
  name: string;
  company: string;
  email: string;
  pains: string[];
};

export type SubmitResult = { ok: true } | { ok: false; message: string };

/**
 * The one place the form talks to the outside world.
 *
 * Today it posts to /api/apply, which only validates and logs — nothing is
 * stored or emailed yet. To go live, replace the body of the route handler in
 * app/api/apply/route.ts with a call to Resend, your CRM, or whatever you pick.
 * Nothing in the UI needs to change.
 */
export async function submitApplication(
  application: Application,
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    });

    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { message?: string } | null;
      return {
        ok: false,
        message:
          body?.message ??
          "We could not send that just now. Try again, or write to us directly.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        "That did not reach us — check your connection and try again, or write to us directly.",
    };
  }
}
