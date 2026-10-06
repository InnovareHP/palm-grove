---
description: Review the current working diff against Palm Grove conventions
---

1. Run `git status` and `git diff` (staged and unstaged). If clean, diff the branch against `main`.
2. Read `.claude/rules/*.md`.
3. Apply the checklist in `.claude/agents/code-reviewer.md` yourself. Do not spawn a subagent for a small diff.
4. If the diff touches markup, CSS, `Header`/`MobileDrawer`/`OpeningPopup`, or page structure, also apply `.claude/agents/a11y-auditor.md`.
5. Run `pnpm lint`. Run `pnpm build` if any `.ts`/`.tsx` changed.
6. Verify each finding against the file. Drop anything you cannot reproduce.

Output findings most severe first, `file:line — problem — fix`, then whether the change is safe to commit. Do not fix unless asked.

$ARGUMENTS
