import Link from "next/link";
import { cases } from "@/data/types";

const concepts = [
  {
    href: "/grid",
    no: "01",
    name: "Ledger",
    deck: "Every case as a tile. Sized by gravity, sortable by anything.",
    vibe: "Dense. Cold. The whole inventory in one grid.",
  },
  {
    href: "/constellation",
    no: "02",
    name: "Constellation",
    deck: "Cases as points on two free axes. Choose what to compare.",
    vibe: "Spacious. Editorial. Structure over story.",
  },
  {
    href: "/timeline",
    no: "03",
    name: "Timeline",
    deck: "Eleven years on a horizontal scroll. Conflict and law on the same axis.",
    vibe: "Cinematic. Scroll-driven. Time as the only dimension.",
  },
  {
    href: "/pleadings",
    no: "04",
    name: "Pleadings",
    deck: "A forensic dossier on MH17. Five forums. One missile.",
    vibe: "Evidentiary. Diagrammatic. The exhibit annex.",
  },
  {
    href: "/witness",
    no: "05",
    name: "Witness",
    deck: "What eleven years of waiting looks like, in the second person.",
    vibe: "Intimate. Editorial. One human's path through the system.",
  },
  {
    href: "/specimens",
    no: "06",
    name: "Specimens",
    deck: "Each case as a hand-drawn organic specimen. Pinned to a plate.",
    vibe: "Slow. Crafted. A drawer of plants, not a dashboard.",
  },
  {
    href: "/mirror",
    no: "07",
    name: "Mirror",
    deck: "Courtroom on the left, the ground on the right. Same time axis.",
    vibe: "Restrained. Structural. The simultaneity is the argument.",
  },
  {
    href: "/treaty",
    no: "08",
    name: "Treaty Atlas",
    deck: "Cases mapped to the legal instruments they invoke.",
    vibe: "Bipartite. Networked. Hover to see the spokes.",
  },
  {
    href: "/defendant",
    no: "09",
    name: "Defendant",
    deck: "Russia as the subject of one big poster.",
    vibe: "Punk. Headline-grade. Big numbers, big type.",
  },
  {
    href: "/registers",
    no: "10",
    name: "Registers",
    deck: "The same fact rendered in six voices on the public record.",
    vibe: "Parallel-text. Lateral. The differences are the content.",
  },
  {
    href: "/voices",
    no: "11",
    name: "Voices",
    deck: "Forty pages, one quotation each. No commentary, no chart.",
    vibe: "Slow. Typographic. The words breathing on their own.",
  },
  {
    href: "/cards",
    no: "12",
    name: "Cards",
    deck: "Every fact rendered as a single index card. Sortable, atomic.",
    vibe: "Tactile. Reader-driven. Make your own argument.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-8 lg:px-14 pt-10 pb-6 flex items-baseline justify-between border-b border-rule">
        <div>
          <p className="serif text-2xl tracking-tight">caseworks</p>
          <p className="label text-ink-soft mt-2">
            Twelve views of the same record
          </p>
        </div>
        <p className="mono text-xs text-ink-soft hidden md:block">
          {cases.length} cases · {new Set(cases.map((c) => c.forum)).size} forums
        </p>
      </header>

      <main className="flex-1 px-8 lg:px-14 py-16 lg:py-24">
        <h1 className="serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
          The Ukraine–Russia legal landscape,
          <br />
          <span className="italic text-ink-soft">twelve ways.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-snug text-ink-soft">
          Same case data. Twelve radically different surfaces. Each
          commits fully to its own visual logic — pick the one that lets
          you see what you came to see.
        </p>

        <ol className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border-y border-rule">
          {concepts.map((c) => (
            <li key={c.href} className="bg-bg">
              <Link
                href={c.href}
                className="block p-8 lg:p-10 h-full hover:bg-bg-2 transition-colors group"
              >
                <p className="mono text-xs text-accent">{c.no}</p>
                <h2 className="serif text-4xl tracking-tight mt-5 group-hover:text-accent transition-colors">
                  {c.name}
                </h2>
                <p className="mt-5 text-base leading-relaxed">{c.deck}</p>
                <p className="mt-3 italic text-sm text-ink-soft">{c.vibe}</p>
                <p className="mt-10 mono text-xs text-accent inline-block">
                  Open ↗
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </main>

      <footer className="px-8 lg:px-14 py-8 border-t border-rule mono text-[11px] text-ink-soft flex flex-wrap gap-x-8 gap-y-2 justify-between">
        <span>
          Companion to{" "}
          <a
            className="underline decoration-accent decoration-1 underline-offset-2"
            href="https://casemap-blue.vercel.app"
          >
            CaseMap
          </a>{" "}
          — different aesthetic, same evidence.
        </span>
        <span>Built for Vercel. No legal advice. The judgments control.</span>
      </footer>
    </div>
  );
}
