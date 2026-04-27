import Link from "next/link";

export const metadata = { title: "Pleadings — caseworks" };

const PALETTE = {
  bg: "#08080b",
  fg: "#e9e7e0",
  rule: "#1c1d22",
  soft: "#75747a",
  accent: "#ff5b3a",
  amber: "#f0d055",
};

export default function PleadingsPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
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
            style={{ color: PALETTE.fg }}
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 04 · Pleadings
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          Subject: MH17 · 17 July 2014
        </p>
      </header>

      {/* Title slab */}
      <section className="px-8 lg:px-14 pt-16 pb-10">
        <p
          className="mono text-[11px] uppercase tracking-widest mb-6"
          style={{ color: PALETTE.accent }}
        >
          File no. 28525/20 · ICAO Article 84 · The Hague Trial · ECHR PR 173 (2025)
        </p>
        <h1 className="serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-tight max-w-5xl">
          Five forums.
          <br />
          One missile.
        </h1>
        <p
          className="mt-8 max-w-2xl text-base leading-relaxed"
          style={{ color: PALETTE.soft }}
        >
          A forensic reading of the downing of Malaysia Airlines flight
          MH17, assembled from the findings of the Joint Investigation
          Team, the District Court of The Hague, the ICAO Council, and
          the Grand Chamber of the European Court of Human Rights.
        </p>
      </section>

      <div
        className="border-t border-b grid grid-cols-12"
        style={{ borderColor: PALETTE.rule }}
      >
        <Stat label="Killed" value="298" />
        <Stat label="Dutch nationals" value="196" />
        <Stat label="Time to recover bodies" value="8 mo" />
        <Stat label="Bodies never recovered" value="2" />
        <Stat label="Forums on the record" value="5" />
        <Stat label="Convictions in absentia" value="3" last />
      </div>

      {/* Exhibit A — flight path & intercept geometry */}
      <Exhibit
        letter="A"
        title="The flight path and the intercept"
        caption="Reconstructed from JIT radar data and accepted by the Hague District Court (17 Nov 2022) and the Grand Chamber (9 Jul 2025). Buk-TELAR launched from a farm field near Pervomaiskyi, in territory the separatists controlled and Russia commanded."
      >
        <FlightDiagram />
      </Exhibit>

      {/* Exhibit B — chain of attribution */}
      <Exhibit
        letter="B"
        title="The chain of attribution"
        caption="The Strasbourg court did not have to decide who pulled the trigger. Russia is responsible whether the missile was fired by a Russian soldier or by a member of the &lsquo;DPR&rsquo;: under the de facto organ test, both attribute to the Russian State."
      >
        <AttributionDiagram />
      </Exhibit>

      {/* Exhibit C — the five forums */}
      <Exhibit
        letter="C"
        title="The five forums"
        caption="The same conduct triggered five separate proceedings — criminal, human-rights, civil-aviation, state-responsibility, and reparations. Each operates within its own register; together they form a record."
      >
        <ForumStack />
      </Exhibit>

      {/* Exhibit D — the next of kin finding */}
      <Exhibit
        letter="D"
        title="Article 3 — the next of kin"
        caption="From the Grand Chamber judgment of 9 July 2025."
      >
        <NextOfKin />
      </Exhibit>

      {/* Exhibit E — open questions */}
      <Exhibit
        letter="E"
        title="What remains open"
        caption="Eleven years on, the just-satisfaction track for MH17 has been disjoined and continues separately, with the four pending individual ECHR applications and the ICAO reparations talks running in parallel. Russia has appealed the ICAO ruling to the ICJ. None of these forums has secured a single arrest."
      >
        <OpenQuestions />
      </Exhibit>

      <footer
        className="px-8 lg:px-14 py-12 border-t mono text-[11px] flex flex-wrap gap-x-6 gap-y-2"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        <span>Drawn from primary materials. Diagrammatic, not to scale.</span>
        <span className="ml-auto">
          <Link href="/" className="underline" style={{ color: PALETTE.accent }}>
            ← Back to caseworks
          </Link>
        </span>
      </footer>
    </div>
  );
}

function Stat({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className="col-span-6 md:col-span-4 lg:col-span-2 px-6 lg:px-8 py-7 border-r"
      style={{ borderColor: last ? "transparent" : PALETTE.rule }}
    >
      <p className="label" style={{ color: PALETTE.soft }}>
        {label}
      </p>
      <p className="serif text-[2.4rem] tracking-tight mt-2 leading-none">
        {value}
      </p>
    </div>
  );
}

function Exhibit({
  letter,
  title,
  caption,
  children,
}: {
  letter: string;
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="border-b grid grid-cols-12 gap-x-6 gap-y-6 px-8 lg:px-14 py-14"
      style={{ borderColor: PALETTE.rule }}
    >
      <div className="col-span-12 lg:col-span-3 lg:pr-6">
        <p
          className="mono text-[11px] uppercase tracking-widest mb-2"
          style={{ color: PALETTE.accent }}
        >
          Exhibit {letter}
        </p>
        <h2 className="serif text-3xl leading-tight tracking-tight">
          {title}
        </h2>
        <p
          className="mt-4 text-sm leading-relaxed"
          style={{ color: PALETTE.soft }}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </div>
      <div className="col-span-12 lg:col-span-9">{children}</div>
    </section>
  );
}

// --- Diagrams ---

function FlightDiagram() {
  return (
    <svg
      viewBox="0 0 1000 360"
      className="w-full h-auto block"
      role="img"
      aria-label="MH17 flight path and intercept geometry"
    >
      {/* horizon line */}
      <line
        x1="40"
        x2="960"
        y1="280"
        y2="280"
        stroke={PALETTE.rule}
        strokeWidth="1"
      />
      <text
        x="40"
        y="298"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill={PALETTE.soft}
      >
        ground · eastern Donetsk Oblast
      </text>
      {/* altitude markers */}
      {[80, 140, 200, 260].map((y, i) => (
        <g key={y}>
          <line
            x1="40"
            x2="60"
            y1={y}
            y2={y}
            stroke={PALETTE.rule}
            strokeWidth="0.6"
          />
          <text
            x="14"
            y={y + 3}
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill={PALETTE.soft}
          >
            {[33000, 25000, 17000, 9000][i]} ft
          </text>
        </g>
      ))}
      {/* MH17 path */}
      <line
        x1="60"
        x2="940"
        y1="80"
        y2="80"
        stroke={PALETTE.fg}
        strokeWidth="0.8"
        strokeDasharray="3,3"
      />
      <text
        x="70"
        y="74"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill={PALETTE.fg}
      >
        MH17 — AMS → KUL · cruise 33,000 ft · 12:31 UTC
      </text>
      {/* aircraft glyph */}
      <polygon
        points="540,76 558,80 540,84 545,80"
        fill={PALETTE.fg}
        opacity="0.95"
      />
      {/* impact point */}
      <circle
        cx="546"
        cy="80"
        r="8"
        fill="none"
        stroke={PALETTE.accent}
        strokeWidth="1.5"
      />
      <text
        x="558"
        y="64"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill={PALETTE.accent}
      >
        impact 13:20 UTC
      </text>
      {/* missile arc */}
      <path
        d="M 460 280 Q 503 100 546 80"
        fill="none"
        stroke={PALETTE.accent}
        strokeWidth="1.2"
        strokeDasharray="4,3"
      />
      {/* launch point */}
      <circle cx="460" cy="280" r="3" fill={PALETTE.accent} />
      <line
        x1="460"
        x2="460"
        y1="280"
        y2="320"
        stroke={PALETTE.accent}
        strokeWidth="0.6"
      />
      <text
        x="460"
        y="340"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill={PALETTE.accent}
        textAnchor="middle"
      >
        Pervomaiskyi · launch
      </text>
      {/* angle arc */}
      <path
        d="M 478 280 A 18 18 0 0 0 470 264"
        fill="none"
        stroke={PALETTE.amber}
        strokeWidth="0.8"
      />
      <text
        x="495"
        y="270"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill={PALETTE.amber}
      >
        ~80°
      </text>
      {/* crash site */}
      <line
        x1="592"
        x2="592"
        y1="80"
        y2="280"
        stroke={PALETTE.fg}
        strokeWidth="0.4"
        strokeDasharray="1,3"
        opacity="0.5"
      />
      <text
        x="592"
        y="298"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill={PALETTE.soft}
        textAnchor="middle"
      >
        crash site · Hrabove
      </text>
      <text
        x="592"
        y="312"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill={PALETTE.soft}
        textAnchor="middle"
      >
        ~10 km from launch
      </text>
    </svg>
  );
}

function AttributionDiagram() {
  // Bottom-up: Russian State → Russian Armed Forces / "DPR" → Buk-TELAR → Missile → MH17
  const fg = PALETTE.fg;
  const accent = PALETTE.accent;
  const soft = PALETTE.soft;
  return (
    <svg
      viewBox="0 0 1000 380"
      className="w-full h-auto block"
      role="img"
      aria-label="Attribution diagram"
    >
      {/* nodes */}
      <Node x={500} y={40} w={300} title="Russian Federation" sub="Respondent State (de jure)" fill={accent} fg="#08080b" />
      <Node x={250} y={140} w={240} title="Russian Armed Forces" sub="State organ" fill={fg} fg={PALETTE.bg} />
      <Node x={750} y={140} w={240} title='"Donetsk People&apos;s Republic"' sub="De facto organ — ARSIWA Art. 4" fill="none" fg={fg} stroke={fg} />
      <Node x={500} y={240} w={280} title="Buk-TELAR · 53rd Anti-Aircraft Brigade" sub="Crewed by Russian military" fill="none" fg={fg} stroke={fg} />
      <Node x={500} y={330} w={200} title="9M38-series missile" sub="Fired ~13:20 UTC" fill={accent} fg="#08080b" />

      {/* lines */}
      {[
        ["500,76", "370,140"], // RF → Forces
        ["500,76", "750,140"], // RF → DPR
        ["250,176", "440,240"], // Forces → Buk
        ["870,176", "560,240"], // DPR → Buk
        ["500,276", "500,330"], // Buk → missile
      ].map(([from, to], i) => {
        const [x1, y1] = from.split(",").map(Number);
        const [x2, y2] = to.split(",").map(Number);
        return (
          <line
            key={i}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke={soft}
            strokeWidth="0.7"
            strokeDasharray="2,3"
          />
        );
      })}

      <text
        x="500"
        y="368"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill={soft}
        textAnchor="middle"
      >
        attributed to Russian Federation under either branch
      </text>
    </svg>
  );

  function Node({
    x,
    y,
    w,
    title,
    sub,
    fill,
    fg,
    stroke,
  }: {
    x: number;
    y: number;
    w: number;
    title: string;
    sub: string;
    fill: string;
    fg: string;
    stroke?: string;
  }) {
    return (
      <g>
        <rect
          x={x - w / 2}
          y={y}
          width={w}
          height={36}
          fill={fill}
          stroke={stroke ?? "transparent"}
          strokeWidth="1"
        />
        <text
          x={x}
          y={y + 16}
          fontFamily="var(--font-display)"
          fontSize="14"
          fill={fg}
          textAnchor="middle"
        >
          {title}
        </text>
        <text
          x={x}
          y={y + 30}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill={fg}
          opacity="0.75"
          textAnchor="middle"
        >
          {sub}
        </text>
      </g>
    );
  }
}

function ForumStack() {
  const rows: Array<{
    forum: string;
    case: string;
    finding: string;
    date: string;
  }> = [
    {
      forum: "Hague District Court",
      case: "Crim. trial of Girkin, Dubinskiy, Kharchenko, Pulatov",
      finding: "Three life sentences in absentia. Pulatov acquitted.",
      date: "17 Nov 2022",
    },
    {
      forum: "ICAO Council",
      case: "Article 84 dispute · Australia + NL v. Russia",
      finding:
        "Russia breached Article 3 bis Chicago Convention. 22–3, 10 abstain.",
      date: "12 May 2025",
    },
    {
      forum: "ECHR Grand Chamber",
      case: "Ukraine and the Netherlands v. Russia · 28525/20",
      finding:
        "Violations of Articles 2 (substantive + procedural), 3, 13.",
      date: "9 Jul 2025",
    },
    {
      forum: "ICJ",
      case: "Russia v. Australia + NL · appeal of ICAO ruling",
      finding: "Pending.",
      date: "Sep 2025",
    },
    {
      forum: "ECHR (just satisfaction)",
      case: "Disjoined from main case · 4 individual apps · 500+ relatives",
      finding: "Pending.",
      date: "—",
    },
  ];
  return (
    <div className="space-y-px">
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-12 gap-3 py-4 border-b"
          style={{ borderColor: PALETTE.rule }}
        >
          <p className="col-span-12 md:col-span-3 mono text-xs">
            <span style={{ color: PALETTE.accent }}>
              {String(i + 1).padStart(2, "0")}
            </span>{" "}
            <span>{r.forum}</span>
          </p>
          <div className="col-span-12 md:col-span-7">
            <p className="serif text-base leading-tight">{r.case}</p>
            <p
              className="mt-1 text-xs leading-snug"
              style={{ color: PALETTE.soft }}
            >
              {r.finding}
            </p>
          </div>
          <p
            className="col-span-12 md:col-span-2 mono text-xs md:text-right"
            style={{ color: PALETTE.soft }}
          >
            {r.date}
          </p>
        </div>
      ))}
    </div>
  );
}

function NextOfKin() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <blockquote
        className="col-span-12 md:col-span-7 serif text-2xl lg:text-3xl leading-snug border-l-2 pl-6"
        style={{ borderColor: PALETTE.accent }}
      >
        &ldquo;Some next of kin had to bury the incomplete bodies of their
        relatives; in some cases body parts had been returned to them after
        the burial had taken place. In two cases, the victims&rsquo; bodies
        had never been recovered.&rdquo;
      </blockquote>
      <div className="col-span-12 md:col-span-5 space-y-4 text-sm leading-relaxed">
        <p style={{ color: PALETTE.soft }}>
          The Court found that the next of kin had endured profound grief
          and distress not only from the killings but from the eight-month
          delay in body recovery, the public footage of the crash site, and
          Russia&rsquo;s sustained denials and obstruction of the
          investigation.
        </p>
        <p
          className="mono text-[11px] uppercase tracking-widest"
          style={{ color: PALETTE.accent }}
        >
          Held: violation of Article 3
        </p>
      </div>
    </div>
  );
}

function OpenQuestions() {
  const items = [
    "Just satisfaction adjourned indefinitely.",
    "Four individual ECHR applications, lodged by 500+ relatives, remain pending.",
    "Russia has appealed the ICAO Council decision to the ICJ.",
    "No named individual has been arrested under any forum's process.",
    "Russia has refused to participate in the proceedings since 2022.",
  ];
  return (
    <ol className="space-y-3">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-4 py-3 border-b text-base leading-relaxed"
          style={{ borderColor: PALETTE.rule }}
        >
          <span
            className="mono text-xs pt-1 shrink-0"
            style={{ color: PALETTE.accent }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}
