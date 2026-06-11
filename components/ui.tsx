import Link from "next/link";
import { Icon } from "./Icon";

/* Centered content container with consistent gutters */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* Small uppercase label that precedes section titles */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 text-red-700">
      <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "text-ink transition-colors hover:text-red",
  };
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="ArrowRight"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* Standard section header: eyebrow + serif title + optional subtitle */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        center ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
