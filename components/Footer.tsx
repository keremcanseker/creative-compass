import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui";
import { Reveal } from "./motion/Reveal";
import { brand, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Reveal>
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="#top" className="group flex items-center gap-2 font-medium">
          <Image
            src="/logo.png"
            alt={`${brand.name} logo`}
            width={32}
            height={32}
            className="size-8 object-contain transition-transform duration-300 group-hover:rotate-[18deg]"
          />
          <span className="text-[15px] tracking-tight">{brand.name}</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${brand.email}`}
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            {brand.email}
          </a>
        </nav>
      </Container>

      <Container className="mt-8 border-t border-line pt-6">
        <p className="text-center text-xs text-ink-soft">
          © {brand.year} {brand.name} · {brand.tagline} · {brand.location}
        </p>
      </Container>
      </Reveal>
    </footer>
  );
}
