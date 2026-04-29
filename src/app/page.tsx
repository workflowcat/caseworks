import Link from "next/link";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";
import { sections } from "@/data/sections";
import { SITE_VERIFIED_AT } from "@/data/verified-at";

export default function Home() {
  const reading = sections.filter((s) => s.kind === "reading");
  const reference = sections.filter((s) => s.kind === "reference");

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <header className="px-6 lg:px-12 pt-7 pb-4 flex items-baseline justify-between border-b border-rule">
        <p className="serif text-base tracking-tight">A Reader</p>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
          App. no. 28525/20
        </p>
      </header>

      <main className="flex-1 px-8 lg:px-14 py-14 lg:py-20 max-w-5xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
          European Court of Human Rights · inter-state proceeding
        </p>
        <h1 className="serif font-medium tracking-tight leading-[1.02] mt-4 text-[clamp(2rem,4.4vw,4rem)]">
          Ukraine and the Netherlands
          <span className="italic text-ink-soft"> v. </span>
          Russia
        </h1>
        <p className="mt-3 text-[clamp(1rem,1.4vw,1.25rem)] text-ink-soft max-w-3xl leading-snug">
          On the downing of Malaysia Airlines flight MH17, 17 July 2014,
          and Russia&rsquo;s subsequent conduct.
        </p>

        <p className="mt-10 max-w-2xl text-base leading-relaxed">
          A research reader on the inter-state proceeding lodged by the
          Kingdom of the Netherlands against the Russian Federation under
          the European Convention on Human Rights. The Grand Chamber
          delivered its merits judgment on the joined applications on{" "}
          <span className="mono">9 July 2025</span> and disjoined this
          application from the rest of the case on the same day, to permit
          the just-satisfaction question to proceed separately.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
          Reading and reference. Quotations are reproduced from the public
          record where verifiable; paraphrase is marked. Sources are
          surfaced.{" "}
          <span className="mono text-[11px]">
            Press ⌘K to search.
          </span>
        </p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border-y border-rule max-w-3xl">
          <Link
            href="/overview"
            className="bg-bg p-4 hover:bg-bg-2 transition-colors"
          >
            <p className="mono text-[10px] uppercase tracking-widest text-accent">
              Overview
            </p>
            <p className="serif text-base mt-1.5 leading-tight">
              The case at a glance
            </p>
            <p className="text-xs text-ink-soft mt-1">
              Single-screen poster, printable.
            </p>
          </Link>
          <Link
            href="/paths"
            className="bg-bg p-4 hover:bg-bg-2 transition-colors"
          >
            <p className="mono text-[10px] uppercase tracking-widest text-accent">
              Paths
            </p>
            <p className="serif text-base mt-1.5 leading-tight">
              Where to start
            </p>
            <p className="text-xs text-ink-soft mt-1">
              Three reading paths, by audience.
            </p>
          </Link>
          <Link
            href="/search"
            className="bg-bg p-4 hover:bg-bg-2 transition-colors"
          >
            <p className="mono text-[10px] uppercase tracking-widest text-accent">
              Search
            </p>
            <p className="serif text-base mt-1.5 leading-tight">
              Across the site
            </p>
            <p className="text-xs text-ink-soft mt-1">
              Sections, paragraphs, quotes, facts.
            </p>
          </Link>
        </section>

        <section className="mt-14">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">
            Reading
          </p>
          <ol className="border-t border-rule">
            {reading.map((s) => (
              <Row key={s.href} s={s} />
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">
            Reference
          </p>
          <ol className="border-t border-rule">
            {reference.map((s) => (
              <Row key={s.href} s={s} />
            ))}
          </ol>
        </section>

        <section className="mt-16 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">
            On confidence
          </p>
          <p className="text-base leading-relaxed">
            Quotations marked verbatim are reproduced word-for-word from
            the cited primary source. Quotations marked{" "}
            <em>paraphrased</em> have been compressed or summarised.{" "}
            <em>Translated</em> appears where the original is in another
            language. <em>Secondary</em> appears where a fact reaches us
            via the Court&rsquo;s quotation rather than from the
            originating monitor or report. Numbers carry the cited source
            in the same block. The court text controls in every case.
          </p>
        </section>

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">
            On scope
          </p>
          <p className="text-base leading-relaxed">
            This site covers application 28525/20. The wider Ukraine
            v. Russia material — the Crimea companion judgment, the
            full-scale-invasion track, the Donbas administrative
            practices, the BIT cohort, the ICC warrants beyond children
            transfers — appears here only where it bears on the
            Netherlands inter-state proceeding.
          </p>
        </section>
      </main>

      <footer className="px-6 lg:px-12 py-6 border-t border-rule grid grid-cols-12 gap-3 mono text-[11px] text-ink-soft">
        <p className="col-span-12 md:col-span-5">
          A reader. Not legal advice. The judgments control.
        </p>
        <p className="col-span-12 md:col-span-3 md:text-center">
          {quotes.length} quotations · {facts.length} facts ·{" "}
          {sections.length} sections
        </p>
        <p className="col-span-12 md:col-span-4 md:text-right">
          External links last verified {SITE_VERIFIED_AT}
        </p>
      </footer>
    </div>
  );
}

function Row({
  s,
}: {
  s: { no: string; href: string; title: string; one: string };
}) {
  return (
    <li className="border-b border-rule">
      <Link
        href={s.href}
        className="grid grid-cols-12 gap-3 py-4 hover:bg-bg-2 transition-colors group"
      >
        <span className="col-span-2 md:col-span-1 mono text-sm text-accent pt-1">
          {s.no}
        </span>
        <span className="col-span-10 md:col-span-3 serif text-lg tracking-tight leading-tight pt-0.5">
          {s.title}
        </span>
        <span className="col-span-12 md:col-span-7 text-sm leading-snug text-ink-soft pt-1">
          {s.one}
        </span>
        <span className="col-span-12 md:col-span-1 mono text-[11px] text-ink-soft md:text-right pt-1.5 group-hover:text-accent transition-colors">
          →
        </span>
      </Link>
    </li>
  );
}
