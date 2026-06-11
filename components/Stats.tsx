import { Container } from "./ui";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="py-6">
      <Container>
        <Reveal>
          <div className="shadow-panel grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-night-2 sm:grid-cols-4">
            {stats.items.map((s) => (
              <div
                key={s.label}
                className="bg-night px-6 py-10 text-center transition-colors duration-300 hover:bg-[#201e26]"
              >
                <CountUp className="tnum font-display text-4xl text-white sm:text-5xl">
                  {s.value}
                </CountUp>
                <div className="mt-2 text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
