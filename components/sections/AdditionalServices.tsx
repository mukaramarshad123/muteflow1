import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { friendServicesPage } from "@/lib/friendServices";

export function AdditionalServices() {
  return (
    <section
      aria-labelledby="additional-services-heading"
      className="relative z-[2] mx-auto max-w-container px-6 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16"
    >
      <div className="mb-16 max-w-[720px]">
        <Eyebrow>{friendServicesPage.eyebrow}</Eyebrow>
        <h2
          id="additional-services-heading"
          className="mt-6 text-h2 text-text-primary"
        >
          Additional services.
        </h2>
        <p className="mt-6 text-body-lg text-text-muted">
          Desktop support and infrastructure work, separate from muteflow core.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {friendServicesPage.groups.map((g, i) => (
          <article
            key={g.slug}
            className="group relative flex min-h-[240px] flex-col justify-between bg-[#0D0D0F] p-9 transition-colors duration-300 hover:bg-[#131315] motion-reduce:transition-none"
          >
            <div>
              <p className="mb-6 font-mono text-mono-xs tracking-wide-mono text-text-ghost transition-colors duration-300 group-hover:text-signal motion-reduce:transition-none">
                / {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-[14px] text-h3 text-text-primary">{g.title}</h3>
              <p className="mb-7 text-[15px] leading-[1.6] text-text-quiet">
                {g.intro}
              </p>
            </div>
            <p className="border-t border-border pt-5 font-mono text-mono-sm tracking-[0.02em] text-text-dim">
              {g.keyBenefits[0]}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Button variant="ghost" href="/additional-services">
          View details →
        </Button>
      </div>
    </section>
  );
}

