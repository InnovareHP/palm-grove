---
description: Diagnose and fix a bug on the Palm Grove site
---

Fix the bug in $ARGUMENTS (issue number, error text, page/route, or repro steps).

1. Reproduce first by reading the failing path. Fetch issues with `gh issue view` if a number was given.
2. State the root cause in one or two sentences before editing. If unclear, ask.
3. Smallest fix that holds, at the cause. Follow `.claude/rules/`. For any Next.js API, check `node_modules/next/dist/docs/` first.
4. There is no test suite. Verify with `pnpm lint` and `pnpm build` and report the actual output; for visual bugs, name the route and viewport to check.
5. Do not commit or push unless asked.
