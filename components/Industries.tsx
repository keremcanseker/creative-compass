import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={industries.eyebrow}
            title={industries.title}
            center
          />
        </Reveal>
        <Stagger
          stagger={0.05}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3"
        >
          {industries.items.map((name) => (
            <StaggerItem key={name} y={12}>
              <span className="pill-hover block rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink hover:border-red/30 hover:bg-rose/50 hover:shadow-soft">
                {name}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
