"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  heroEyebrow,
  heroGhostCta,
  heroH1Line1,
  heroH1Line2,
  heroMeta,
  heroPrimaryCta,
  heroSub,
} from "@/lib/content";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setLoaded(true);
      return;
    }
    const t = window.setTimeout(() => setLoaded(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      className="relative z-[2] mx-auto max-w-container px-6 pb-28 pt-24 sm:px-8 md:pb-40 md:pt-[140px]"
      aria-labelledby="hero-heading"
    >
      <div
        className={`transition-[opacity,transform] duration-[800ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
          loaded
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <Eyebrow withDot>{heroEyebrow}</Eyebrow>
        <h1 id="hero-heading" className="m-0 mt-8 max-w-[900px] text-h1">
          {heroH1Line1}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-text-quiet">{heroH1Line2}</span>
        </h1>
        <p className="mt-8 max-w-[620px] font-normal text-body-lg text-text-muted">
          {heroSub}
        </p>
        <div className="mt-11 flex flex-wrap items-center gap-5">
          <Button variant="primary" href="#scope">
            {heroPrimaryCta}
          </Button>
          <Button variant="ghost" href="#process">
            {heroGhostCta}
          </Button>
        </div>
        <div className="mt-[72px] flex flex-wrap gap-12 border-t border-border pt-8 font-mono text-mono-sm text-text-ghost">
          <span>{heroMeta}</span>
        </div>
      </div>
    </section>
  );
}
