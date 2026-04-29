import { bundles } from "@/data/registers";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";

export const metadata = { title: "VII — Voices on the record · A Reader" };

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
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="VII" title="Voices on the record" />

      <PageTitle
        kicker="VII · Voices on the record"
        title="The same fact, six voices."
        deck="The court's register is not the applicant's register is not the respondent's register is not the academic's. Three event-bundles, six panels each."
      >
        <p className="text-base leading-relaxed">
          Each panel reproduces public-record material. Where the
          original is in another language or where compression was
          necessary, that is noted as &lsquo;paraphrased&rsquo;. The
          differences between the registers are part of the content.
        </p>
      </PageTitle>

      {bundles.map((b, i) => (
        <Bundle key={b.id} bundle={b} idx={i} />
      ))}

      <PageFooter next={{ href: "/glossary", title: "Glossary" }} />
    </div>
  );
}

function Bundle({
  bundle,
  idx,
}: {
  bundle: {
    event: string;
    date: string;
    registers: Array<{
      id: string;
      voice: string;
      voiceLabel: string;
      voiceCity: string;
      text: string;
      context: string;
    }>;
  };
  idx: number;
}) {
  return (
    <section className="px-8 lg:px-14 py-14 border-t border-rule">
      <div className="grid grid-cols-12 gap-6 mb-8 max-w-5xl">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono text-[10px] uppercase tracking-widest text-accent">
            Bundle {String(idx + 1).padStart(2, "0")}
          </p>
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mt-2">
            {bundle.date}
          </p>
        </div>
        <h2 className="col-span-12 lg:col-span-9 serif text-3xl tracking-tight leading-tight">
          {bundle.event}
        </h2>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
        {bundle.registers.map((r) => (
          <li
            key={r.id}
            className="bg-bg p-6 lg:p-7 flex flex-col"
          >
            <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-rule">
              <p className="mono text-[10px] uppercase tracking-widest text-accent">
                {VOICE_LABEL[r.voice]}
              </p>
              <p className="mono text-[10px] text-ink-soft">
                {r.voiceCity}
              </p>
            </div>
            <p
              className="serif text-[1.02rem] leading-[1.55]"
              dangerouslySetInnerHTML={{
                __html: `&ldquo;${r.text}&rdquo;`,
              }}
            />
            <div className="mt-auto pt-5 border-t border-rule">
              <p className="serif italic text-sm leading-snug text-ink-soft">
                {r.voiceLabel}
              </p>
              <p className="mono text-[10px] text-ink-soft mt-2">
                {r.context}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
