# WP-0029 — Add Durable Audit Events and Review Evidence

## Status

In Progress

## Purpose

Provide attributable, durable evidence of identity, policy, approval, model decision, retrieval, tool execution, and outcome events.

## Background

The current code logs to stdout/stderr but does not retain a reviewable record of consequential decisions or actions. The model-directed order flow is not attributable or auditable.

## Scope

- Define audit event types, actors, resources, outcomes, timestamps, and correlation links.
- Define immutable/append-oriented behavior and retention.
- Define audit coverage for authorization denials, approvals, tool calls, failures, and recovery.
- Define redaction and access rules for audit records.

## Out of Scope

- Selecting a logging or audit storage product.
- Replacing operational telemetry.
- Auditing every low-risk UI interaction.

## Dependencies

- ADR-0004 Governance and Authority
- ADR-0011 Observability and Audit
- ADR-0001 Persistent State
- WP-0012 Authentication and Identity Propagation
- WP-0014 Human Approval Workflow

## Acceptance Criteria

- Every consequential action is attributable to requester, agent, tool, and approver where applicable.
- Audit events survive process restart and are protected from ordinary mutation.
- Audit records link request, policy decision, tool execution, and final outcome.
- Sensitive fields are redacted or access-controlled according to policy.
- Reviewers can reconstruct why an action was allowed, denied, or escalated.

## Required Evidence

- Audit event schema.
- Event lifecycle and retention policy.
- Reconstructed workflow example.
- Audit access and redaction test plan.

## Risks

- Audit records may contain sensitive prompts or personal data.
- An incomplete audit trail can create false accountability.

## Notes

Audit evidence must be durable and distinct from transient debug logs.
