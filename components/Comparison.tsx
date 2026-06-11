import { Icon } from "./Icon";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { comparison } from "@/lib/content";

function Cross() {
  return (
    <span className="grid size-6 place-items-center rounded-full bg-ink/5 text-ink/30">
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden>
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function CheckMark() {
  return (
    <span className="grid size-6 place-items-center rounded-full bg-red text-white shadow-[0_2px_6px_-1px_rgba(226,42,64,0.5)]">
      <Icon name="Check" className="size-3.5" strokeWidth={3} />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="border-y border-line bg-cream-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={comparison.eyebrow}
            title={comparison.title}
            center
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="shadow-soft mx-auto mt-14 max-w-3xl overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper">
            {/* header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-line">
              <div className="px-5 py-4 text-sm font-medium text-ink-soft sm:px-7">
                What you get
              </div>
              <div className="px-3 py-4 text-center text-xs font-medium text-ink-soft sm:text-sm">
                {comparison.columns[0]}
              </div>
              <div className="bg-night px-3 py-4 text-center text-xs font-medium text-white sm:text-sm">
                {comparison.columns[1]}
              </div>
            </div>

            {/* rows */}
            <Stagger stagger={0.07}>
              {comparison.rows.map((row, i) => (
                <StaggerItem key={row.label} y={12}>
                  <div
                    className={`grid grid-cols-[1.6fr_1fr_1fr] items-center ${
                      i !== comparison.rows.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <div className="px-5 py-4 text-sm text-ink sm:px-7">
                      {row.label}
                    </div>
                    <div className="flex justify-center px-3 py-4">
                      {row.values[0] ? <CheckMark /> : <Cross />}
                    </div>
                    <div className="flex h-full items-center justify-center bg-red/5 px-3 py-4">
                      {row.values[1] ? <CheckMark /> : <Cross />}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
