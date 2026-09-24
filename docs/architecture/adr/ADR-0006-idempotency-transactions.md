# ADR-0006 — Idempotency, Transaction Safety, and Compensation

## Status

Proposed

## Context

The current tools return mock results and have no idempotency keys, durable execution records, transaction boundaries, or reconciliation. Retries, duplicate submissions, lost acknowledgements, and process restarts could repeat returns, refunds, subscription changes, inventory changes, or other consequential effects in a real implementation.

## Decision Drivers

- At-most-once business effects where required.
- Safe retry and duplicate detection.
- Clear local transaction boundaries.
- Reconciliation of unknown and partial outcomes.
- Explicit, bounded compensation.
- Testability and provider independence.

## Options Considered

### Option A — Idempotency keys with transactional persistence

Records request identity and outcome durably and protects local writes with transactions. It is clear and testable but does not make external side effects atomic.

### Option B — Durable workflow deduplication with compensation

Uses workflow state to reconcile distributed effects and run explicit compensating actions. It handles broader workflows but is more complex and cannot guarantee universal rollback.

### Option C — Blind retry or client-only deduplication

Simple but unsafe because clients can retry, acknowledgements can be lost, and service restarts can lose knowledge of prior effects.

## Proposed Decision

Require idempotency for consequential tools and define transaction boundaries, unknown-outcome handling, reconciliation, and explicit compensation for distributed effects. The precise combination of persistence and workflow mechanisms remains open for human review.

## Consequences

### Positive

- Prevents duplicate business effects.
- Makes failure and recovery scenarios realistic and assessable.

### Negative

- Requires durable records, conflict handling, retention, and operational reconciliation.
- Compensation is additional business logic and may itself fail.

### Risks

- Incorrect request fingerprints can conflate distinct actions.
- A “successful” external action with local failure can remain unknown.
- Compensation may not restore the original state exactly.

## Security and Governance Implications

- Idempotency records must be bound to authenticated identity, resource, action, and parameters.
- Replays must not bypass authorization or approval.
- Duplicate and conflict attempts must be attributable and auditable.

## Operational Implications

- Define retention, cleanup, reconciliation queues or review states, and operator visibility.
- Retries must distinguish safe reads from consequential writes.
- Unknown external outcomes must not trigger blind repetition.

## Curriculum Implications

Learners should prove duplicate protection, concurrent requests, lost acknowledgements, process restart, partial success, reconciliation, and compensation limitations.

## Affected Work Packages

- WP-0004, WP-0005, WP-0008, WP-0015, WP-0016, WP-0025, WP-0031, WP-0039

## Out of Scope

- Selecting a queue, database, or transaction product.
- Claiming distributed atomicity across arbitrary external systems.
- Defining every domain-specific compensation action.

## Open Questions

- Which actions require at-most-once effect versus safe replay?
- Which idempotency records are authoritative and how long are they retained?
- Which distributed outcomes require compensation versus manual reconciliation?
