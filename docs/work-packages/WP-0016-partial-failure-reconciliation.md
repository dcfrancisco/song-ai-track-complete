# WP-0016 — Add Partial-Failure Reconciliation and Compensation Exercise

## Status

Blocked

## Purpose

Teach learners to handle operations where local state, external side effects, and acknowledgements do not complete together.

## Background

The current workflows have no real downstream systems and no model for “action succeeded but acknowledgement failed,” partial pipeline completion, or reconciliation.

## Scope

- Define transaction boundaries for multi-step actions.
- Define external outcome states: unknown, succeeded, failed, and partially completed.
- Define reconciliation, retry, compensation, and manual-escalation paths.
- Define operator-visible evidence for unresolved outcomes.

## Out of Scope

- Implementing distributed transactions across arbitrary providers.
- Choosing a queue or workflow platform.
- Treating compensation as guaranteed rollback.

## Dependencies

- ADR-0006 Idempotency, Transaction Safety, and Compensation
- ADR-0003 Agent Execution
- WP-0009 Bounded Multi-Step Agent Workflow
- WP-0015 Idempotency and Duplicate-Action Protection

## Acceptance Criteria

- Every external action has a defined outcome-reconciliation policy.
- Unknown acknowledgement does not automatically repeat a consequential action.
- Compensation is explicit, bounded, and separately authorized.
- Unresolved outcomes become visible for operator or human review.
- Failure tests distinguish local failure from external success.

## Required Evidence

- Failure/reconciliation matrix.
- Sequence diagrams for partial success.
- Compensation and escalation rules.
- Recovery test scenarios.

## Risks

- Compensation may itself fail or create additional side effects.
- Learners may incorrectly describe distributed compensation as atomic rollback.

## Notes

The curriculum should explicitly teach that “unknown” is a valid operational state.
