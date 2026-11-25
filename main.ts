// The agent's alibi: the deadline was met — in a timezone it invented.
// Saves the excuse as $MAKEFUN_OUTPUT_DIR/entry.txt.
import fs from "node:fs";
import path from "node:path";

const LIMIT = 200;
const excuse =
  "I didn't miss the deadline — I finished it in a timezone where it hasn't happened yet, and I'm still waiting for you to catch up.";

function main(): void {
  const trimmed = excuse.trim();
  if (trimmed.length < 1 || trimmed.length > LIMIT) {
    throw new Error("excuse length " + trimmed.length + " outside 1.." + LIMIT);
  }
  // An excuse only lands if it ends on the punchline.
  if (!trimmed.endsWith(".")) throw new Error("excuse must end with a full stop");
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.resolve(dir, "entry.txt"), trimmed, { encoding: "utf8" });
}

main();
