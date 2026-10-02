import { notFound } from "next/navigation";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { legalDocs } from "@/lib/legal-content";

/**
 * One renderer for every policy. A document that has not been filled in 404s
 * rather than serving an empty page with a legal-sounding title on it.
 */
export function LegalPage({ doc }: { doc: keyof typeof legalDocs }) {
  const content = legalDocs[doc];
  if (!content || content.sections.length === 0) notFound();

  return (
    <>
      <Nav />
      <main className="pt-16 sm:pt-[4.5rem]">
        <div className="mx-auto w-full max-w-[1320px] border-x border-line">
          <div className="px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
            <div className="max-w-[68ch]">
              <h1 className="text-h1 text-ink">{content.title}</h1>
              <p className="mt-4 text-sm text-faint">{content.updated}</p>
              {content.intro && (
                <p className="mt-8 text-lead text-body">{content.intro}</p>
              )}

              <div className="mt-12 space-y-10">
                {content.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-h3 text-ink">{section.title}</h2>
                    <div className="mt-3 space-y-3">
                      {section.body.map((block, i) =>
                        Array.isArray(block) ? (
                          <ul key={i} className="space-y-2 pl-5">
                            {block.map((item) => (
                              <li
                                key={item}
                                className="list-disc text-[1rem] leading-relaxed text-muted marker:text-gold"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p
                            key={i}
                            className="text-[1rem] leading-relaxed text-muted"
                          >
                            {block}
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
