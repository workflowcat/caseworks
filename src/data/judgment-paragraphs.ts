import data from "./judgment-paragraphs.json";

export type JudgmentParagraph = {
  no: number;
  text: string;
  chapter: string;
  subhead: string;
};

export type OperativeOrder = {
  no: number;
  verb: string;
  text: string;
};

export const judgmentParagraphs = (data.paragraphs ?? []) as JudgmentParagraph[];
export const operativeOrders = (data.operatives ?? []) as OperativeOrder[];

// Quick chapter listing
export function chaptersInOrder(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of judgmentParagraphs) {
    if (p.chapter && !seen.has(p.chapter)) {
      seen.add(p.chapter);
      out.push(p.chapter);
    }
  }
  return out;
}

export function lookupParagraph(no: number): JudgmentParagraph | undefined {
  return judgmentParagraphs.find((p) => p.no === no);
}
