#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fail() { echo "ERROR: $1" >&2; exit 1; }

command -v node >/dev/null 2>&1 || fail "Node.js 18+ is required"
command -v npm >/dev/null 2>&1 || fail "npm is required"
node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 18 ? 0 : 1)' || fail "Node.js 18+ is required"

if [ -z "${OPENAI_API_KEY:-}" ]; then
  if [ -n "${LLM_API_KEY:-}" ]; then
    echo "Using existing LLM_API_KEY configuration; OPENAI_API_KEY is optional for OpenAI-specific examples." >&2
  else
    fail "LLM_API_KEY or OPENAI_API_KEY is missing"
  fi
fi

[ -d "$ROOT/backend/node_modules" ] || fail "backend dependencies are not installed; run npm install --prefix backend"
[ -d "$ROOT/frontend/node_modules" ] || fail "frontend dependencies are not installed; run npm install --prefix frontend"

node --check "$ROOT/backend/src/index.js"
npm run build --prefix "$ROOT/frontend"
echo "Track A readiness checks passed without printing credential values."
