import { Icon } from "./Icon";
import { Container, SectionHeading, Button } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            subtitle={pricing.subtitle}
            center
          />
        </Reveal>

        <Stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {pricing.plans.map((plan) => {
            const featured = plan.featured;
            return (
              <StaggerItem key={plan.name} className="h-full">
              <div
                className={`flex h-full flex-col rounded-[var(--radius-card)] border p-8 ${
                  featured
                    ? "shadow-panel border-night bg-night text-white lg:-mt-4 lg:mb-[-1rem]"
                    : "shadow-soft card-lift border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg font-medium ${
                      featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.tag && (
                    <span className="rounded-full bg-red px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      {plan.tag}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    featured ? "text-white/75" : "text-ink-soft"
                  }`}
                >
                  {plan.blurb}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="Check"
                        className={`mt-0.5 size-4 shrink-0 ${
                          featured ? "text-red-bright" : "text-red"
                        }`}
                        strokeWidth={3}
                      />
                      <span className={featured ? "text-white/90" : "text-ink/85"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={featured ? "secondary" : "primary"}
                    className="w-full"
                    withArrow
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
