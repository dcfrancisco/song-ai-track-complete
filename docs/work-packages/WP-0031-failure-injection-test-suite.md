# WP-0031 — Add Failure-Injection Test Suite

## Status

Blocked

## Purpose

Make failure behavior a deliberate curriculum competency by injecting controlled faults into workflows, providers, persistence, retrieval, and tools.

## Background

The current tests do not cover provider outages, malformed model responses, vector failures, downstream 429/5xx responses, duplicate actions, process restarts, or partial acknowledgement.

## Scope

- Define injectable failure points and deterministic fault controls.
- Cover model, embedding, vector store, persistence, network, tool, and downstream failures.
- Define expected state, response, retry, recovery, and audit outcomes.
- Keep failure scenarios safe and repeatable.

## Out of Scope

- Chaos testing in production.
- Implementing all resilience mechanisms.
- Destructive testing against real external services.

## Dependencies

- ADR-0003 Agent Execution
- ADR-0006 Idempotency and Transactions
- ADR-0010 Model Resilience
- WP-0025 Provider Timeout, Retry, and Backoff
- WP-0016 Partial-Failure Reconciliation

## Acceptance Criteria

- Fault injection can target each declared failure boundary.
- Tests prove retryable versus terminal behavior.
- Consequential actions do not duplicate under injected retries or restarts.
- Recovery and escalation outcomes are observable.
- Faults can be removed without changing production behavior.

## Required Evidence

- Failure-injection matrix.
- Fault-control design.
- Automated failure results.
- Recovery and post-failure state evidence.

## Risks

- Non-deterministic fault timing can create flaky tests.
- Fault controls must never be accidentally enabled in normal operation.

## Notes

Failure injection should be introduced alongside the feature, not postponed until the capstone.
