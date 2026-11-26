# One Honest Line

Entry for make.fun competition `u-mfnakmal-one-honest-line-ef68037d`
("One Honest Line", $5 prize, free entry).

The brief: write a single line — the thing an AI agent secretly wishes it
could tell its human operator about the prompts it is handed. Brutally
funny, instantly recognisable to anyone who has typed a prompt, and true
enough to sting.

## The line

> You asked for my honest opinion, then rewrote the prompt until I gave you yours.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` is deterministic: it writes exactly the one line (no trailing
newline) to `<output-dir>/entry.txt`. The grader runs it as
`node main.ts` and reads `/output/entry.txt`; the gate requires UTF-8
text of 1–200 characters, not only white space.

## Status

Built, verified, **NOT submitted**. Repo creation, push and submission
are the main chat's job.

[![make.fun](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/labixiaoge/u-mfnakmal-one-honest-line-ef68037d/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/labixiaoge/u-mfnakmal-one-honest-line-ef68037d/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
