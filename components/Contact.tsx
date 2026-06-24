"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./motion/Reveal";
import { contactForm } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-[border-color,box-shadow,background-color] duration-200 focus:border-red focus:bg-paper focus:ring-2 focus:ring-red/15";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "description", string>>;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — a real user never fills this. Bail silently.
    if ((data.get("website") as string)?.trim()) return;

    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const company = (data.get("company") as string)?.trim() ?? "";
    const budget = (data.get("budget") as string) ?? "";
    const description = (data.get("description") as string)?.trim() ?? "";

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please add your email.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "That doesn’t look like a valid email.";
    if (!description) nextErrors.description = "A short note helps us prepare.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, budget, description, website: "" }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={contactForm.eyebrow}
            title={contactForm.title}
            subtitle={contactForm.subtitle}
            center
          />
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-12 w-full max-w-2xl">
          <div className="shadow-soft rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-red/10 text-red">
                  <Icon name="Check" className="size-6" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-2xl text-ink">{contactForm.success.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  {contactForm.success.body}
                </p>
              </div>
            ) : (
              <form id="contactForm" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Honeypot — visually hidden, off-screen, skipped by tab + autofill */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={fieldClass}
                      aria-invalid={!!errors.name}
                    />
                  </Field>

                  <Field label="Email" htmlFor="email" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={fieldClass}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name (optional)"
                    className={fieldClass}
                  />
                </Field>

                <fieldset className="flex flex-col gap-3">
                  <legend className="mb-1 text-sm font-medium text-ink">Monthly budget</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {contactForm.budgets.map((b) => (
                      <label
                        key={b.value}
                        className="pill-hover group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-cream/50 px-4 py-2 text-sm text-ink-soft transition-colors has-[:checked]:border-red has-[:checked]:bg-red/10 has-[:checked]:text-ink"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b.value}
                          className="size-3.5 accent-red"
                        />
                        {b.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field label="What can we help with?" htmlFor="description" required error={errors.description}>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your business, your funnel, and the number you’re trying to move."
                    className={`${fieldClass} resize-y`}
                    aria-invalid={!!errors.description}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-sm text-red-700" role="alert">
                    Something went wrong sending your message. Please try again, or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                  {status !== "sending" && (
                    <Icon
                      name="ArrowRight"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required = false,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-red">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-700" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
