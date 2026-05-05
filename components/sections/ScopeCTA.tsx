import { Button } from "@/components/ui/Button";
import { scopeCta, scopeH2, scopeMeta, scopeSub } from "@/lib/content";

export function ScopeCTA() {
  return (
    <section
      id="scope"
      className="relative z-[2] overflow-hidden py-32"
      aria-labelledby="scope-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-0 h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,245,71,0.06)_0%,transparent_65%)] blur-[48px]"
      />
      <div className="relative mx-auto max-w-[680px] px-6 text-center sm:px-8">
        <h2 id="scope-heading" className="text-h2 text-text-primary">
          {scopeH2}
        </h2>
        <p className="mt-8 text-body-lg text-text-muted">{scopeSub}</p>
        <div className="mt-11 flex flex-col items-center gap-6">
          <Button variant="primary" href="mailto:hello@muteflow.io">
            {scopeCta}
          </Button>
          <p className="font-mono text-mono-sm text-text-ghost">{scopeMeta}</p>
        </div>
      </div>
    </section>
  );
}
