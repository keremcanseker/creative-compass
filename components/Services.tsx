import { Icon, type IconName } from "./Icon";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { services } from "@/lib/content";

const tags = [
  "Paid acquisition",
  "Programmatic SEO",
  "Brand systems",
  "Custom software",
  "AI agents",
  "Attribution",
  "Lifecycle",
  "CRO",
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            subtitle={services.subtitle}
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.list.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <div className="card-lift shadow-soft group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-rose text-red transition-all duration-300 group-hover:scale-105 group-hover:bg-red group-hover:text-white">
                    <Icon name={s.icon as IconName} className="size-5" />
                  </span>
                  <span className="font-display text-2xl text-ink/15 transition-colors duration-300 group-hover:text-red/30">
                    {s.id}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-medium tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.blurb}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-ink/80"
                    >
                      <Icon
                        name="Check"
                        className="size-4 shrink-0 text-red"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* capability tag pills (Archio-style) */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="pill-hover rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft hover:border-red/30 hover:text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
