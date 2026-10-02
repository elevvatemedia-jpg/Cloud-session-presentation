import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/AppWindow";
import { foundersCopy } from "@/lib/content";
import { founders, company } from "@/lib/config";

export function Founders() {
  return (
    <Section label="Who builds ValenOS">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-h1 text-ink">
            {foundersCopy.headline[0]}
            <br className="hidden sm:block" />{" "}
            <span className="text-muted">{foundersCopy.headline[1]}</span>
          </h2>
          <p className="mt-8 flex items-center gap-2 text-sm text-faint">
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            {company.parent}, {company.city}
          </p>
        </Reveal>

        <div>
          <RevealGroup tall stagger={0.1} className="space-y-5">
            {foundersCopy.paragraphs.map((p) => (
              <RevealItem key={p.slice(0, 24)}>
                <p className="text-lead text-body">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup tall stagger={0.12} className="mt-10 grid gap-5 sm:grid-cols-2">
            {founders.map((f) => (
              <RevealItem key={f.name} className="flex items-start gap-3.5">
                <Avatar initials={f.initials} className="size-11 text-xs" />
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-medium text-ink">{f.name}</p>
                  <p className="text-[0.875rem] text-muted">{f.role}</p>
                  <p className="mt-1.5 text-[0.875rem] text-faint">{f.line}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
