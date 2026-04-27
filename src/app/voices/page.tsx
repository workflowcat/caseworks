import Link from "next/link";
import { quotes } from "@/data/quotes";

export const metadata = { title: "Voices — caseworks" };

const PALETTE = {
  bg: "#f3eee2",
  ink: "#1a1816",
  soft: "#65615b",
  rule: "#cdc9c0",
  accent: "#8b1e1e",
};

export default function VoicesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: PALETTE.bg, color: PALETTE.ink }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b sticky top-0 z-10 backdrop-blur"
        style={{
          borderColor: PALETTE.rule,
          background: "rgba(243, 238, 226, 0.92)",
        }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 11 · Voices
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          {quotes.length} pages · scroll
        </p>
      </header>

      {/* Cover */}
      <section
        className="px-8 lg:px-14 min-h-[88vh] flex flex-col justify-center"
      >
        <div className="max-w-5xl">
          <p
            className="mono text-[11px] uppercase tracking-widest mb-8"
            style={{ color: PALETTE.accent }}
          >
            Forty pages, one quotation each
          </p>
          <h1 className="serif text-[clamp(3rem,8vw,9rem)] leading-[0.88] tracking-tight">
            What was said
            <br />
            <span className="italic" style={{ color: PALETTE.soft }}>
              on the record.
            </span>
          </h1>
          <p
            className="mt-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: PALETTE.soft }}
          >
            From the judgments, the press releases, the academic
            commentary, the rulings of other forums. No commentary. No
            data viz. The words on the record, breathing on their own
            pages.
          </p>
          <p
            className="mono text-xs mt-16"
            style={{ color: PALETTE.soft }}
          >
            ↓ scroll
          </p>
        </div>
      </section>

      {/* Quote pages */}
      {quotes.map((q, i) => (
        <Page key={q.id} q={q} i={i} />
      ))}

      <footer
        className="px-8 lg:px-14 py-12 border-t"
        style={{ borderColor: PALETTE.rule }}
      >
        <p
          className="mono text-[11px]"
          style={{ color: PALETTE.soft }}
        >
          Quotations reproduced verbatim from public sources where
          possible. Where compression was necessary, that is noted in
          the attribution. No words were placed in any party&rsquo;s
          mouth that they did not say on the public record.
        </p>
      </footer>
    </div>
  );
}

function Page({ q, i }: { q: { id: string; text: string; attribution: string; context?: string }; i: number }) {
  // Slight typographic variation per page
  const isShort = q.text.length < 110;
  const isLong = q.text.length > 280;
  const sizeClass = isShort
    ? "text-[clamp(2.4rem,6vw,5.5rem)]"
    : isLong
      ? "text-[clamp(1.4rem,3vw,2.4rem)]"
      : "text-[clamp(1.8rem,4.2vw,3.6rem)]";

  // Alternating alignment / column placement
  const span =
    i % 4 === 0
      ? "lg:col-span-9 lg:col-start-2"
      : i % 4 === 1
        ? "lg:col-span-8 lg:col-start-3"
        : i % 4 === 2
          ? "lg:col-span-10 lg:col-start-2"
          : "lg:col-span-7 lg:col-start-4";

  return (
    <article
      className="border-t min-h-[88vh] flex flex-col justify-center px-8 lg:px-14 py-16"
      style={{ borderColor: PALETTE.rule }}
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-1">
          <p
            className="mono text-[11px]"
            style={{ color: PALETTE.soft }}
          >
            {String(i + 1).padStart(2, "0")} / {quotes.length}
          </p>
        </div>
        <blockquote className={`col-span-12 ${span}`}>
          <p
            className={`serif tracking-tight leading-[1.1] ${sizeClass}`}
          >
            <span style={{ color: PALETTE.accent }}>&ldquo;</span>
            {q.text}
            <span style={{ color: PALETTE.accent }}>&rdquo;</span>
          </p>
          <footer className="mt-12">
            <p
              className="mono text-[11px] uppercase tracking-widest"
              style={{ color: PALETTE.accent }}
            >
              {q.attribution}
            </p>
            {q.context ? (
              <p
                className="serif italic text-sm mt-2"
                style={{ color: PALETTE.soft }}
              >
                {q.context}
              </p>
            ) : null}
          </footer>
        </blockquote>
      </div>
    </article>
  );
}
