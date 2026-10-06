#!/usr/bin/env bash
# PreToolUse guard: blocks pushes, history rewrites, work-discarding git ops,
# production deploys and root deletes. Exit 2 blocks and returns stderr to Claude.

input=$(cat)

cmd=$(printf '%s' "$input" | sed -n 's/.*"command"[[:space:]]*:[[:space:]]*"\(.*\)".*/\1/p' | head -1)
[ -z "$cmd" ] && exit 0

# The greedy capture runs into later JSON fields; cut at the next key.
cmd=${cmd%%\",\"*}
# First command line only; heredoc bodies and file content must not trip the guards.
cmd=${cmd%%\\n*}

block() {
  echo "BLOCKED by .claude/hooks/validate-bash.sh: $1" >&2
  echo "Ask the user; they can run it themselves with the ! prefix." >&2
  exit 2
}

case "$cmd" in
  *"git push --force"*|*"git push -f"*|*"push --force-with-lease"*)
    block "force push." ;;
  *"git push"*)
    block "push. Repo rule: the user pushes and opens PRs." ;;
  *"git reset --hard"*|*"git clean -fd"*|*"git checkout -- "*|*"git restore ."*)
    block "destructive git operation that discards uncommitted work." ;;
  *"git rebase"*|*"git filter-branch"*|*"git filter-repo"*)
    block "history rewrite." ;;
  *"gh pr merge"*|*"gh repo delete"*|*"gh release create"*)
    block "remote GitHub mutation." ;;
  *"vercel --prod"*|*"vercel deploy --prod"*|*"vercel promote"*|*"vercel rm"*)
    block "production deploy." ;;
  *"rm -rf /"*|*"rm -rf ~"*|*"rm -fr /"*)
    block "recursive delete of a root or home path." ;;
  *"rm -rf app"*|*"rm -rf public"*|*"rm -rf ./app"*|*"rm -rf ./public"*)
    block "deletes the source or asset tree." ;;
esac

exit 0
