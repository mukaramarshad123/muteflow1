import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <section
      className="relative z-[2] mx-auto max-w-container px-6 py-20 sm:px-8"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="mx-auto max-w-[720px]">
        {faqItems.map((item) => (
          <details key={item.q} className="group border-b border-border py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-medium text-text-primary">
              <span>{item.q}</span>
              <ChevronDown
                className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                strokeWidth={1.5}
                aria-hidden
              />
            </summary>
            <p className="mt-4 text-[16px] leading-[1.6] text-text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
