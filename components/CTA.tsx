import { Icon } from "./Icon";
import { Button } from "./ui";
import { Reveal } from "./motion/Reveal";
import { contact } from "@/lib/content";

export function CTA() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="shadow-panel relative overflow-hidden rounded-[32px] bg-night px-6 py-16 text-center text-white ring-1 ring-white/5 sm:py-24">
            {/* soft radial glow */}
            <div
              className="cta-glow pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 75% at 50% 0%, rgba(254,52,73,0.26), transparent 70%)",
              }}
            />
            {/* faint grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 75%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-6">
              <span className="eyebrow inline-flex items-center gap-2 text-red-bright">
                <Icon name="Sparkles" className="size-3.5" />
                {contact.eyebrow}
              </span>
              <h2 className="font-display text-4xl text-balance sm:text-6xl">
                {contact.title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {contact.subtitle}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button href={contact.primary.href} variant="secondary" withArrow>
                  {contact.primary.label}
                </Button>
                <a
                  href={contact.secondary.href}
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                >
                  {contact.secondary.label}
                </a>
              </div>
            </div>
        </div>
      </Reveal>
    </section>
  );
}
