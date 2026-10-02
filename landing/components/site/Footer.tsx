import { company, legal, hasLegal } from "@/lib/config";
import { navLinks } from "@/lib/content";
import { Wordmark } from "@/components/ui/Wordmark";

/** Only the policy links that actually have a URL. */
const POLICIES = [
  { label: "Privacy policy", href: legal.privacyUrl },
  { label: "Terms", href: legal.termsUrl },
  { label: "Cookies", href: legal.cookiesUrl },
].filter((p) => p.href);

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto w-full max-w-[1320px] border-x border-t border-line">
        <div className="flex flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Wordmark height={24} />
            <p className="text-[0.9375rem] text-muted">
              {company.name} is built in {company.city} by{" "}
              <span className="text-ink">{company.parent}</span>.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
            {[...navLinks, { label: "Apply", href: "#apply" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-[0.9375rem] text-muted transition-colors duration-200 hover:text-ink sm:min-h-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ------------------------------------------------- legal row.
            Renders only what lib/config.ts actually holds, so nothing
            invented ever reaches the page. */}
        {(hasLegal || POLICIES.length > 0) && (
          <div className="flex flex-col gap-4 border-t border-line px-5 py-7 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-14">
            <div className="space-y-1 text-[0.8125rem] leading-relaxed text-faint">
              {legal.entity && <p className="text-muted">{legal.entity}</p>}
              {legal.address && <p>{legal.address}</p>}
              {(legal.nip || legal.krs) && (
                <p>
                  {legal.nip && <>NIP {legal.nip}</>}
                  {legal.nip && legal.krs && <span className="px-2">·</span>}
                  {legal.krs && <>KRS {legal.krs}</>}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-x-6 gap-y-1 sm:flex-row sm:items-center">
              {POLICIES.map((policy) => (
                <a
                  key={policy.label}
                  href={policy.href}
                  className="inline-flex min-h-11 items-center text-[0.8125rem] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline sm:min-h-0"
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-line px-5 py-5 sm:px-8 lg:px-14">
          <p className="text-[0.8125rem] text-faint">
            © {company.year} {company.parent}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
