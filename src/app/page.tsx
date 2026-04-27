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
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-8 lg:px-14 pt-10 pb-6 flex items-baseline justify-between border-b border-rule">
        <div>
          <p className="serif text-2xl tracking-tight">caseworks</p>
          <p className="label text-ink-soft mt-2">
            Three views of the same record
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
          <span className="italic text-ink-soft">three ways.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-snug text-ink-soft">
          Same case data. Three radically different surfaces. Each commits
          fully to its own visual logic — pick the one that lets you see
          what you came to see.
        </p>

        <ol className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-rule border-y border-rule">
          {concepts.map((c) => (
            <li key={c.href} className="bg-bg">
              <Link
                href={c.href}
                className="block p-10 lg:p-14 h-full hover:bg-bg-2 transition-colors group"
              >
                <p className="mono text-xs text-accent">{c.no}</p>
                <h2 className="serif text-5xl tracking-tight mt-6 group-hover:text-accent transition-colors">
                  {c.name}
                </h2>
                <p className="mt-6 text-base leading-relaxed">{c.deck}</p>
                <p className="mt-4 italic text-sm text-ink-soft">{c.vibe}</p>
                <p className="mt-12 mono text-xs text-accent inline-block">
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
