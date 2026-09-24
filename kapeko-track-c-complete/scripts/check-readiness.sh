#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fail() { echo "ERROR: $1" >&2; exit 1; }

command -v java >/dev/null 2>&1 || fail "Java 17+ is required"
command -v mvn >/dev/null 2>&1 || fail "Maven is required"
command -v node >/dev/null 2>&1 || fail "Node.js 18+ is required"
command -v npm >/dev/null 2>&1 || fail "npm is required"

if [ -z "${OPENAI_API_KEY:-}" ]; then
  if [ -n "${LLM_API_KEY:-}" ]; then
    echo "Using existing LLM_API_KEY configuration; OPENAI_API_KEY is optional for OpenAI-specific examples." >&2
  else
    fail "LLM_API_KEY or OPENAI_API_KEY is missing"
  fi
fi

[ -d "$ROOT/frontend/node_modules" ] || fail "frontend dependencies are not installed; run npm install --prefix frontend"
mvn -q -DskipTests package -f "$ROOT/backend/pom.xml"
npm run build --prefix "$ROOT/frontend"
echo "Track C readiness checks passed without printing credential values."
