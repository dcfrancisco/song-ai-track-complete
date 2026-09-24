# WP-0026 — Add Provider Fallback, Routing, and Degraded-Mode Lab

## Status

Blocked

## Purpose

Teach provider selection and business continuity when the configured AI provider is unavailable, unsuitable, expensive, slow, or restricted by policy.

## Background

Tracks B/C expose multiple provider configurations but do not route between providers, negotiate capabilities, or provide a defined degraded mode. AI is effectively a single point of failure for major features.

## Scope

- Define provider capability metadata for chat, structured output, embeddings, context, and tool calling.
- Define routing priorities for privacy, cost, latency, quality, and availability.
- Define fallback eligibility and non-fallback failures.
- Define deterministic degraded behavior for core business functions.
- Define routing and fallback observability.

## Out of Scope

- Selecting specific providers or production credentials.
- Implementing a model gateway.
- Making every AI feature available offline.

## Dependencies

- ADR-0010 Model Provider Resilience
- ADR-0008 AI Evaluation
- WP-0025 Provider Timeout, Retry, and Backoff

## Acceptance Criteria

- Routing decisions are policy-driven and observable.
- Providers are selected only when their required capabilities are available.
- Privacy restrictions override cost or latency preferences where required.
- Fallback does not silently reduce authorization or safety guarantees.
- Core deterministic functions remain usable during AI outage where applicable.
- Provider exhaustion returns an explicit degraded outcome.

## Required Evidence

- Capability/routing matrix.
- Fallback decision table.
- Degraded-mode behavior specification.
- Outage and provider-switch test scenarios.

## Risks

- Fallback models may change quality or safety characteristics.
- Cross-provider prompt and schema differences can break contracts.

## Notes

Provider abstraction alone is not resilience; behavior under provider failure must be proven.
