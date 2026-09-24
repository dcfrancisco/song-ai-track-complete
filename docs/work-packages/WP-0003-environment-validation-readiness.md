# WP-0003 — Add Environment Validation and Readiness Checks

## Status

In Progress

## Purpose

Define reproducible checks that prove a learner's selected track environment is ready before implementation and testing begin.

## Background

The repository has Track A and B devcontainer definitions with configuration drift, no Track C equivalent, and no complete backend/frontend readiness validation. Learners can reach runtime errors caused by missing tools, variables, dependencies, or services rather than application defects.

## Scope

- Provide a deterministic readiness script for each track.
- Validate required tools, dependency directories, and the existing credential contract (`LLM_API_KEY`, with additive `OPENAI_API_KEY` support for OpenAI examples).
- Define backend and frontend build validation.
- Define readiness and health-check expectations for future supporting services.
- Produce actionable human-readable failures without printing credential values.

## Out of Scope

- Choosing `.devcontainer`, Docker/Compose, or a hybrid mechanism beyond the current workspace definitions.
- Adding databases, vector stores, observability services, or provider network calls.

## Dependencies

- ADR-0012 Developer Environment
- WP-0002 Normalize Developer Environment

## Acceptance Criteria

- Readiness requirements are listed separately for Tracks A, B, and C.
- Missing tools, dependencies, variables, and unavailable services produce actionable failures.
- Checks distinguish environment failures from application failures.
- Backend and frontend validation are both represented.
- Readiness succeeds when the existing `LLM_API_KEY` or additive `OPENAI_API_KEY` is present; it does not branch by provider.
- Existing provider selection remains a runtime concern and is not narrowed by readiness.
- Readiness behavior is documented for clean, partial, and already-initialized environments.

## Required Evidence

- Track readiness matrix.
- `scripts/check-readiness.sh` for Tracks A, B, and C.
- Shell syntax validation and generic/OpenAI credential-present/missing results using dummy non-secret values.
- Clean-environment validation plan.
- CI/local parity checklist.

## Risks

- Checks may become platform-specific or duplicate implementation build logic.
- External provider availability must not be required for basic environment validation.

## Notes

The checks do not contact an LLM provider. They currently require local dependencies before build validation; installation and future service health checks remain separate work. The final environment mechanism must follow ADR-0012.
