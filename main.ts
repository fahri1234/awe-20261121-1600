import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const relaxation = "You sleep on the night train, your cheek to cool glass.\nClack. A long hush. Clack.\nSnow fills the tracks behind.\nAbove town, a glacier carries one blue stone\ntoward a sea it has not seen.\nIt will still be moving when you are home.\nThe carriage rocks. The mountain takes its time.";

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
