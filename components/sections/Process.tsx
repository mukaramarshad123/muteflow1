import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  processEyebrow,
  processH2,
  processSteps,
  processSub,
} from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="relative z-[2] mx-auto max-w-container px-6 pb-28 pt-20 sm:px-8 md:pb-40"
      aria-labelledby="process-heading"
    >
      <div className="mb-20 max-w-[720px]">
        <Eyebrow>{processEyebrow}</Eyebrow>
        <h2 id="process-heading" className="mt-6 text-h2 text-text-primary">
          {processH2}
        </h2>
        <p className="mt-6 text-body-lg text-text-muted">{processSub}</p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] lg:gap-x-0 lg:gap-y-0">
        {processSteps.map((step, i) => (
          <div key={step.num} className="contents">
            <div className="flex flex-col">
              <p className="mb-4 font-mono text-mono-xs tracking-wide-mono text-text-ghost">
                / {step.num}
              </p>
              <h3 className="text-h3 text-text-primary">{step.title}</h3>
              <p className="mt-3 text-body text-text-muted">{step.body}</p>
            </div>
            {i < processSteps.length - 1 ? (
              <div
                className="hidden items-center justify-center lg:flex"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-signal-dot motion-reduce:animate-none" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
