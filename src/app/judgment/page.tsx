import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { SectionRail } from "@/components/section-rail";
import { sections } from "@/data/judgment-sections";

export const metadata = { title: "III — Annotated judgment · A Reader" };

export default function JudgmentPage() {
  const railItems = sections.map((s) => ({
    id: s.id,
    number: s.number,
    heading: s.heading,
  }));

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="III" title="Annotated judgment" />

      <PageTitle
        kicker="III · Annotated judgment"
        title="The Grand Chamber, on the record."
        deck="A working reading of the public press release that summarises the merits judgment of 9 July 2025, focused on the parts that controlled application 28525/20."
      >
        <p className="text-base leading-relaxed">
          The full judgment is available on{" "}
          <a
            href="https://hudoc.echr.coe.int/fre?i=002-14493"
            className="underline decoration-accent decoration-1 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            HUDOC
          </a>{" "}
          in English and French. The press release —{" "}
          <a
            href="https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965"
            className="underline decoration-accent decoration-1 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECHR 173 (2025)
          </a>
          {" "}— is the source for the text below. Pull quotes are
          reproduced verbatim. Full HUDOC paragraph anchors are not yet
          surfaced on this site.
        </p>
      </PageTitle>

      <section className="px-8 lg:px-14 pb-10 max-w-5xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
          Sections
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 border-t border-rule pt-3">
          {sections.map((s) => (
            <li key={s.id} className="border-b border-rule">
              <Link
                href={`#${s.id}`}
                className="flex items-baseline gap-3 py-2 hover:text-accent transition-colors"
              >
                <span className="mono text-[11px] text-ink-soft min-w-12">
                  {s.number}
                </span>
                <span className="serif text-base">{s.heading}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <main className="px-8 lg:px-14 pb-16 grid grid-cols-12 gap-6 max-w-7xl">
        <aside className="col-span-12 xl:col-span-3 xl:order-last">
          <SectionRail items={railItems} />
        </aside>

        <div className="col-span-12 xl:col-span-9">
          <ol className="space-y-px bg-rule border-t border-b border-rule">
            {sections.map((s) => (
              <li
                key={s.id}
                id={s.id}
                className="bg-bg p-7 lg:p-10 grid grid-cols-12 gap-x-6 scroll-mt-24"
              >
                <div className="col-span-12 lg:col-span-2 lg:pr-2 mb-3 lg:mb-0">
                  <p className="mono text-xs text-accent">{s.number}</p>
                </div>
                <div className="col-span-12 lg:col-span-10 space-y-5">
                  <h2 className="serif text-2xl tracking-tight leading-tight">
                    {s.heading}
                  </h2>
                  <p className="text-[1.05rem] leading-[1.65] max-w-3xl">
                    {s.body}
                  </p>
                  {s.pulls?.map((p, i) => (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent pl-5 my-5 max-w-2xl"
                    >
                      <p className="serif italic text-xl leading-snug">
                        &ldquo;{p.text}&rdquo;
                      </p>
                      <p className="mono text-[11px] text-ink-soft mt-3">
                        {p.cite}
                      </p>
                    </blockquote>
                  ))}
                  <Link
                    href={`#${s.id}`}
                    className="mono text-[11px] text-ink-soft hover:text-accent inline-block"
                  >
                    # {s.id}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>

      <PageFooter next={{ href: "/witness", title: "A reading" }} />
    </div>
  );
}
