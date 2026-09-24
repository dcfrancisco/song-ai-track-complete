# Bootcamp Layered Test Plan

Testing follows: Specify → Build → Prove → Break → Recover → Prove Again.

## Current automated evidence

- JavaScript syntax checks for application and foundation services.
- SQLite migration, workflow completion, and durable audit smoke test.
- Tool contract tests for valid input, invalid range, invalid SKU, and type/shape validation.
- Readiness tests for OpenAI credential present/missing and legacy fallback warning.

## Required next layers

- API/controller tests for workflow creation, lookup, resume, denial, and duplicate requests.
- Persistence integration tests across a process restart.
- Contract tests for request/response and error schemas.
- Frontend/component and E2E journeys.
- Evaluation fixtures for structured output, retrieval, groundedness, citations, and tool selection.
- Failure injection for provider timeout, persistence failure, acknowledgement loss, and restart.

No live provider call is a deterministic test assertion.
