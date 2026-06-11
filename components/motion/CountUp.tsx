"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Counts a numeric stat up when scrolled into view.
 * Accepts strings with a prefix/suffix, e.g. "+312%", "$180M+", "3.1×", "↓42%".
 */
export function CountUp({
  children,
  className,
  duration = 1.4,
}: {
  children: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();

  const text = String(children);
  const parts = text.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(
    reduce || !parts ? text : parts[1] + "0" + parts[3]
  );

  useEffect(() => {
    if (!parts || reduce) {
      setDisplay(text);
      return;
    }
    if (!inView) return;
    const target = parseFloat(parts[2]);
    const decimals = (parts[2].split(".")[1] || "").length;
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(parts[1] + v.toFixed(decimals) + parts[3]),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
