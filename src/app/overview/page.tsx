import Link from "next/link";
import { ProceduralGantt } from "@/components/gantt";
import { LaunchGeometry } from "@/components/launch-geometry";
import { ForumStatusStrip } from "@/components/forum-status";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";
import { sections } from "@/data/sections";
import { judgmentParagraphs, operativeOrders } from "@/data/judgment-paragraphs";
import { SITE_VERIFIED_AT } from "@/data/verified-at";

export const metadata = {
  title: "Overview · A Reader",
  description:
    "The Netherlands v. Russia (App. no. 28525/20) at a glance — case identifier, launch geometry, findings, procedural Gantt, key quotes.",
};

const TOP_QUOTES = [
  "court-flagrant",
  "court-not-lawful",
  "court-bodies",
];

export default function OverviewPage() {
  const topQuotes = TOP_QUOTES.map((id) =>
    quotes.find((q) => q.id === id),
  ).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <header className="px-6 lg:px-12 pt-6 pb-3 flex items-baseline justify-between border-b border-rule">
        <Link
          href="/"
          className="serif text-base tracking-tight hover:text-accent transition-colors"
        >
          ← A Reader
        </Link>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
          Overview · printable
        </p>
      </header>

      <main className="px-6 lg:px-12 py-10 max-w-[1280px] mx-auto w-full">
        {/* Title */}
        <section className="grid grid-cols-12 gap-4 pb-6 border-b border-rule">
          <div className="col-span-12 md:col-span-9">
            <p className="mono text-[10px] uppercase tracking-widest text-accent">
              European Court of Human Rights · Grand Chamber · 9 July 2025
            </p>
            <h1 className="serif font-medium tracking-tight leading-[1.02] mt-3 text-[clamp(2rem,3.4vw,3rem)]">
              Ukraine and the Netherlands{" "}
              <span className="italic text-ink-soft">v.</span> Russia
            </h1>
            <p className="serif italic text-lg mt-2 text-ink-soft max-w-2xl">
              Inter-state proceeding, application no. 28525/20 — the
              downing of Malaysia Airlines flight MH17, 17 July 2014.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-3">
            <Stat label="Killed" value="298" />
            <Stat label="Dutch nationals" value="196" />
            <Stat label="Findings against Russia" value="5" />
            <Stat label="Operative orders" value={String(operativeOrders.length)} />
          </div>
        </section>

        {/* Forum status + geometry */}
        <section className="grid grid-cols-12 gap-6 py-8 border-b border-rule">
          <div className="col-span-12 md:col-span-6">
            <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
              Across the forums
            </p>
            <ForumStatusStrip />
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
              Launch geometry
            </p>
            <LaunchGeometry />
          </div>
        </section>

        {/* Findings matrix */}
        <section className="py-8 border-b border-rule">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            Findings under 28525/20
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-rule border-y border-rule">
            {[
              { art: "Art. 2", label: "substantive", op: 5 },
              { art: "Art. 2", label: "procedural", op: 6 },
              { art: "Art. 13", label: "no remedy", op: 7 },
              { art: "Art. 3", label: "next of kin", op: 8 },
              { art: "Art. 38", label: "cooperation", op: 25 },
            ].map((f) => (
              <li key={`${f.art}-${f.label}`} className="bg-bg p-4">
                <p className="mono text-xs text-accent">{f.art}</p>
                <p className="serif text-sm leading-tight mt-1">
                  Violation
                </p>
                <p className="text-xs text-ink-soft mt-1 italic">
                  {f.label}
                </p>
                <a
                  href={`/judgment/paragraphs#op-${f.op}`}
                  className="mono text-[10px] uppercase tracking-widest text-ink-soft hover:text-accent block mt-2"
                >
                  Op. {f.op}
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Procedural Gantt */}
        <section className="py-8 border-b border-rule">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            The four joined applications
          </p>
          <ProceduralGantt />
        </section>

        {/* Top quotes */}
        <section className="py-8 border-b border-rule">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-5">
            From the judgment
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topQuotes.map((q) => (
              <li
                key={q.id}
                className="border-l-2 border-accent pl-4"
              >
                <p className="serif italic text-base leading-snug">
                  &ldquo;{q.text.slice(0, 220)}
                  {q.text.length > 220 ? "…" : ""}&rdquo;
                </p>
                <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mt-3">
                  {q.attribution}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* TOC */}
        <section className="py-8 grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-2">
            <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
              Read further
            </p>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-baseline gap-2 py-1 hover:text-accent"
              >
                <span className="mono text-[10px] text-accent w-6">
                  {s.no}
                </span>
                <span className="serif text-sm">{s.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 lg:px-12 py-5 border-t border-rule mono text-[11px] text-ink-soft flex flex-wrap justify-between gap-2">
        <span>
          {quotes.length} quotations · {facts.length} facts ·{" "}
          {judgmentParagraphs.length} judgment paragraphs indexed
        </span>
        <span>External links last verified {SITE_VERIFIED_AT}</span>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule px-3 py-2">
      <p className="mono text-[9px] uppercase tracking-widest text-ink-soft">
        {label}
      </p>
      <p className="serif text-2xl tracking-tight mt-1 leading-none">
        {value}
      </p>
    </div>
  );
}
