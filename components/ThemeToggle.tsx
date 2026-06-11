"use client";

import { Sun, Moon } from "lucide-react";

/**
 * Toggles the `dark` class on <html> and persists the choice.
 * Icon visibility is driven by CSS (.show-in-light / .show-in-dark), so there
 * is no client-only state and therefore no hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`grid size-10 place-items-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:bg-cream-2 hover:text-ink ${className}`}
    >
      <Moon className="show-in-light size-[18px]" />
      <Sun className="show-in-dark size-[18px]" />
    </button>
  );
}
