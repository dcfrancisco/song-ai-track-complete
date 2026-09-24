# WP-0015 — Add Idempotency and Duplicate-Action Protection

## Status

In Progress

## Purpose

Prevent retries, duplicate submissions, and lost acknowledgements from producing repeated consequential business actions.

## Background

Current tool actions are in-memory mock functions with no idempotency key, execution record, transaction boundary, or duplicate detection.

## Scope

- Define idempotency-key requirements and lifecycle.
- Define request fingerprinting and conflict behavior.
- Define replay responses for completed, in-progress, failed, and unknown requests.
- Define retention and cleanup rules for idempotency records.

## Out of Scope

- Choosing the persistence mechanism.
- Implementing downstream payment/order systems.
- Designing all compensation flows.

## Dependencies

- ADR-0006 Idempotency, Transaction Safety, and Compensation
- ADR-0001 Persistent State
- WP-0004 Durable Persistence and Migrations

## Acceptance Criteria

- Consequential operations require an idempotency key or equivalent deterministic deduplication input.
- Same-key same-request replay does not repeat the side effect.
- Same-key different-request conflicts are rejected.
- Concurrent duplicate requests have one authoritative outcome.
- Tests cover retries, client resubmission, lost acknowledgements, and process restart.

## Required Evidence

- Idempotency contract.
- State/lifecycle diagram.
- Concurrent duplicate test plan.
- Evidence of at-most-once business effect where required.

## Risks

- Short retention can allow late duplicates.
- Incorrect request fingerprinting can conflate distinct actions.

## Notes

Idempotency is part of the tool contract, not an optional controller detail.
