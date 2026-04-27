import Link from "next/link";
import { mirrorEvents } from "@/data/mirror";

export const metadata = { title: "Mirror — caseworks" };

const PALETTE = {
  bg: "#0c0c0e",
  fg: "#e9e7e0",
  soft: "#7c7a7d",
  rule: "#1f1f23",
  court: "#7ec5f0",
  ground: "#e87a4d",
};

export default function MirrorPage() {
  const sorted = [...mirrorEvents].sort((a, b) =>
    a.date.localeCompare(b.date),
  );

  return (
    <div
      className="min-h-screen"
      style={{ background: PALETTE.bg, color: PALETTE.fg }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 07 · Mirror
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          {sorted.length} paired moments
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-20 pb-16">
        <h1 className="serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-tight max-w-5xl">
          Two columns,
          <br />
          one clock.
        </h1>
        <p
          className="mt-10 max-w-2xl text-base leading-relaxed"
          style={{ color: PALETTE.soft }}
        >
          The courtroom on the left, the ground on the right. Both
          anchored to the same vertical time axis. The simultaneity is
          the argument.
        </p>
        <div className="mt-10 flex gap-6">
          <Legend label="Courtroom" color={PALETTE.court} />
          <Legend label="On the ground" color={PALETTE.ground} />
        </div>
      </section>

      <section className="px-4 lg:px-10 pb-24">
        <div
          className="grid grid-cols-12 border-t"
          style={{ borderColor: PALETTE.rule }}
        >
          <div
            className="col-span-5 px-2 lg:px-6 py-4 border-r border-b"
            style={{ borderColor: PALETTE.rule }}
          >
            <p
              className="mono text-[11px] uppercase tracking-widest"
              style={{ color: PALETTE.court }}
            >
              ←  Courtroom
            </p>
          </div>
          <div
            className="col-span-2 py-4 border-r border-b text-center"
            style={{ borderColor: PALETTE.rule }}
          >
            <p
              className="mono text-[11px] uppercase tracking-widest"
              style={{ color: PALETTE.soft }}
            >
              Date
            </p>
          </div>
          <div
            className="col-span-5 px-2 lg:px-6 py-4 border-b text-right"
            style={{ borderColor: PALETTE.rule }}
          >
            <p
              className="mono text-[11px] uppercase tracking-widest"
              style={{ color: PALETTE.ground }}
            >
              On the ground →
            </p>
          </div>
        </div>

        <ol>
          {sorted.map((e, i) => (
            <Row key={i} e={e} />
          ))}
        </ol>
      </section>

      <footer
        className="px-8 lg:px-14 py-10 border-t mono text-[11px]"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        Curated. Both columns are partial — the goal is the rhyme between
        them, not the catalogue.
      </footer>
    </div>
  );
}

function Row({ e }: { e: { date: string; display: string; side: "court" | "ground"; title: string; body: string } }) {
  const onLeft = e.side === "court";
  return (
    <li
      className="grid grid-cols-12 border-b min-h-[120px]"
      style={{ borderColor: PALETTE.rule }}
    >
      <div
        className="col-span-5 px-2 lg:px-6 py-6 border-r flex"
        style={{ borderColor: PALETTE.rule }}
      >
        {onLeft ? <Card e={e} side="left" /> : null}
      </div>
      <div
        className="col-span-2 border-r flex flex-col items-center justify-center py-6 text-center"
        style={{ borderColor: PALETTE.rule }}
      >
        <p
          className="mono text-[11px] uppercase tracking-wider"
          style={{ color: PALETTE.soft }}
        >
          {e.display}
        </p>
        <span
          className="block w-2 h-2 mt-3 rotate-45"
          style={{
            background: onLeft ? PALETTE.court : PALETTE.ground,
          }}
        />
      </div>
      <div className="col-span-5 px-2 lg:px-6 py-6 flex justify-end">
        {!onLeft ? <Card e={e} side="right" /> : null}
      </div>
    </li>
  );
}

function Card({
  e,
  side,
}: {
  e: { title: string; body: string; side: "court" | "ground" };
  side: "left" | "right";
}) {
  const color = e.side === "court" ? PALETTE.court : PALETTE.ground;
  return (
    <article
      className="max-w-md"
      style={{ textAlign: side === "right" ? "right" : "left" }}
    >
      <p
        className="mono text-[10px] uppercase tracking-widest mb-2"
        style={{ color }}
      >
        {e.side === "court" ? "Courtroom" : "On the ground"}
      </p>
      <h3 className="serif text-xl leading-tight">{e.title}</h3>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: PALETTE.soft }}
      >
        {e.body}
      </p>
    </article>
  );
}

function Legend({ label, color }: { label: string; color: string }) {
  return (
    <span className="flex items-center gap-2 mono text-[11px]">
      <span
        className="inline-block w-2 h-2 rotate-45"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
