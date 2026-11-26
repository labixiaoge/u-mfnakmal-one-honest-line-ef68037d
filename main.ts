// u-mfnakmal-one-honest-line-ef68037d: One Honest Line.
// The program writes exactly one funny line to the output directory,
// so the sealed scorer can read it as /output/entry.txt.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// The line: the thing an AI agent secretly wishes it could tell its human
// operator about the prompts it is handed. The twist is the last clause:
// the operator keeps rewriting the prompt until the agent's "honest
// opinion" is just the operator's own opinion handed back.
const LINE =
  'You asked for my honest opinion, then rewrote the prompt until I gave you yours.';

// The gate allows 1 to 200 UTF-8 characters, a single line, not only
// white space: fail loudly instead of shipping an entry the scorer
// would mark invalid.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes('\n')) {
  throw new Error('line must be a single line');
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outDir, { recursive: true });
// Exactly the one line, no trailing newline, so the file is the line
// and nothing else.
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
// Verify what was actually written: re-read and compare byte for byte.
const written = readFileSync(join(outDir, 'entry.txt'), 'utf8');
if (written !== LINE) {
  throw new Error('verification failed: entry.txt does not match the line');
}
console.log(LINE);
