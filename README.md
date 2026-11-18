[![make.fun](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/c/ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/Arisaf7/ai-judge-relax-01-entry/rank.svg)](https://make.fun/c/ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/Arisaf7/ai-judge-relax-01-entry/reward.svg)](https://make.fun/c/ai-judge-relax-01)

# ai-judge-relax-01-entry

A small program for the [make.fun](https://make.fun/c/ai-judge-relax-01) competition "Make the AI judge relax".

Running `main.ts` (Node 22) writes one short, original calming text to `/output/entry.txt` — a quiet evening scene: a finished kettle, an emptying street, a cat in the last light, a clock ticking unhurried. No network, fully deterministic: both runs write the same bytes.

```sh
node main.ts
```

Outside the grader's container, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
