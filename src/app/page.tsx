import Link from "next/link";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";

const SECTIONS: Array<{
  no: string;
  href: string;
  title: string;
  one: string;
  kind: "reading" | "reference";
}> = [
  // Reading
  {
    no: "I",
    href: "/case",
    title: "The case",
    one: "Identifier, parties, findings, and the disjoined just-satisfaction track. The canonical page on application 28525/20.",
    kind: "reading",
  },
  {
    no: "II",
    href: "/history",
    title: "Procedural history",
    one: "Filings, joinder, hearings, judgment, disjoinder. From 13 March 2014 to today.",
    kind: "reading",
  },
  {
    no: "III",
    href: "/judgment",
    title: "Annotated judgment",
    one: "A working reading of the press release that summarises the Grand Chamber's 9 July 2025 merits judgment, with anchor links to the parts of the public record that controlled.",
    kind: "reading",
  },
  {
    no: "IV",
    href: "/witness",
    title: "A reading",
    one: "Six chapters on what eleven years of waiting looks like for the families of the 298 people killed on 17 July 2014.",
    kind: "reading",
  },
  // Reference
  {
    no: "V",
    href: "/quotations",
    title: "Quotations",
    one: "Every direct quotation used on this site, with its attribution and a citation that copies to your clipboard.",
    kind: "reference",
  },
  {
    no: "VI",
    href: "/facts",
    title: "Facts",
    one: "Atomic facts curated from primary materials, filtered by topic, sortable, copyable.",
    kind: "reference",
  },
  {
    no: "VII",
    href: "/registers",
    title: "Voices on the record",
    one: "The same event — the downing, the next of kin, the children — rendered through six voices: Court, Ukraine, the Netherlands, Russia, monitor, academic.",
    kind: "reference",
  },
  {
    no: "VIII",
    href: "/glossary",
    title: "Glossary",
    one: "Defined terms used on this site: Buk-TELAR, JIT, de facto organ, administrative practice, just satisfaction, Article 3 bis, and others.",
    kind: "reference",
  },
  {
    no: "IX",
    href: "/sources",
    title: "Sources",
    one: "Bibliography of primary documents and secondary commentary cited on this site.",
    kind: "reference",
  },
  {
    no: "X",
    href: "/reading-list",
    title: "Reading list",
    one: "External materials beyond what is cited here — primary documents, academic commentary, journalism, OSINT — curated and filterable by depth and kind.",
    kind: "reference",
  },
];

export default function Home() {
  const reading = SECTIONS.filter((s) => s.kind === "reading");
  const reference = SECTIONS.filter((s) => s.kind === "reference");

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <header className="px-8 lg:px-14 pt-9 pb-5 flex items-baseline justify-between border-b border-rule">
        <p className="serif text-base tracking-tight">A Reader</p>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
          App. no. 28525/20
        </p>
      </header>

      <main className="flex-1 px-8 lg:px-14 py-16 lg:py-24 max-w-5xl">
        <p className="mono text-[11px] uppercase tracking-widest text-ink-soft">
          European Court of Human Rights · inter-state proceeding
        </p>
        <h1 className="serif font-medium tracking-tight leading-[0.98] mt-6 text-[clamp(2rem,4.4vw,4.4rem)]">
          Ukraine and the Netherlands
          <span className="italic text-ink-soft"> v. </span>
          Russia
        </h1>
        <p
          className="mt-3 serif italic text-[clamp(1.1rem,1.6vw,1.5rem)] text-ink-soft max-w-3xl"
        >
          On the downing of Malaysia Airlines flight MH17 over occupied
          territory in eastern Ukraine, 17 July 2014, and Russia&rsquo;s
          subsequent conduct.
        </p>

        <p className="mt-12 max-w-2xl text-base leading-relaxed">
          A research reader on the inter-state proceeding lodged by the
          Kingdom of the Netherlands against the Russian Federation under
          the European Convention on Human Rights. The Grand Chamber
          delivered its merits judgment on the joined applications on{" "}
          <span className="mono">9 July 2025</span>; on the same day, it
          disjoined this application from the rest of the case to permit
          the just-satisfaction question to proceed separately.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
          This site is reading and reference. Quotations are reproduced
          from the public record where verifiable; paraphrase is marked.
          Sources are surfaced. Each section ends where the next begins.
        </p>

        <section className="mt-16">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-5">
            Reading
          </p>
          <ol className="border-t border-rule">
            {reading.map((s) => (
              <Row key={s.href} s={s} />
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-5">
            Reference
          </p>
          <ol className="border-t border-rule">
            {reference.map((s) => (
              <Row key={s.href} s={s} />
            ))}
          </ol>
        </section>

        <section className="mt-20 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-5">
            On confidence
          </p>
          <p className="text-base leading-relaxed">
            Quotations marked verbatim are reproduced word-for-word from
            the cited primary source. Quotations marked{" "}
            <em>paraphrased</em> have been compressed or summarised; the
            underlying source supports the substance but not the exact
            wording. Where the original is in another language and an
            English version is shown, that is noted as{" "}
            <em>translated</em>. Numbers carry the cited source in the
            same block. The court text controls in every case.
          </p>
        </section>
      </main>

      <footer className="px-8 lg:px-14 py-7 border-t border-rule grid grid-cols-12 gap-4 mono text-[11px] text-ink-soft">
        <p className="col-span-12 md:col-span-6">
          A reader. Not legal advice. The judgments control.
        </p>
        <p className="col-span-6 md:col-span-3">
          {quotes.length} quotations · {facts.length} facts
        </p>
        <p className="col-span-6 md:col-span-3 md:text-right">
          Companion exploration ·{" "}
          <a
            href="https://casemap-blue.vercel.app"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            CaseMap
          </a>
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
        className="grid grid-cols-12 gap-3 py-5 hover:bg-bg-2 transition-colors group"
      >
        <span className="col-span-2 md:col-span-1 mono text-sm text-accent pt-1">
          {s.no}
        </span>
        <span className="col-span-10 md:col-span-3 serif text-xl tracking-tight leading-tight pt-0.5">
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
