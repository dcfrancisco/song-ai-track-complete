# WP-0014 — Add Human Approval Workflow Exercise

## Status

In Progress

## Purpose

Teach risk-based human approval for consequential AI actions while preserving resumability and accountability.

## Background

The current order examples simulate subscription changes and returns without approval, ownership, or an approval state. The model is effectively allowed to request consequential actions without a human gate.

## Scope

- Classify actions by risk and approval requirement.
- Define approval-request, pending, approved, rejected, expired, and cancelled states.
- Define approver identity, scope, timestamp, and audit data.
- Define safe resume behavior after approval.

## Out of Scope

- Selecting a production approval platform.
- Implementing all business actions.
- Allowing the model to approve its own request.

## Dependencies

- ADR-0005 Human Approval
- ADR-0003 Agent Execution
- ADR-0004 Governance and Authority
- WP-0005 Conversation and Workflow Recovery

## Acceptance Criteria

- High-risk actions pause before execution.
- Approval is bound to the specific action, resource, parameters, and identity.
- Rejection, expiry, cancellation, and duplicate approval have defined outcomes.
- Approval cannot be bypassed by prompt changes or workflow retries.
- Approved actions remain attributable to requester and approver.

## Required Evidence

- Risk/action approval matrix.
- Approval state diagram.
- Approval and rejection test scenarios.
- Audit-record examples.

## Risks

- Approval fatigue may lead to unsafe blanket approvals.
- Approval UX can become disconnected from the exact action being authorized.

## Notes

Approval must occur before the consequential side effect, not after a model-generated success message.
