import { Button } from "@/components/ui/Button";
import { heroPrimaryCta } from "@/lib/content";
import Image from "next/image";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-void/70 py-[18px] backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6 sm:px-8">
        <a href="/" className="flex min-h-11 min-w-11 shrink-0 items-center gap-3 py-2">
          <Image
            src="muteflow-logo-primary.svg"
            alt="muteflow"
            width={160}
            height={40}
            priority
          />
        </a>
        <div className="flex items-center gap-6 md:gap-9">
          <div className="hidden items-center gap-9 md:flex">
            <a
              href="#work"
              className="text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary motion-reduce:transition-none"
            >
              Work
            </a>
            <a
              href="#process"
              className="text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary motion-reduce:transition-none"
            >
              Process
            </a>
          </div>
          <Button variant="primary" href="#scope">
            {heroPrimaryCta}
          </Button>
        </div>
      </div>
    </nav>
  );
}
