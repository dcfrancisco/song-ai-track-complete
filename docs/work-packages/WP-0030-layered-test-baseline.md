# WP-0030 — Establish Layered Automated Test Baseline for All Tracks

## Status

Blocked

## Purpose

Define the minimum layered test standard that proves deterministic application behavior and evaluates probabilistic AI behavior across all tracks.

## Background

The repository has only a live LLM smoke test and lacks meaningful coverage for business logic, APIs, frontend behavior, AI outputs, security, resilience, retrieval quality, and recovery.

## Scope

- Define business-logic, controller/API, contract, persistence, frontend, and E2E layers.
- Define structured-output, tool-selection, RAG, groundedness, authorization, failure, retry, idempotency, and regression coverage.
- Separate deterministic hard-failure assertions from probabilistic evaluation.
- Define fixtures, mocks, datasets, provider isolation, and evidence formats.

## Out of Scope

- Implementing tests before the planning baseline is approved.
- Treating raw coverage percentage as sufficient evidence.
- Requiring live provider access for the normal regression suite.

## Dependencies

- ADR-0008 AI Evaluation and Regression
- Feature-specific ADRs as applicable: ADR-0001, ADR-0002, ADR-0003, ADR-0004, ADR-0006, ADR-0007, ADR-0009, ADR-0010, ADR-0011

## Acceptance Criteria

- Every consequential feature has happy, negative, failure, recovery, authorization, and regression coverage where applicable.
- AI tests distinguish deterministic contract/security failures from probabilistic quality evaluation.
- Normal regression tests run without live provider access.
- Live-provider tests are isolated, labeled, and reproducible.
- QA evidence follows Specify → Build → Prove → Break → Recover → Prove Again.

## Required Evidence

- Test strategy and layer matrix.
- `TEST-PLAN.md` and `FAILURE-MATRIX.md` templates.
- Evaluation dataset format.
- Automated result and E2E evidence formats.
- Traceability from capability/risk to tests.

## Risks

- Coverage metrics can create false confidence.
- Probabilistic evaluation can be unstable without pinned versions and thresholds.
- Too much E2E coverage can make feedback slow and brittle.

## Notes

Testing and QA design begin with feature specification; they are not a final phase.
