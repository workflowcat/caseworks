import snapshot from "./snapshot.json";

export type CaseStatus = "decided" | "pending" | "preliminary" | "withdrawn";
export type CaseCategory =
  | "state-responsibility"
  | "individual-criminal"
  | "property-commerce"
  | "maritime-territory"
  | "reparations";

export type LandscapeCase = {
  id: string;
  slug: string;
  forum: string;
  category: CaseCategory;
  title: string;
  parties: string;
  filed: string;
  filedDisplay: string;
  decided?: string;
  decidedDisplay?: string;
  status: CaseStatus;
  citation?: string;
  abstract: string;
  detail: string[];
  outcome: string;
  url: string;
  related?: string[];
  awardUsdM?: number;
  enforcementNote?: string;
};

export type Forum = {
  id: string;
  short: string;
  full: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  remit: string;
};

export const cases = snapshot.landscape as LandscapeCase[];
export const forums = snapshot.forums as Forum[];
export const categoryLabels = snapshot.categoryLabels as Record<
  CaseCategory,
  string
>;
export const categoryDeck = snapshot.categoryDeck as Record<
  CaseCategory,
  string
>;

// Importance score for sizing cases in /grid (heuristic).
// Award amount dominates if present; otherwise: ECHR/ICJ judgments > admissibility > pending.
export function importance(c: LandscapeCase): number {
  if (c.awardUsdM) return Math.min(60, 14 + Math.log10(c.awardUsdM) * 9);
  if (c.forum === "echr" && c.status === "decided") return 56;
  if (c.forum === "icj" && c.status === "decided") return 44;
  if (c.forum === "icc") return 40;
  if (c.forum === "icao") return 38;
  if (c.forum === "dutch" && c.status === "decided") return 38;
  if (c.status === "decided") return 32;
  if (c.status === "preliminary") return 24;
  return 22;
}
