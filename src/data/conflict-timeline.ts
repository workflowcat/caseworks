// Timeline of conflict events that the Court relied on as evidence in the
// merits judgment, plus a few earlier procedural-political moments that
// frame the period under jurisdiction. Each entry sourced.

export type ConflictEvent = {
  id: string;
  date: string;
  display: string;
  title: string;
  body: string;
  place?: string;
  kind:
    | "annexation"
    | "incident"
    | "siege"
    | "deportation"
    | "council"
    | "monitoring"
    | "downing";
  source: string;
};

export const conflict: ConflictEvent[] = [
  {
    id: "crimea-seizure",
    date: "2014-02-27",
    display: "27 February 2014",
    title: "Russian troops without insignia seize the Crimean parliament",
    body: "The annexation begins. Sevastopol and Simferopol fall in days. The Court treats this as the start of the conflict for the purposes of its 25 June 2024 Crimea judgment; the present case picks up from May 2014.",
    place: "Simferopol, Crimea",
    kind: "annexation",
    source: "ECHR Crimea judgment, 25 June 2024 (re Crimea, apps. 20958/14 and 38334/18)",
  },
  {
    id: "april-2014-russian-presence",
    date: "2014-04-01",
    display: "April 2014",
    title: "Russian military personnel present in active capacity in Donbas",
    body: "Found by the Court at admissibility. The presence is one of the foundations for spatial jurisdiction over separatist-held territory.",
    place: "Donetsk and Luhansk Oblasts",
    kind: "monitoring",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "may-2014-referendums",
    date: "2014-05-11",
    display: "11 May 2014",
    title: '"Referendums" in Donetsk and Luhansk',
    body: "Self-declared 'DPR' and 'LPR' announce independence. The Court treats this as the start of Russian jurisdiction over separatist-held territory.",
    place: "Donetsk and Luhansk Oblasts",
    kind: "annexation",
    source: "ECHR PR 026 (2023); ECHR PR 173 (2025)",
  },
  {
    id: "summer-2014-children",
    date: "2014-07-01",
    display: "Summer 2014",
    title: "Three groups of children taken across the Russian border",
    body: "Eighty-five children in total, transferred from institutions in eastern Ukraine. The Court found the border crossings involuntary and the basis of an Article 3, 5, and 8 finding.",
    place: "Eastern Ukraine → Russia",
    kind: "deportation",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "mh17",
    date: "2014-07-17",
    display: "17 July 2014",
    title: "MH17 shot down near Snizhne",
    body: "Buk surface-to-air missile fired from a farm field near Pervomaiskyi. 298 dead, 196 of them Dutch. Bodies recovered over eight months; in two cases never recovered.",
    place: "Donetsk Oblast",
    kind: "downing",
    source: "ECHR PR 173 (2025); Hague District Court verdict, 17 November 2022",
  },
  {
    id: "august-2014-russian-troops",
    date: "2014-08-01",
    display: "August 2014",
    title: "Large-scale deployment of Russian troops in Donbas",
    body: "By the latest. Foundational to the Court's effective-control finding.",
    place: "Donetsk and Luhansk Oblasts",
    kind: "monitoring",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "ohchr-baseline-2014-2022",
    date: "2014-04-01",
    display: "April 2014 – January 2022",
    title: "OHCHR records 3,405 conflict-related civilian deaths",
    body: "Over 7,000 wounded over the same period. Cited by the Court as primary evidence.",
    place: "Eastern Ukraine",
    kind: "monitoring",
    source: "OHCHR, cited in ECHR PR 173 (2025)",
  },
  {
    id: "kerch-strait",
    date: "2018-11-25",
    display: "25 November 2018",
    title: "Kerch Strait incident",
    body: "Russia seizes three Ukrainian naval vessels and 24 servicemen. Ukraine institutes ITLOS and PCA proceedings.",
    place: "Kerch Strait",
    kind: "incident",
    source: "ITLOS Order, 25 May 2019",
  },
  {
    id: "invasion",
    date: "2022-02-24",
    display: "24 February 2022",
    title: "Russia launches the full-scale invasion of Ukraine",
    body: "Russian armed forces enter Ukrainian territory at multiple border points. Cities in the north, south, and east are subjected to airstrikes and artillery within hours.",
    place: "Across Ukraine",
    kind: "incident",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "mariupol-maternity",
    date: "2022-03-09",
    display: "9 March 2022",
    title: "Strike on maternity ward no. 3 in Mariupol",
    body: "Cited by the Court as compelling evidence of indiscriminate attack. The hospital was clearly marked.",
    place: "Mariupol, Donetsk Oblast",
    kind: "incident",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "mariupol-theatre",
    date: "2022-03-16",
    display: "16 March 2022",
    title: "Strike on the Mariupol Drama Theatre",
    body: "Civilians sheltering. The word 'children' was visible from the air. Cited by the Court as evidence of direct attack on civilian objects.",
    place: "Mariupol, Donetsk Oblast",
    kind: "incident",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "kramatorsk",
    date: "2022-04-08",
    display: "8 April 2022",
    title: "Strike on Kramatorsk train station",
    body: "Civilians evacuating. The Court names this incident in the merits judgment.",
    place: "Kramatorsk, Donetsk Oblast",
    kind: "incident",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "filtration-2022",
    date: "2022-03-01",
    display: "From spring 2022",
    title: "'Filtration' measures and unjustified displacement",
    body: "Russian armed forces confine large numbers of civilians in occupied areas; subject those leaving to invasive 'filtration' security checks. Many transferred to Russia.",
    place: "Occupied Ukraine",
    kind: "deportation",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "siege-mariupol",
    date: "2022-03-01",
    display: "March – May 2022",
    title: "Siege of Mariupol",
    body: "City besieged. The Court found Russia in 'complete disregard' for civilian lives during the siege; obligations under IHL to protect civilians, ensure water/food/heat/medical assistance, and allow humanitarian corridors were not met.",
    place: "Mariupol, Donetsk Oblast",
    kind: "siege",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "siege-izium",
    date: "2022-04-01",
    display: "Spring 2022",
    title: "Siege of Izium",
    body: "Cited by the Court as among the besieged cities where Russia's conduct breached IHL.",
    place: "Izium, Kharkiv Oblast",
    kind: "siege",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "siege-chernihiv",
    date: "2022-02-25",
    display: "Late February – early April 2022",
    title: "Siege of Chernihiv",
    body: "Cited by the Court as among the besieged cities where Russia's conduct breached IHL.",
    place: "Chernihiv, Chernihiv Oblast",
    kind: "siege",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "ohchr-2022",
    date: "2022-02-24",
    display: "24 February – 17 October 2022",
    title: "OHCHR records 6,306 civilian deaths and 9,602 wounded",
    body: "Period from the start of the full-scale invasion to mid-October. The Court cites these figures and adds that 'the actual numbers of dead and wounded were likely to be considerably higher'.",
    place: "Across Ukraine",
    kind: "monitoring",
    source: "OHCHR, cited in ECHR PR 173 (2025)",
  },
  {
    id: "russia-coe-exit",
    date: "2022-03-16",
    display: "16 March 2022",
    title: "Council of Europe expels Russia",
    body: "Resolution CM/Res(2022)2 by the Committee of Ministers. Russia ceases to be a Contracting Party to the European Convention on Human Rights effective 16 September 2022.",
    place: "Strasbourg",
    kind: "council",
    source: "Council of Europe; ECHR PR 286 (2022)",
  },
  {
    id: "children-7890",
    date: "2022-09-30",
    display: "End of September 2022",
    title: "Ukrainian Government records 7,890 children removed",
    body: "Cited by the Court. Subsequent estimates indicate substantially higher figures.",
    place: "From Ukraine to Russia and Russian-controlled territory",
    kind: "deportation",
    source: "Ukrainian Government, cited in ECHR PR 173 (2025)",
  },
];

export const KIND_LABEL: Record<ConflictEvent["kind"], string> = {
  annexation: "Annexation",
  incident: "Incident",
  siege: "Siege",
  deportation: "Deportation / transfer",
  council: "Council of Europe",
  monitoring: "Monitoring / evidence",
  downing: "Downing",
};

export const KIND_TINT: Record<ConflictEvent["kind"], string> = {
  annexation: "#7a3a8a",
  incident: "#a64a25",
  siege: "#9a3a4a",
  deportation: "#c54b1a",
  council: "#1c2bd6",
  monitoring: "#3e6939",
  downing: "var(--accent)",
};
