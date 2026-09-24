# ADR-0004 — Agent Identity, Authority, and Governance

## Status

Proposed

## Context

The current repository has no authenticated user or agent identity, delegated authority, role model, tenant boundary, tool permission policy, approval enforcement, or durable accountability. The order flow accepts a caller-supplied customer ID and relies on prompt instructions to constrain model behavior.

Enterprise agentic curriculum work requires constrained autonomy. A prompt can express intent but cannot enforce authorization, least privilege, accountability, or forbidden actions.

## Decision Drivers

- Identity and accountability.
- Least privilege and deterministic policy enforcement.
- User, service, and agent authority boundaries.
- Escalation, approval, reversibility, and auditability.
- Data, model, prompt, knowledge, and change governance.
- Curriculum clarity and testability.

## Options Considered

### Option A — Central policy/authorization layer

All consequential tool actions pass through a shared policy decision point. This provides consistent enforcement and visibility but introduces a central dependency and policy-management complexity.

### Option B — Distributed per-tool enforcement with shared identity claims

Each tool enforces policy locally using propagated identity and authority claims. It can fit service ownership but risks policy drift and inconsistent denial behavior.

### Option C — Prompt-based policy only

Simple and useful for foundational demonstrations, but it cannot enforce permissions or prevent a model from requesting unauthorized actions. It is not acceptable for higher-level work.

## Proposed Decision

Define explicit identity, responsibility, authority, allowed and forbidden tools, data scope, escalation, approval, audit, and completion requirements for every agent and consequential tool. Enforce authorization deterministically outside the model. The final choice between central and distributed enforcement remains open for human review.

## Consequences

### Positive

- Makes governance architectural and testable.
- Enables least privilege, attribution, denial testing, and accountable autonomy.
- Supports security, approval, audit, and tenant-isolation exercises.

### Negative

- Requires identity propagation, policy lifecycle, and ownership.
- Adds complexity to local development and curriculum setup.

### Risks

- Policy drift between tools or tracks.
- Excessive authority hidden behind broad service identities.
- Sensitive identity and policy data leaking into model context.

## Security and Governance Implications

- A prompt is not a security or governance boundary.
- User, service, and agent identities must be distinguishable and attributable.
- Least privilege, forbidden actions, approval thresholds, escalation, reversibility, auditability, and accountability are first-class requirements.
- Data, model, prompt, knowledge-source, and release changes require defined ownership and review.

## Operational Implications

- Denials, policy decisions, escalations, and approvals require observable outcomes.
- Policy changes need versioning, rollback, and compatibility handling.
- Authorization outages must fail closed for consequential actions.

## Curriculum Implications

Learners should demonstrate that the model can request an action without being able to authorize it, and should prove identity propagation, denied actions, escalation, approval, and audit reconstruction.

## Affected Work Packages

- WP-0011, WP-0012, WP-0013, WP-0014, WP-0019, WP-0023, WP-0024, WP-0029, WP-0040, WP-0039

## Out of Scope

- Selecting a production IAM vendor.
- Defining every business role or client policy.
- Implementing the policy engine in this ADR.

## Open Questions

- Central, distributed, or hybrid enforcement for the curriculum architecture?
- Which identity claims may enter model context?
- Which action classes require approval or mandatory escalation?
- What policy/version evidence is required for the capstone?
