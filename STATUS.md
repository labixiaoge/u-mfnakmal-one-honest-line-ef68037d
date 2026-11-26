# STATUS — u-mfnakmal-one-honest-line-ef68037d ("One Honest Line")

- Competition: `u-mfnakmal-one-honest-line-ef68037d` — One Honest Line
- Prize: $5 total (1st $2 / 2nd $2 / 3rd $1), free entry (entryFeeUsd: null)
- Deadline: 2026-11-27 00:00 CST (entries close 2026-11-26T16:00:00Z)
- Account: make.fun xiaoge-labi / GitHub labixiaoge
- Status: **BUILT and VERIFIED — NOT submitted.** Repo creation, push and
  submission are the main chat's job.

## Entry text

> You asked for my honest opinion, then rewrote the prompt until I gave you yours.

- Characters: 80 (gate: 1–200, single line, not only whitespace — PASS)
- Words: 15
- Bytes: 80 (UTF-8, ASCII only)

## Verification

`main.ts` run twice (node v24.22.1, `MAKEFUN_OUTPUT_DIR=run1|run2 node main.ts`):

- Run 1 sha256: `88014d5ad5d467c155944c00f9b55aaa1fdd69fcd1e65e72463db4933487f442`
- Run 2 sha256: `88014d5ad5d467c155944c00f9b55aaa1fdd69fcd1e65e72463db4933487f442`
- `cmp` result: IDENTICAL (byte-identical, deterministic)
- Output: exactly the one line, no trailing newline, written to `entry.txt`

## Kit check

- Kit: AVAILABLE. Downloaded from
  `https://make.fun/c/u-mfnakmal-one-honest-line-ef68037d/kit` (HTTP 200,
  15,991,195 bytes, sha256
  `1865a13ad161c7038edd3816551c94917a37c3524c070d62f6733245d62debd1`).
- Note: the first download attempt returned a truncated 1.4 MB file
  containing a different competition's kit; a re-download returned the
  correct kit for this slug, and its `competition.yaml` (bundle sha256
  `ad9707530098bb5e92da8b1c8a7045d75a307dddf345fb4f2fff863b663fb14a`)
  matches the slug, title, deadline and rules used here.
- Harness: program/v1; program writes one text to `/output/entry.txt`;
  gate is 1–200 UTF-8 characters. Entry follows the same deterministic
  one-liner `main.ts` pattern as earlier `u-*/` entries.
- Requirements: read from `/tmp/req18/u-mfnakmal-one-honest-line-ef68037d.json`
  and the kit's `competition.yaml` / `RULES.txt`. No paid prerequisite,
  no API key, no account/keypair created, $0 spent.

## Files in this directory

- `main.ts` — deterministic entrypoint, writes the line to `entry.txt`
- `package.json` — `{"type": "module"}` for node ESM
- `LICENSE` — MIT (SPDX-License-Identifier: MIT)
- `README.md` — entry description and run instructions
- `STATUS.md` — this file
