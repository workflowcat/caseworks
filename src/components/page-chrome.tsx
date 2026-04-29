import Link from "next/link";
import type { ReactNode } from "react";
import { SectionNav } from "./section-nav";
import { neighbours } from "@/data/sections";

export function PageHeader({
  no,
  title,
  current,
}: {
  no: string;
  title: string;
  current?: string;
}) {
  return (
    <header className="px-6 lg:px-12 pt-5 pb-4 flex items-baseline justify-between gap-6 border-b border-rule sticky top-0 bg-bg z-20">
      <div className="flex items-baseline gap-5 min-w-0">
        <Link
          href="/"
          className="serif text-[15px] tracking-tight hover:text-accent transition-colors shrink-0"
        >
          ← A Reader
        </Link>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft hidden md:block truncate">
          {no} · {title}
        </p>
      </div>
      <div className="flex items-baseline gap-4">
        <SectionNav current={current} />
      </div>
    </header>
  );
}

export function PageFooter({
  current,
  next,
}: {
  current?: string;
  next?: { href: string; title: string };
}) {
  // If `current` provided, derive prev/next from sections; otherwise use the
  // explicit `next` prop and no prev (back-compat with earlier wiring).
  const auto = current ? neighbours(current) : { prev: undefined, next: undefined };
  const prev = auto.prev;
  const fwd = auto.next ?? next;

  return (
    <footer className="px-6 lg:px-12 py-8 border-t border-rule grid grid-cols-12 gap-3 mono text-[11px] text-ink-soft">
      <div className="col-span-12 md:col-span-4">
        {prev ? (
          <Link
            href={prev.href}
            className="block hover:text-accent transition-colors"
          >
            <span className="block uppercase tracking-widest">
              ← Previous
            </span>
            <span className="block serif text-base normal-case tracking-normal text-ink mt-1">
              {prev.no} · {prev.title}
            </span>
          </Link>
        ) : null}
      </div>
      <div className="col-span-12 md:col-span-4 md:text-center">
        <Link
          href="/"
          className="hover:text-accent transition-colors"
        >
          <span className="block uppercase tracking-widest">
            Contents
          </span>
          <span className="block serif text-base normal-case tracking-normal text-ink mt-1">
            ↑ All sections
          </span>
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4 md:text-right">
        {fwd ? (
          <Link
            href={fwd.href}
            className="block hover:text-accent transition-colors"
          >
            <span className="block uppercase tracking-widest">
              Next →
            </span>
            <span className="block serif text-base normal-case tracking-normal text-ink mt-1">
              {"no" in fwd && fwd.no
                ? `${fwd.no} · ${fwd.title}`
                : fwd.title}
            </span>
          </Link>
        ) : null}
      </div>
    </footer>
  );
}

export function PageTitle({
  kicker,
  title,
  deck,
  children,
}: {
  kicker: string;
  title: string;
  deck?: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-8 lg:px-14 pt-12 pb-9 max-w-5xl">
      <p className="mono text-[10px] uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <h1 className="serif tracking-tight leading-[1.02] mt-4 text-[clamp(1.75rem,3.4vw,3rem)]">
        {title}
      </h1>
      {deck ? (
        <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.15rem)] text-ink-soft max-w-3xl leading-snug">
          {deck}
        </p>
      ) : null}
      {children ? <div className="mt-6 max-w-3xl">{children}</div> : null}
    </section>
  );
}

export function Cite({
  children,
  source,
}: {
  children: ReactNode;
  source?: string;
}) {
  return (
    <span className="mono text-[10px] text-ink-soft uppercase tracking-wider">
      {source ?? children}
    </span>
  );
}

export function SeeAlso({
  items,
}: {
  items: Array<{ href: string; label: string; note?: string }>;
}) {
  if (items.length === 0) return null;
  return (
    <section className="px-8 lg:px-14 py-10 border-t border-rule max-w-5xl">
      <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-5">
        See also
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border-y border-rule">
        {items.map((it) => (
          <li key={it.href + it.label}>
            <Link
              href={it.href}
              className="block bg-bg p-5 hover:bg-bg-2 transition-colors"
            >
              <p className="serif text-base leading-tight">{it.label}</p>
              {it.note ? (
                <p className="text-xs text-ink-soft mt-1 leading-snug">
                  {it.note}
                </p>
              ) : null}
              <p className="mono text-[11px] text-accent mt-3">→</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
