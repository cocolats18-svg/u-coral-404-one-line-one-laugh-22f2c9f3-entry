// One Line, One Laugh — make.fun entry
// Writes a single original one-liner (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My password manager wants couples therapy — apparently I've been seeing other browsers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
