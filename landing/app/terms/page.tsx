import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { legalDocs } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalDocs.terms ? `${legalDocs.terms.title} — ValenOS` : "ValenOS",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage doc="terms" />;
}
