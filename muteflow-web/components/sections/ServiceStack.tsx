import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  stackEyebrow,
  stackFooterAfter,
  stackFooterBefore,
  stackFooterLink,
  stackH2,
  stackSub,
} from "@/lib/content";
import { services } from "@/lib/services";

export function ServiceStack() {
  return (
    <section
      id="work"
      className="relative z-[2] mx-auto max-w-container px-6 pb-28 pt-16 sm:px-8 md:pb-40 md:pt-20"
      aria-labelledby="stack-heading"
    >
      <div className="mb-20 max-w-[720px]">
        <Eyebrow>{stackEyebrow}</Eyebrow>
        <h2 id="stack-heading" className="mt-6 whitespace-pre-line text-h2 text-text-primary">
          {stackH2}
        </h2>
        <p className="mt-6 text-body-lg text-text-muted">{stackSub}</p>
      </div>
      <div className="grid grid-cols-1 gap-px rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.num}
            className="group relative flex min-h-[260px] flex-col justify-between bg-[#0D0D0F] p-9 transition-colors duration-300 hover:bg-[#131315] motion-reduce:transition-none"
          >
            <div>
              <p className="mb-6 font-mono text-mono-xs tracking-wide-mono text-text-ghost transition-colors duration-300 group-hover:text-signal motion-reduce:transition-none">
                / {s.num}
              </p>
              <h3 className="mb-[14px] text-h3 text-text-primary">{s.title}</h3>
              <p className="mb-7 text-[15px] leading-[1.6] text-text-quiet">{s.body}</p>
            </div>
            <p className="border-t border-border pt-5 font-mono text-mono-sm tracking-[0.02em] text-text-dim">
              {s.stack}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-12 text-center text-[14px] text-text-ghost">
        {stackFooterBefore}
        <a
          href="#scope"
          className="border-b border-signal text-signal no-underline hover:brightness-110"
        >
          {stackFooterLink}
        </a>
        {stackFooterAfter}
      </p>
    </section>
  );
}
