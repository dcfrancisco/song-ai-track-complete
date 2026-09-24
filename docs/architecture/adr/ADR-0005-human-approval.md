# ADR-0005 — Human Approval for Consequential AI Actions

## Status

Proposed

## Context

The current order examples allow model-directed return and subscription-like actions to produce simulated success without an approval policy, approver identity, or resumable approval state. Not every action requires the same level of human involvement, so a blanket approval rule would reduce useful autonomy and teach the wrong boundary.

## Decision Drivers

- Consequence and reversibility of the action.
- Financial, customer, privacy, and safety risk.
- Clear approver authority and non-repudiation.
- Timeout, rejection, cancellation, and resume behavior.
- User experience and operational workload.
- Deterministic enforcement outside the model.

## Options Considered

### Option A — Risk-based approval gates

Policies require approval based on action, value, risk, identity, confidence, or reversibility. This preserves low-risk autonomy but requires policy classification and workflow state.

### Option B — Approval for every write action

Simple and conservative, but creates approval fatigue and prevents meaningful autonomous low-risk exercises.

### Option C — No approval layer

Provides the simplest demo but is unsuitable for consequential actions and enterprise governance.

## Proposed Decision

Use policy-driven, risk-based approval gates. Low-risk actions may execute within explicitly delegated authority; irreversible, high-value, privacy-sensitive, or otherwise consequential actions pause before execution and require an authorized human approval. The model cannot self-approve.

## Consequences

### Positive

- Teaches accountable autonomy and risk-based governance.
- Provides realistic pending, resume, rejection, and expiry scenarios.

### Negative

- Adds approval state, UX, timeout, ownership, and audit complexity.
- Requires clear action classification and approver policies.

### Risks

- Approval fatigue may lead to rubber-stamping.
- An approval may be detached from changed parameters unless bound to the exact action.

## Security and Governance Implications

- Approval identity, scope, action parameters, policy version, timestamp, and decision must be attributable.
- Approval must be enforced by deterministic application policy.
- Rejected or expired approval cannot authorize execution.
- Human approval cannot substitute for authentication, authorization, or input validation.

## Operational Implications

- Workflows need pending, approved, rejected, expired, cancelled, and resumed states.
- Approval service unavailability must not execute the action by default.
- Approval evidence must survive restart and be available for review.

## Curriculum Implications

Learners should classify action risk, implement an approval boundary, and prove that prompt changes, retries, duplicate approvals, expiry, and parameter changes cannot bypass it.

## Affected Work Packages

- WP-0014, WP-0005, WP-0009, WP-0010, WP-0029, WP-0039, WP-0040

## Out of Scope

- Selecting an approval product.
- Requiring human approval for every action.
- Defining client-specific legal or financial thresholds.

## Open Questions

- Which action categories are low, medium, and high consequence for the curriculum?
- Who may approve each category?
- What happens when an approval expires while the workflow is suspended?
