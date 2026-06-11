import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.title}
            subtitle={process.subtitle}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <Stagger className="shadow-soft mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="group relative flex h-full flex-col gap-4 bg-paper p-7 transition-colors duration-300 hover:bg-cream">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                  <span className="font-display text-5xl text-red/25 transition-colors duration-300 group-hover:text-red/60">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}
