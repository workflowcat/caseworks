import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  no,
  title,
}: {
  no: string;
  title: string;
}) {
  return (
    <header className="px-8 lg:px-14 pt-9 pb-5 flex items-baseline justify-between border-b border-rule sticky top-0 bg-bg z-20">
      <div className="flex items-baseline gap-6">
        <Link
          href="/"
          className="serif text-base tracking-tight hover:text-accent transition-colors"
        >
          ← A Reader
        </Link>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft hidden md:block">
          {no} · {title}
        </p>
      </div>
      <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
        App. no. 28525/20
      </p>
    </header>
  );
}

export function PageFooter({ next }: { next?: { href: string; title: string } }) {
  return (
    <footer className="px-8 lg:px-14 py-7 border-t border-rule grid grid-cols-12 gap-4 mono text-[11px] text-ink-soft">
      <p className="col-span-12 md:col-span-6">
        A reader. Not legal advice. The judgments control.
      </p>
      {next ? (
        <p className="col-span-12 md:col-span-6 md:text-right">
          Next:{" "}
          <Link
            href={next.href}
            className="underline decoration-accent decoration-1 underline-offset-2 text-ink"
          >
            {next.title}
          </Link>{" "}
          →
        </p>
      ) : (
        <p className="col-span-12 md:col-span-6 md:text-right">
          <Link href="/" className="underline">
            ← Back to contents
          </Link>
        </p>
      )}
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
    <section className="px-8 lg:px-14 pt-14 pb-10 max-w-5xl">
      <p className="mono text-[10px] uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <h1 className="serif tracking-tight leading-[0.98] mt-5 text-[clamp(2rem,4.6vw,4.6rem)]">
        {title}
      </h1>
      {deck ? (
        <p className="serif italic mt-3 text-[clamp(1.05rem,1.6vw,1.5rem)] text-ink-soft max-w-3xl">
          {deck}
        </p>
      ) : null}
      {children ? <div className="mt-8 max-w-3xl">{children}</div> : null}
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
      {source ? <CitedSource source={source} /> : children}
    </span>
  );
}

function CitedSource({ source }: { source: string }) {
  // tiny helper kept here to avoid React import chain — render plain link
  // (full SourceLink handles multi-source strings)
  return (
    // dynamic import would complicate things; just defer to consumers using SourceLine directly
    <span>{source}</span>
  );
}
