# ADR-0003 — Agent Execution, Termination, and Completion Verification

## Status

Proposed

## Context

The current order flow is one-shot: one model response may select one local mock action, after which the service returns a result. There is no bounded observe/reason/act cycle, durable step state, explicit termination policy, completion verification, or resumable failure state.

The curriculum needs to teach bounded agentic execution without implying unlimited autonomous looping or allowing model output to bypass deterministic workflow control.

## Decision Drivers

- Bounded execution and predictable cost.
- Explicit state transitions and termination.
- Retry safety and recovery.
- Deterministic completion verification.
- Escalation and human handoff.
- Testability and observability.

## Options Considered

### Option A — Application-managed state machine or workflow

Deterministic code owns transitions, limits, retries, and completion; the model supplies bounded decisions. This is predictable and testable but requires explicit workflow design.

### Option B — Agent framework with deterministic guardrails

Provides framework support for loops and tools while retaining application limits and policy. It can accelerate implementation but introduces framework coupling and requires careful inspection of hidden behavior.

### Option C — Unbounded model-driven loop

Appears flexible but creates uncontrolled cost, termination, authorization, and recovery risk. It is not appropriate for the curriculum target.

## Proposed Decision

Use a bounded execution model with explicit workflow state, maximum steps, time and retry budgets, termination conditions, escalation states, and deterministic completion verification. Framework choice remains open. Consequential effects must be controlled by application/tool boundaries.

## Consequences

### Positive

- Predictable execution and clearer QA.
- Supports restart, resume, audit, and partial-failure handling.
- Makes agent behavior explainable through state and tool traces.

### Negative

- Requires workflow state modeling and more implementation effort.
- Some natural-language tasks will need explicit human or deterministic completion criteria.

### Risks

- A loop can still be unsafe if authority and idempotency are missing.
- Weak completion checks can report false success.

## Security and Governance Implications

- Every agent needs identity, responsibility, authority, allowed/forbidden tools, escalation, audit requirements, and completion criteria.
- A model cannot approve its own escalation or expand its authority.
- Policy and authorization remain deterministic and external to the prompt.

## Operational Implications

- Workflows need timeout, retry, cancellation, terminal, and resumable states.
- Each step needs correlation and outcome evidence.
- Process restart and unknown downstream outcomes must have defined recovery behavior.

## Curriculum Implications

Learners should implement and prove a bounded multi-step workflow, then break it with timeouts, malformed decisions, failures, and duplicate requests. The curriculum should label one-shot prompt dispatch as foundational, not enterprise agentic execution.

## Affected Work Packages

- WP-0005, WP-0009, WP-0010, WP-0014, WP-0016, WP-0031, WP-0039

## Out of Scope

- Selecting an agent framework.
- Defining identity or approval policy in detail.
- Making all application functions autonomous.

## Open Questions

- Which workflow/state-machine representation is most portable for the tracks?
- Which actions are allowed to retry automatically?
- What completion evidence is deterministic for each capstone workflow?
