import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { AmbientMesh } from "@/components/ui/AmbientMesh";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { friendServicesPage } from "@/lib/friendServices";

export default function AdditionalServicesPage() {
  return (
    <>
      <GrainOverlay />
      <AmbientMesh />
      <Nav />
      <main className="relative z-[2]">
        <section
          className="mx-auto max-w-container px-6 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-20"
          aria-labelledby="additional-services-heading"
        >
          <div className="max-w-[840px]">
            <Eyebrow>{friendServicesPage.eyebrow}</Eyebrow>
            <h1
              id="additional-services-heading"
              className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight-2 text-text-primary sm:text-[56px]"
            >
              {friendServicesPage.h1}
            </h1>
            <p className="mt-6 text-body-lg text-text-muted">
              {friendServicesPage.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button variant="ghost" href="/">
                Back to home →
              </Button>
              <Button variant="primary-sm" href="#desktop-support">
                Jump to services
              </Button>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-container px-6 pb-24 sm:px-8 md:pb-32"
          aria-label="Service categories"
        >
          <div className="grid grid-cols-1 gap-px rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {friendServicesPage.groups.map((g, i) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="group relative flex min-h-[220px] flex-col justify-between bg-[#0D0D0F] p-9 transition-colors duration-300 hover:bg-[#131315] motion-reduce:transition-none"
              >
                <div>
                  <p className="mb-6 font-mono text-mono-xs tracking-wide-mono text-text-ghost transition-colors duration-300 group-hover:text-signal motion-reduce:transition-none">
                    / {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-[14px] text-h3 text-text-primary">
                    {g.title}
                  </h2>
                  <p className="mb-7 text-[15px] leading-[1.6] text-text-quiet">
                    {g.intro}
                  </p>
                </div>
                <p className="border-t border-border pt-5 font-mono text-mono-sm tracking-[0.02em] text-text-dim">
                  {g.keyBenefits[0]}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-container px-6 pb-28 sm:px-8 md:pb-40"
          aria-label="Service details"
        >
          <div className="space-y-16">
            {friendServicesPage.groups.map((g) => (
              <article
                key={g.slug}
                id={g.slug}
                className="scroll-mt-28 rounded-lg border border-border bg-[#0D0D0F] p-9 md:p-10"
              >
                <div className="max-w-[960px]">
                  <p className="font-mono text-mono-xs tracking-wide-mono text-text-ghost">
                    / {g.title}
                  </p>
                  <h2 className="mt-5 text-h2 text-text-primary">{g.title}</h2>
                  <p className="mt-6 text-body-lg text-text-muted">{g.intro}</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <h3 className="text-[14px] font-semibold uppercase tracking-wide-brand text-text-quiet">
                      Key benefits
                    </h3>
                    <ul className="mt-4 space-y-3 text-body text-text-muted">
                      {g.keyBenefits.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal shadow-signal-dot"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-wide-brand text-text-quiet">
                      Services offered
                    </h3>
                    <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                      {g.sections.map((s) => (
                        <div
                          key={s.title}
                          className="rounded-md border border-border p-6"
                        >
                          <h4 className="text-[16px] font-semibold text-text-primary">
                            {s.title}
                          </h4>
                          <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] text-text-muted">
                            {s.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="text-text-dim" aria-hidden>
                                  —
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
                  <a
                    href="#additional-services-heading"
                    className="text-[14px] text-text-ghost hover:text-text-primary"
                  >
                    Back to top
                  </a>
                  <Button variant="ghost" href="/#scope">
                    Scope a build →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

