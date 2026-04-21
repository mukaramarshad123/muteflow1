import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  withDot?: boolean;
};

export function Eyebrow({ children, withDot }: EyebrowProps) {
  return (
    <div className="flex items-center text-eyebrow font-mono uppercase text-text-quiet">
      {withDot ? (
        <span
          className="mr-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal shadow-signal-dot"
          aria-hidden
        />
      ) : null}
      {children}
    </div>
  );
}
