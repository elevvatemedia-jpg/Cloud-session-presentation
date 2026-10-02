import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Workflow } from "@/components/ui/Workflow";
import { agents } from "@/lib/content";

/**
 * Chapter 04. What the agents actually do, as a sequence rather than a cast
 * list — the previous version was four named tabs, which read as though four
 * were all there were.
 */
export function Acts() {
  return (
    <Section id="product" tone="warm" label="What the agents do">
      <Reveal className="max-w-[46rem]">
        <Chapter {...agents.chapter} />
        <h2 className="text-h1 text-ink">{agents.headline}</h2>
        <p className="mt-6 max-w-[54ch] text-lead text-body">{agents.lead}</p>
      </Reveal>

      <Reveal tall className="mt-9 sm:mt-12">
        <Workflow />
      </Reveal>
    </Section>
  );
}
