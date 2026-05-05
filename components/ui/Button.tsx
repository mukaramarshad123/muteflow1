import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "primary-sm" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex min-h-11 min-w-11 items-center justify-center bg-signal text-void border-none px-6 py-[14px] text-[15px] font-semibold rounded-md tracking-tight-1 shadow-signal-glow hover:brightness-95 active:scale-[0.98] transition-all duration-200 motion-reduce:transition-none motion-reduce:active:scale-100",
  "primary-sm":
    "inline-flex min-h-11 min-w-11 items-center justify-center bg-signal text-void border-none px-[18px] py-[10px] text-[13px] font-semibold rounded-[5px] shadow-signal-glow hover:brightness-95 active:scale-[0.98] transition-all duration-200 motion-reduce:transition-none motion-reduce:active:scale-100",
  ghost:
    "inline-flex min-h-11 min-w-11 items-center justify-center bg-transparent text-text-primary border border-border px-6 py-[14px] text-[15px] font-medium rounded-md tracking-tight-1 hover:border-text-ghost hover:bg-elev transition-all duration-200 motion-reduce:transition-none",
};

export type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();
  const label =
    ariaLabel ?? (typeof children === "string" ? children : undefined);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={label}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={label} {...rest}>
      {children}
    </button>
  );
}
