import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const relaxation = "Beyond the dark pine ridge, starlight older than the mountains rests on a still lake. Each silver ripple widens, slows, and fades, while the whole patient sky drifts gently in the water.";

const codePointCount = Array.from(relaxation).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new RangeError(
    `Relaxation text must contain 1..280 Unicode code points; received ${codePointCount}.`,
  );
}
if (relaxation.trim().length === 0) {
  throw new Error("Relaxation text must contain a non-whitespace character.");
}
if (/(?:\r|\n)$/u.test(relaxation)) {
  throw new Error("Relaxation text must not end with a newline.");
}

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), relaxation, "utf8");
