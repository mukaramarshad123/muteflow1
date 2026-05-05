import { Wordmark } from "@/components/brand/Wordmark";
import {
  footerBottom,
  footerCopyright,
  footerDomain,
  footerEmail,
  footerLinks,
  footerTagline,
} from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-border py-12 text-[14px] text-text-ghost">
      <div className="mx-auto max-w-container px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <a href="/" className="inline-block min-h-11 py-1">
              <Wordmark animated={false} />
            </a>
            <p className="mt-4 max-w-xs">{footerTagline}</p>
          </div>
          <div className="flex flex-col gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-11 py-3 font-medium text-text-muted transition-colors duration-200 hover:text-text-primary motion-reduce:transition-none md:py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${footerEmail}`}
              className="min-h-11 py-3 text-text-muted transition-colors hover:text-text-primary md:py-2"
            >
              {footerEmail}
            </a>
            <span>{footerDomain}</span>
            <span>{footerCopyright}</span>
          </div>
        </div>
        <p className="mt-12 font-mono text-mono-xs uppercase tracking-wide-brand text-text-dim">
          {footerBottom}
        </p>
      </div>
    </footer>
  );
}
