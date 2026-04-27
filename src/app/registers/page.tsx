import Link from "next/link";
import { bundles } from "@/data/registers";

export const metadata = { title: "Registers — caseworks" };

const PALETTE = {
  bg: "#fafaf6",
  ink: "#0c0c0d",
  soft: "#76767a",
  rule: "#d6d6cf",
  accent: "#1c2bd6",
  warm: "#c54b1a",
};

const VOICE_TINT: Record<string, string> = {
  court: "#1c2bd6",
  "applicant-ua": "#0a6b3a",
  "applicant-nl": "#c54b1a",
  respondent: "#7a1818",
  monitor: "#5a3a6e",
  academic: "#3a4a5a",
};

const VOICE_LABEL: Record<string, string> = {
  court: "Court",
  "applicant-ua": "Ukraine",
  "applicant-nl": "Netherlands",
  respondent: "Russia",
  monitor: "Monitor",
  academic: "Academic",
};

export default function RegistersPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: PALETTE.bg, color: PALETTE.ink }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
            style={{ color: PALETTE.ink }}
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 10 · Registers
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          One event · six voices
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-16 pb-12 max-w-5xl">
        <h1 className="serif text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight">
          Same fact.
          <br />
          <span className="italic" style={{ color: PALETTE.soft }}>
            Six voices.
          </span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-base leading-relaxed"
          style={{ color: PALETTE.soft }}
        >
          The court&rsquo;s register is not the applicant&rsquo;s register
          is not the respondent&rsquo;s register is not the
          journalist&rsquo;s. Each voice handles the same event in its own
          register. The differences are the content.
        </p>
      </section>

      {bundles.map((b, i) => (
        <Bundle key={b.id} bundle={b} idx={i} />
      ))}

      <footer
        className="px-8 lg:px-14 py-10 border-t mono text-[11px]"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        Each panel reproduces or paraphrases public-record material.
        Where the original is in another language or where compression
        was necessary, that is noted as &lsquo;paraphrased&rsquo;.
      </footer>
    </div>
  );
}

function Bundle({
  bundle,
  idx,
}: {
  bundle: { event: string; date: string; registers: Array<{ id: string; voice: string; voiceLabel: string; voiceCity: string; text: string; context: string }> };
  idx: number;
}) {
  return (
    <section
      className="px-8 lg:px-14 py-16 border-t"
      style={{ borderColor: PALETTE.rule }}
    >
      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 lg:col-span-3">
          <p
            className="mono text-[11px] uppercase tracking-widest"
            style={{ color: PALETTE.warm }}
          >
            Bundle {String(idx + 1).padStart(2, "0")}
          </p>
          <p
            className="mono text-[11px] uppercase tracking-widest mt-2"
            style={{ color: PALETTE.soft }}
          >
            {bundle.date}
          </p>
        </div>
        <h2 className="col-span-12 lg:col-span-9 serif text-4xl tracking-tight leading-tight">
          {bundle.event}
        </h2>
      </div>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: PALETTE.rule }}
      >
        {bundle.registers.map((r) => {
          const tint = VOICE_TINT[r.voice];
          return (
            <li
              key={r.id}
              className="p-7 lg:p-8 flex flex-col"
              style={{ background: PALETTE.bg }}
            >
              <div
                className="flex items-baseline justify-between pb-4 mb-5 border-b"
                style={{ borderColor: PALETTE.rule }}
              >
                <p
                  className="mono text-[10px] uppercase tracking-widest"
                  style={{ color: tint }}
                >
                  {VOICE_LABEL[r.voice]}
                </p>
                <p
                  className="mono text-[10px]"
                  style={{ color: PALETTE.soft }}
                >
                  {r.voiceCity}
                </p>
              </div>
              <p
                className="serif text-[1.05rem] leading-[1.55]"
                dangerouslySetInnerHTML={{
                  __html: `&ldquo;${r.text}&rdquo;`,
                }}
              />
              <div
                className="mt-auto pt-6 border-t"
                style={{ borderColor: PALETTE.rule }}
              >
                <p
                  className="serif italic text-sm leading-snug"
                  style={{ color: PALETTE.soft }}
                >
                  {r.voiceLabel}
                </p>
                <p
                  className="mono text-[10px] mt-2"
                  style={{ color: PALETTE.soft }}
                >
                  {r.context}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
