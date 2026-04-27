import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { register } from "node:module";

register("ts-node/esm", import.meta.url);

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCE = resolve(ROOT, "../CaseMap/src/data");

const { landscape, categoryLabels, categoryDeck } = await import(
  resolve(SOURCE, "landscape.ts")
);
const { forums } = await import(resolve(SOURCE, "forums.ts"));

const out = resolve(ROOT, "src/data/snapshot.json");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(
  out,
  JSON.stringify(
    { landscape, categoryLabels, categoryDeck, forums },
    null,
    2,
  ),
);

console.log(
  `snapshot: ${landscape.length} cases, ${forums.length} forums → ${out}`,
);
