// main.ts: validates entry.txt (exactly one line, 1-200 chars, not only
// whitespace) and copies it verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(dir, "entry.txt"), "utf8");
const text = raw.endsWith("\n") ? raw.slice(0, -1) : raw;
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry.txt must be exactly one line");
}
if (text.length < 1 || text.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "out");
mkdirSync(outDir, { recursive: true });
// Write the original bytes (raw), keeping the trailing newline, so the
// output entry is byte-identical to the authored entry.txt.
writeFileSync(join(outDir, "entry.txt"), raw, "utf8");
