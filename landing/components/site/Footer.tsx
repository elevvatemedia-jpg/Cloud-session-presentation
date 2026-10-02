import { company } from "@/lib/config";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto w-full max-w-[1320px] border-x border-t border-line">
        <div className="flex flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <span className="font-serif text-xl leading-none text-ink">V&amp;P.</span>
            <p className="text-[0.9375rem] text-muted">
              {company.name} is built in {company.city} by{" "}
              <span className="text-ink">{company.parent}</span>.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
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
            <p className="text-[0.875rem] text-faint">
              © {company.year} {company.parent}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
