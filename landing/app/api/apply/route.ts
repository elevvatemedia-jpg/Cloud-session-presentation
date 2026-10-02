import { NextResponse } from "next/server";

/**
 * STUB. Validates the application and logs it. It does not store or forward
 * anything yet.
 *
 * To make it real, keep the validation below and replace the marked block:
 *   - email to the founders   -> Resend / Postmark
 *   - a row per application   -> Notion, Google Sheets, Airtable
 *   - a lead in ValenOS       -> POST to your own endpoint
 *
 * Put any API key in .env.local (see .env.example). Never commit one.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Expected JSON." }, { status: 400 });
  }

  const { name, company, email, pains } = (body ?? {}) as Record<string, unknown>;

  const problems: string[] = [];
  if (typeof name !== "string" || name.trim().length < 2) {
    problems.push("name");
  }
  if (typeof company !== "string" || company.trim().length < 2) {
    problems.push("company");
  }
  if (typeof email !== "string" || !EMAIL.test(email.trim())) {
    problems.push("email");
  }

  if (problems.length > 0) {
    return NextResponse.json(
      { message: "Some details are missing.", fields: problems },
      { status: 422 },
    );
  }

  const application = {
    name: (name as string).trim(),
    company: (company as string).trim(),
    email: (email as string).trim().toLowerCase(),
    pains: Array.isArray(pains) ? pains.filter((p) => typeof p === "string") : [],
    receivedAt: new Date().toISOString(),
  };

  // ---------------------------------------------------------------
  // REPLACE THIS BLOCK with real delivery before the page goes live.
  console.info("[founding-application]", application);
  // ---------------------------------------------------------------

  return NextResponse.json({ ok: true }, { status: 200 });
}
