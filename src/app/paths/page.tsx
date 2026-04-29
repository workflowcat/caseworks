import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";

export const metadata = { title: "Paths · A Reader" };

type Step = { label: string; href: string; why: string };
type Path = {
  audience: string;
  premise: string;
  steps: Step[];
};

const PATHS: Path[] = [
  {
    audience: "Student",
    premise:
      "You're learning what this case is and why it matters. Read top to bottom; refer to the glossary as terms come up.",
    steps: [
      {
        label: "I · The case",
        href: "/case",
        why: "The canonical page — identifier, parties, the four MH17-specific findings, the disjoined just-satisfaction track.",
      },
      {
        label: "II · Procedural history",
        href: "/history",
        why: "How the four applications arrived at one judgment. The Gantt makes the joinder/disjoinder visible.",
      },
      {
        label: "III · Annotated judgment",
        href: "/judgment",
        why: "The merits judgment summarised section by section. Each pull-quote anchors to its paragraph.",
      },
      {
        label: "VII · Glossary",
        href: "/glossary",
        why: "Buk-TELAR, JIT, de facto organ, administrative practice — terms you will need.",
      },
      {
        label: "VIII · Conflict timeline",
        href: "/timeline",
        why: "Events the Court relied on as evidence. Anchors the legal reasoning to what happened on the ground.",
      },
    ],
  },
  {
    audience: "Journalist",
    premise:
      "You're filing copy. You need attributed quotations, dates, sourced facts, and a sharable card.",
    steps: [
      {
        label: "IV · Quotations",
        href: "/quotations",
        why: "Verbatim quotations with attribution; copy-citation button on every entry.",
      },
      {
        label: "V · Facts",
        href: "/facts",
        why: "Atomic facts with source and date. Filter by topic, copy with citation.",
      },
      {
        label: "VI · Voices on the record",
        href: "/registers",
        why: "Same event in six voices — useful when comparing how parties characterise the same fact.",
      },
      {
        label: "Verify",
        href: "/verify",
        why: "Every claim on the site in one table with confidence band, source, link. Use for fact-checking before publication.",
      },
      {
        label: "Embed card",
        href: "/embed/case",
        why: "Drop a clean iframe of the case identifier into your story. 600×400.",
      },
    ],
  },
  {
    audience: "Lawyer / academic",
    premise:
      "You need primary materials, paragraph anchors, and the wider doctrinal context.",
    steps: [
      {
        label: "Annotated judgment / Articles",
        href: "/judgment/articles",
        why: "The article-by-article finding matrix with operative-order numbers and paragraph anchors.",
      },
      {
        label: "Annotated judgment / Paragraphs",
        href: "/judgment/paragraphs",
        why: "All 1,429 paragraphs of the judgment, indexed by chapter, searchable; full text on HUDOC.",
      },
      {
        label: "VIII · Sources",
        href: "/sources",
        why: "Bibliography of the primary documents and academic commentary cited on this site, with copyable OSCOLA-ish citations.",
      },
      {
        label: "IX · Reading list",
        href: "/reading-list",
        why: "Curated external materials grouped by depth and kind; primary documents, academic, journalism, OSINT.",
      },
      {
        label: "Search",
        href: "/search",
        why: "One search across the site — sections, judgment paragraphs, quotations, facts, glossary, people, conflict events.",
      },
    ],
  },
];

export default function PathsPage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="✦" title="Paths" current="/paths" />

      <PageTitle
        kicker="Paths"
        title="Where to start."
        deck="Three suggested routes through the site, by audience. Each step has a one-line rationale; the order is intentional, not exhaustive."
      />

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        {PATHS.map((p) => (
          <section
            key={p.audience}
            className="border-t border-rule pt-8 pb-2 mb-2"
          >
            <h2 className="mono text-[11px] uppercase tracking-widest text-accent">
              For: {p.audience}
            </h2>
            <p className="serif italic text-lg text-ink-soft mt-3 max-w-3xl leading-snug">
              {p.premise}
            </p>
            <ol className="mt-6 space-y-px bg-rule border-y border-rule">
              {p.steps.map((s, i) => (
                <li key={s.href + i} className="bg-bg">
                  <Link
                    href={s.href}
                    className="grid grid-cols-12 gap-3 px-4 py-4 hover:bg-bg-2 transition-colors"
                  >
                    <span className="col-span-1 mono text-[11px] text-accent pt-1">
                      {i + 1}
                    </span>
                    <span className="col-span-12 md:col-span-3 serif text-base leading-tight pt-0.5">
                      {s.label}
                    </span>
                    <span className="col-span-12 md:col-span-7 text-sm leading-snug text-ink-soft">
                      {s.why}
                    </span>
                    <span className="col-span-12 md:col-span-1 mono text-[11px] text-accent md:text-right pt-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="mt-10 max-w-3xl text-base leading-relaxed">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            On using the site
          </p>
          <p>
            Press <span className="mono">⌘K</span> anywhere to open the
            command palette. Land on{" "}
            <Link
              href="/overview"
              className="underline decoration-accent decoration-1 underline-offset-2"
            >
              /overview
            </Link>{" "}
            for the at-a-glance poster. To embed the case in another
            site, use{" "}
            <Link
              href="/embed/case"
              className="underline decoration-accent decoration-1 underline-offset-2"
            >
              /embed/case
            </Link>{" "}
            in an iframe (600×400).
          </p>
        </section>
      </main>

      <PageFooter current="/paths" />
    </div>
  );
}
