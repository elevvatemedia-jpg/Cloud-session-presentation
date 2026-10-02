import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * Set NEXT_PUBLIC_SITE_URL in production so Open Graph images resolve to
 * absolute URLs — LinkedIn and Instagram will not render a relative one.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://valenos.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ValenOS — Become a founding member",
  description:
    "A CRM whose agents find the companies worth talking to, write the first email from what was actually said, and move the deal when something happens. Ten founding members get it first.",
  applicationName: "ValenOS",
  authors: [{ name: "Valen & Partners" }],
  keywords: [
    "CRM",
    "AI agents",
    "sales automation",
    "ValenOS",
    "Valen & Partners",
    "Warsaw",
  ],
  openGraph: {
    type: "website",
    siteName: "ValenOS",
    title: "Revenue, not records.",
    description:
      "Ten companies get ValenOS first, on terms set with them, with the two people who build it on the other end of every message.",
    url: siteUrl,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue, not records.",
    description:
      "Ten companies get ValenOS first, on terms set with them. Built in Warsaw by Valen & Partners.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /* Never cap zoom — pinching a landing page is a legitimate thing to do. */
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0c0a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/*
          Mona Sans is the face used on valenos.com — variable, 200-900, with
          the latin-ext subset the Polish names on this page need.
          Fraunces is the serif in the "V&P." mark.
        */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:wght@300..800&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap"
        />
      </head>
      <body className="antialiased">
        <a
          href="#apply"
          className="sr-only rounded-lg bg-ink px-5 py-3 text-paper focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]"
        >
          Skip to the application form
        </a>
        {children}
      </body>
    </html>
  );
}
