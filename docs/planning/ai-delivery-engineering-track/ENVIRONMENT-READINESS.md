# Phase 1 Environment Readiness

## Supported Track Paths

| Track | Backend | Frontend | Workspace | Application ports |
|---|---|---|---|---|
| A | Node.js 18+ / Express | React / TypeScript / Vite | Track A `.devcontainer` | API 8080, UI 5173 |
| B | Java 17+ / Spring Boot / Maven | Angular / TypeScript | Track B `.devcontainer` | API 8080, UI 4200 |
| C | Java 17+ / Spring Boot / Maven | React / TypeScript / Vite | Track C `.devcontainer` | API 8080, UI 5173 |

The workspace definitions use a hybrid direction: each track has a stack-aligned developer workspace, while dependent infrastructure is deferred until a later WP requires it. No Docker Compose infrastructure is introduced in Phase 1.

Existing Labs 1–10 retain their original provider-selection behavior and generic `LLM_API_KEY` configuration. New advanced OpenAI examples may use `OPENAI_API_KEY`, but it does not replace the existing lab configuration. Future provider routing/fallback changes remain deferred to ADR-0010 and WP-0026.

## Readiness Commands

From the selected track directory:

```bash
bash scripts/check-readiness.sh
```

The command checks required tools, credential presence without printing the value, frontend dependency readiness, backend build readiness, and frontend build readiness. It does not contact an LLM provider.

## Credential Standard

Readiness accepts the existing generic `LLM_API_KEY` and the additive OpenAI-specific `OPENAI_API_KEY`. It does not impose provider-specific credential requirements or remove provider switching. Neither value is printed.

Secrets must not be committed, copied into `.env`, passed to frontend code, embedded in images, or written to logs.

## Failure Behavior

Readiness exits non-zero with an actionable message when:

- Required tools are missing.
- Both `LLM_API_KEY` and `OPENAI_API_KEY` are missing.
- Frontend dependencies are not installed.
- Backend build fails.
- Frontend build fails.

The checks do not silently continue after a required failure.
