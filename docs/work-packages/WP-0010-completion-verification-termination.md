# WP-0010 — Add Completion Verification and Termination Tests

## Status

In Progress

## Purpose

Prove that workflows stop for the right reasons and do not report success merely because a model produced a plausible response.

## Background

Current agents return tool-shaped results without verifying external state, business invariants, acknowledgement, or completion. There are no termination or duplicate-loop tests.

## Scope

- Define completion criteria for each workflow.
- Define deterministic verification after tool execution.
- Define success, partial-success, failure, timeout, and escalation outcomes.
- Define termination and infinite-loop tests.

## Out of Scope

- Implementing workflow persistence.
- Defining business authority or approval policy.
- Selecting a tracing technology.

## Dependencies

- ADR-0003 Agent Execution
- ADR-0008 AI Evaluation
- WP-0009 Bounded Multi-Step Agent Workflow
- WP-0016 Partial-Failure Reconciliation

## Acceptance Criteria

- A workflow cannot report completion without deterministic verification evidence.
- Missing or contradictory acknowledgements produce a non-success state.
- Maximum iterations and timeouts produce observable terminal outcomes.
- Tests distinguish completed, partially completed, failed, and escalated work.
- Verification failures do not silently trigger duplicate actions.

## Required Evidence

- Completion criteria catalogue.
- State-transition tests.
- Loop/timeout test results.
- Example of successful action with failed acknowledgement.

## Risks

- Verification may require downstream systems unavailable in local environments.
- Weak verification can create false success and unsafe retries.

## Notes

Natural-language confidence is not completion evidence.
