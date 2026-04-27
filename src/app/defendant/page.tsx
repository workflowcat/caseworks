import Link from "next/link";
import { cases as allCases } from "@/data/types";

export const metadata = { title: "The Defendant — caseworks" };

const PALETTE = {
  bg: "#0a0a0b",
  fg: "#f0ede4",
  soft: "#7a7873",
  rule: "#1d1d20",
  accent: "#ff5b3a",
  amber: "#f0d055",
  ice: "#7ec5f0",
};

const NAMED = [
  { name: "Vladimir Putin", title: "President", forum: "ICC", date: "17 Mar 2023" },
  { name: "Maria Lvova-Belova", title: "Comm. for Children's Rights", forum: "ICC", date: "17 Mar 2023" },
  { name: "Sergei Kobylash", title: "Lt. Gen., Long-Range Aviation", forum: "ICC", date: "5 Mar 2024" },
  { name: "Viktor Sokolov", title: "Adm., Black Sea Fleet", forum: "ICC", date: "5 Mar 2024" },
  { name: "Sergei Shoigu", title: "Former Defence Minister", forum: "ICC", date: "24 Jun 2024" },
  { name: "Valery Gerasimov", title: "Chief of the General Staff", forum: "ICC", date: "24 Jun 2024" },
  { name: "Igor Girkin", title: "Former FSB officer", forum: "Hague Dist.", date: "17 Nov 2022" },
  { name: "Sergey Dubinskiy", title: "Field commander", forum: "Hague Dist.", date: "17 Nov 2022" },
  { name: "Leonid Kharchenko", title: "Field commander", forum: "Hague Dist.", date: "17 Nov 2022" },
];

export default function DefendantPage() {
  const totalAwarded = allCases
    .filter((c) => c.awardUsdM)
    .reduce((acc, c) => acc + (c.awardUsdM ?? 0), 0);
  const decidedAgainst = allCases.filter(
    (c) => c.status === "decided",
  ).length;
  const pendingAgainst = allCases.filter(
    (c) => c.status !== "decided" && c.status !== "withdrawn",
  ).length;

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
            Concept 09 · The Defendant
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          A poster
        </p>
      </header>

      {/* Big slab title */}
      <section
        className="px-6 lg:px-12 py-14 lg:py-24 border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <p
          className="mono text-[11px] uppercase tracking-widest mb-6"
          style={{ color: PALETTE.accent }}
        >
          Caseworks Quarterly · Vol. I, No. 1
        </p>
        <h1
          className="serif font-medium tracking-tight leading-[0.82]"
          style={{ fontSize: "clamp(5rem, 17vw, 18rem)" }}
        >
          The
          <br />
          <span style={{ color: PALETTE.accent }}>defendant.</span>
        </h1>
        <p
          className="mt-12 max-w-3xl text-2xl leading-snug serif italic"
          style={{ color: PALETTE.soft }}
        >
          The Russian Federation, in nineteen forums and counting.
        </p>
      </section>

      {/* Headline numbers */}
      <section
        className="grid grid-cols-12 border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <Slab
          big={`$${(totalAwarded / 1000).toFixed(2).replace(/\.?0+$/, "")}bn`}
          label="Awarded"
          sub="Across the property and commerce track."
          tint={PALETTE.amber}
        />
        <Slab
          big="$0"
          label="Voluntarily paid"
          sub="Russia has refused to comply with every monetary award."
          tint={PALETTE.accent}
        />
        <Slab
          big={String(decidedAgainst)}
          label="Cases decided"
          sub={`Out of ${allCases.length} tracked.`}
          tint={PALETTE.ice}
        />
        <Slab
          big="9"
          label="Individuals named"
          sub="Across ICC and Dutch criminal proceedings."
          tint={PALETTE.fg}
          last
        />
      </section>

      {/* The pattern */}
      <section
        className="px-6 lg:px-12 py-16 grid grid-cols-12 gap-8 border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <div className="col-span-12 lg:col-span-4">
          <p
            className="mono text-[11px] uppercase tracking-widest mb-3"
            style={{ color: PALETTE.accent }}
          >
            01 / The pattern
          </p>
          <h2 className="serif text-4xl tracking-tight leading-tight">
            Refused to participate.
            <br />
            <span style={{ color: PALETTE.soft }}>Refused to pay.</span>
            <br />
            Refused to accept.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-px">
          <PatternRow
            n="1"
            text="Russia stopped participating in the ECHR proceedings on the merits after the admissibility hearing."
            tag="ECHR Art. 38 violation"
          />
          <PatternRow
            n="2"
            text="Russia did not appear at the ICJ's provisional-measures hearing in March 2022."
            tag="ICJ — submitted statement only"
          />
          <PatternRow
            n="3"
            text="Russia did not appear at the ITLOS hearing in 2019, claiming UNCLOS Art. 298 exclusion."
            tag="ITLOS — non-appearance"
          />
          <PatternRow
            n="4"
            text="Russia called the ICAO Council's 12 May 2025 ruling 'illegitimate' and refused to accept it."
            tag="ICAO Art. 84"
          />
          <PatternRow
            n="5"
            text="Russia has refused to surrender any of the nine individuals named under ICC and Hague processes."
            tag="No arrests"
          />
          <PatternRow
            n="6"
            text="Russia has refused to satisfy any of the commercial-arbitration awards. Enforcement runs through attachment of state assets in third-party jurisdictions."
            tag="$0 voluntarily paid"
          />
        </div>
      </section>

      {/* Named individuals — sports-card grid */}
      <section
        className="px-6 lg:px-12 py-16 border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <p
          className="mono text-[11px] uppercase tracking-widest mb-6"
          style={{ color: PALETTE.accent }}
        >
          02 / Named in the indictment
        </p>
        <h2 className="serif text-4xl tracking-tight leading-tight mb-10">
          Nine men, four warrants, three trials.
        </h2>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px"
          style={{ background: PALETTE.rule }}
        >
          {NAMED.map((p) => (
            <li
              key={p.name}
              className="p-6"
              style={{ background: PALETTE.bg }}
            >
              <p
                className="mono text-[10px] uppercase tracking-widest"
                style={{ color: PALETTE.accent }}
              >
                {p.forum} · {p.date}
              </p>
              <p className="serif text-3xl tracking-tight mt-3 leading-tight">
                {p.name}
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: PALETTE.soft }}
              >
                {p.title}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Calendar of refusals */}
      <section
        className="px-6 lg:px-12 py-16 border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <p
          className="mono text-[11px] uppercase tracking-widest mb-6"
          style={{ color: PALETTE.accent }}
        >
          03 / Forum by forum
        </p>
        <h2 className="serif text-4xl tracking-tight leading-tight mb-10">
          Every body of law,
          <br />
          <span style={{ color: PALETTE.soft }}>same answer.</span>
        </h2>
        <ul className="space-y-px" style={{ background: PALETTE.rule }}>
          {[
            ["European Court of Human Rights", "Russia ceased participating in 2022. Found in violation of Article 38."],
            ["International Court of Justice", "Provisional measures issued 13–2. Russia has not complied."],
            ["International Criminal Court", "Four sets of arrest warrants. Russia is not a State Party to the Rome Statute."],
            ["ICAO Council", "Russia called the decision 'illegitimate' and appealed to the ICJ."],
            ["ITLOS / PCA UNCLOS", "Russia argued the dispute concerned military activities (Art. 298). Tribunals proceeded."],
            ["Commercial arbitration (PCA / SCC)", "Awards totalling ~$9bn. Russia has refused payment in every case."],
            ["District Court of The Hague", "Three life sentences in absentia. None served."],
          ].map(([forum, line]) => (
            <li
              key={forum}
              className="px-6 py-5 grid grid-cols-12 gap-4"
              style={{ background: PALETTE.bg }}
            >
              <p className="col-span-12 md:col-span-4 serif text-xl leading-tight">
                {forum}
              </p>
              <p
                className="col-span-12 md:col-span-7 text-sm leading-relaxed"
                style={{ color: PALETTE.soft }}
              >
                {line}
              </p>
              <p
                className="col-span-12 md:col-span-1 mono text-[11px] md:text-right"
                style={{ color: PALETTE.accent }}
              >
                {String(["E", "I", "C", "A", "T", "B", "H"].pop())}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 lg:px-12 py-20">
        <p
          className="mono text-[11px] uppercase tracking-widest mb-6"
          style={{ color: PALETTE.accent }}
        >
          04 / The reckoning that has accumulated
        </p>
        <p
          className="serif italic tracking-tight leading-[0.95]"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
          }}
        >
          A record exists,
          <br />
          even when justice
          <br />
          <span style={{ color: PALETTE.accent }}>has not arrived.</span>
        </p>
      </section>

      <footer
        className="px-6 lg:px-12 py-8 border-t mono text-[11px] flex flex-wrap gap-x-6 gap-y-2"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        <span>Caseworks · poster issue</span>
        <span className="ml-auto">{pendingAgainst} cases pending</span>
      </footer>
    </div>
  );
}

function Slab({
  big,
  label,
  sub,
  tint,
  last = false,
}: {
  big: string;
  label: string;
  sub: string;
  tint: string;
  last?: boolean;
}) {
  return (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-3 px-6 lg:px-10 py-12 border-r"
      style={{ borderColor: last ? "transparent" : "var(--film-rule)" }}
    >
      <p
        className="mono text-[11px] uppercase tracking-widest"
        style={{ color: PALETTE.soft }}
      >
        {label}
      </p>
      <p
        className="serif tracking-tight leading-none mt-3"
        style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)", color: tint }}
      >
        {big}
      </p>
      <p
        className="mt-4 text-sm leading-relaxed"
        style={{ color: PALETTE.soft }}
      >
        {sub}
      </p>
    </div>
  );
}

function PatternRow({
  n,
  text,
  tag,
}: {
  n: string;
  text: string;
  tag: string;
}) {
  return (
    <div
      className="grid grid-cols-12 gap-3 px-5 py-5"
      style={{ background: PALETTE.bg, borderTop: `1px solid ${PALETTE.rule}` }}
    >
      <p
        className="col-span-1 mono text-sm"
        style={{ color: PALETTE.accent }}
      >
        {n}
      </p>
      <p className="col-span-12 md:col-span-7 serif text-base leading-snug">
        {text}
      </p>
      <p
        className="col-span-12 md:col-span-4 mono text-[11px] md:text-right uppercase tracking-widest"
        style={{ color: PALETTE.soft }}
      >
        {tag}
      </p>
    </div>
  );
}
