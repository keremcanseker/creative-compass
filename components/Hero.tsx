"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "./Icon";
import { Container, Button } from "./ui";
import { CountUp } from "./motion/CountUp";
import { hero, channels } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-red">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="Star" className="size-4 fill-current" />
      ))}
    </span>
  );
}

/* Abstract "growth dashboard" visual — stands in for the template's photos */
function HeroVisual() {
  const reduce = useReducedMotion();
  const bars = [38, 52, 46, 64, 58, 78, 72, 92];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 36, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      className="relative"
    >
      <div className="shadow-panel rounded-[28px] bg-night p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-white/75">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-bright opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-red-bright" />
            </span>
            Live performance
          </span>
          <span className="text-xs text-white/55">Last 90 days</span>
        </div>

        <div className="mt-6 flex items-end gap-3">
          <CountUp className="font-display text-5xl leading-none">
            +312%
          </CountUp>
          <span className="mb-1 text-sm text-red-bright">ROAS</span>
        </div>

        <div className="mt-6 flex h-32 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-white/10"
              style={{ height: `${h}%` }}
            >
              <motion.div
                className="h-full w-full origin-bottom rounded-t-md bg-red-bright"
                style={{ opacity: 0.4 + (i / bars.length) * 0.6 }}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: 0.5 + i * 0.06,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
          {[
            ["3.1×", "pipeline"],
            ["↓42%", "CAC"],
            ["$180M+", "ad spend"],
          ].map(([v, l]) => (
            <div key={l}>
              <CountUp className="tnum font-display text-xl">{v}</CountUp>
              <div className="text-[11px] uppercase tracking-wider text-white/65">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const copyVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 sm:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <motion.div
            variants={reduce ? undefined : copyVariants}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="flex flex-col items-start gap-7"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-soft"
            >
              <Icon name="Sparkles" className="size-3.5 text-red" />
              {hero.badge}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-5xl text-ink sm:text-6xl lg:text-[68px]"
            >
              {hero.titleTop}{" "}
              <span className="text-red italic">{hero.titleAccent}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href={hero.primary.href} withArrow>
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-3 pt-1"
            >
              <Stars />
              <span className="text-sm text-ink-soft">
                {hero.rating} · {hero.proof}
              </span>
            </motion.div>
          </motion.div>

          {/* visual */}
          <HeroVisual />
        </div>

        {/* stat row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="shadow-soft mt-16 grid grid-cols-2 divide-x divide-y divide-line overflow-hidden rounded-3xl border border-line bg-paper sm:grid-cols-4 sm:divide-y-0"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="px-6 py-7">
              <CountUp className="tnum font-display text-3xl text-ink sm:text-4xl">
                {`${s.prefix ?? ""}${s.value}`}
              </CountUp>
              <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* channels strip */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <span className="eyebrow text-ink-soft">{channels.label}</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {channels.items.map((c) => (
              <span
                key={c}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
