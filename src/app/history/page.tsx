import {
  PageFooter,
  PageHeader,
  PageTitle,
  SeeAlso,
} from "@/components/page-chrome";
import { ProceduralGantt } from "@/components/gantt";
import { procedural } from "@/data/procedural";
import { SourceLine } from "@/components/source-link";

export const metadata = { title: "II — Procedural history · A Reader" };

const KIND_LABEL: Record<string, string> = {
  event: "Event",
  filing: "Filing",
  court: "Court",
  external: "External",
};

const KIND_TINT: Record<string, string> = {
  event: "var(--color-warm, #c54b1a)",
  filing: "var(--color-accent, #1c2bd6)",
  court: "var(--color-accent, #1c2bd6)",
  external: "#5a3a6e",
};

export default function HistoryPage() {
  const sorted = [...procedural].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="II" title="Procedural history" current="/history" />

      <PageTitle
        kicker="II · Procedural history"
        title="From the downing to today."
        deck="Each step in the procedural life of application no. 28525/20, in date order, with primary-source citation."
      />

      <section className="px-8 lg:px-14 pb-12 max-w-7xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">
          The four joined applications
        </p>
        <ProceduralGantt />
      </section>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl border-t border-rule pt-12">
        <ol className="border-t border-rule">
          {sorted.map((s) => (
            <li
              key={s.date + s.title}
              className="grid grid-cols-12 gap-3 py-6 border-b border-rule items-baseline"
            >
              <div className="col-span-12 md:col-span-3 lg:col-span-2">
                <p className="mono text-xs">{s.display}</p>
                <p
                  className="mono text-[10px] uppercase tracking-widest mt-1"
                  style={{ color: KIND_TINT[s.kind] }}
                >
                  {KIND_LABEL[s.kind]}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-2">
                <h3 className="serif text-xl tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed">{s.body}</p>
                <p className="mono text-[11px] text-ink-soft">
                  Source: <SourceLine source={s.source} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <SeeAlso
        items={[
          {
            href: "/case",
            label: "The case",
            note: "Identifier, parties, findings, and the disjoined just-satisfaction track.",
          },
          {
            href: "/glossary#joinder",
            label: "Joinder and disjoinder",
            note: "Procedural devices the Court used in this proceeding.",
          },
          {
            href: "/sources",
            label: "Primary documents",
            note: "Press releases and HUDOC entries cited above.",
          },
        ]}
      />

      <PageFooter current="/history" />
    </div>
  );
}
