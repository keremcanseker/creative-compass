import { Icon, type IconName } from "./Icon";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { why } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="why" className="border-y border-line bg-cream-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={why.eyebrow}
            title={why.title}
            subtitle={why.subtitle}
            center
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {why.cards.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <div className="card-lift shadow-soft group flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-red text-white transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                  <Icon name={c.icon as IconName} className="size-5" />
                </span>
                <h3 className="text-xl font-medium tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
