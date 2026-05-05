import { Eyebrow } from "@/components/ui/Eyebrow";
import { policyBody, policyEyebrow, policyH2 } from "@/lib/content";

export function NonCompete() {
  return (
    <section
      className="relative z-[2] border-y border-border bg-elev py-24"
      aria-labelledby="policy-heading"
    >
      <div className="mx-auto max-w-[720px] px-6 sm:px-8">
        <Eyebrow>{policyEyebrow}</Eyebrow>
        <h2 id="policy-heading" className="mt-6 text-h2 text-text-primary">
          {policyH2}
        </h2>
        <p className="mt-8 text-body-lg text-text-muted">{policyBody}</p>
      </div>
    </section>
  );
}
