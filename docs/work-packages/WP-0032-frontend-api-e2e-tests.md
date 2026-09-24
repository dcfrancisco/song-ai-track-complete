# WP-0032 — Add Frontend, Component, API, and E2E Test Coverage

## Status

Blocked

## Purpose

Prove that learner changes work across frontend, backend, contracts, and representative end-to-end user journeys.

## Background

The repository contains React and Angular UI flows but no frontend tests, controller tests, contract tests, or E2E evidence. Manual browser success is currently the primary proof.

## Scope

- Define frontend component and interaction coverage per track.
- Define API integration and contract coverage.
- Define representative E2E journeys for catalog, chat, RAG, recommendations, and agent workflows.
- Define environment-independent provider stubs for normal regression runs.

## Out of Scope

- Choosing a test framework before the evaluation strategy is approved.
- Replacing unit tests with E2E tests.
- Testing external providers directly in every regression run.

## Dependencies

- ADR-0008 AI Evaluation
- WP-0006 API and Interface Contracts
- WP-0030 Layered Automated Test Baseline

## Acceptance Criteria

- Each track has a defined frontend/API/E2E coverage matrix.
- E2E tests verify observable outcomes and error paths, not only page rendering.
- Contract-breaking changes fail before E2E execution.
- Tests cover loading, error, retry, denial, and degraded states.
- Live-provider tests are isolated from deterministic regression tests.

## Required Evidence

- Test-layer matrix.
- E2E journey catalogue.
- Provider-stub strategy.
- Automated result and artifact format.

## Risks

- Excessive E2E coverage can become slow and brittle.
- UI tests can conceal backend or contract defects.

## Notes

Track-specific framework differences must not reduce required behavioral evidence.
