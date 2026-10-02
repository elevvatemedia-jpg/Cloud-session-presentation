import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { legalDocs } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalDocs.cookies ? `${legalDocs.cookies.title} — ValenOS` : "ValenOS",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage doc="cookies" />;
}
