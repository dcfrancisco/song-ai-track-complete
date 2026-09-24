# WP-0040 — Add Governance and Change-Control Curriculum Thread

## Status

Blocked

## Purpose

Make governance a continuous engineering activity covering identity, authority, data, models, prompts, knowledge, approvals, and release changes.

## Background

The current curriculum treats prompts, model settings, retrieval content, and tool behavior as implementation details. It does not require ownership, review, approval, auditability, or controlled change processes for these elements.

## Scope

- Define governance responsibilities across identity, authority, data, tools, models, prompts, knowledge, and releases.
- Define change classes, required reviews, evidence, and rollback expectations.
- Define ownership for policies, datasets, prompts, indexes, models, and evaluation thresholds.
- Define escalation, exception, and risk-acceptance processes.
- Integrate governance checkpoints throughout the curriculum rather than only at the capstone.

## Out of Scope

- Selecting enterprise governance software.
- Implementing approval, authorization, audit, or deployment systems.
- Creating an ADR for every individual test or documentation edit.

## Dependencies

- ADR-0004 Agent Identity, Authority, and Governance
- ADR-0008 AI Evaluation and Regression
- ADR-0010 Model Provider Resilience
- WP-0011 Agent Authority Matrix
- WP-0022 Prompt and Model Regression Gate
- WP-0029 Durable Audit Events
- WP-0036 Deployment, Rollback, and Release Evidence

## Acceptance Criteria

- Every governed asset has an owner, lifecycle, change class, and review requirement.
- Consequential policy changes require explicit approval and evidence.
- Prompt, model, knowledge, tool, and authorization changes are traceable.
- Exceptions have expiry, owner, compensating control, and review outcome.
- Governance evidence is required continuously during Specify → Build → Prove → Break → Recover → Prove Again.

## Required Evidence

- Governance responsibility matrix.
- Asset/change classification table.
- Review and exception workflow.
- Sample approved and rejected change records.
- Traceability example from change request to evaluation and release evidence.

## Risks

- Governance can become paperwork without enforcement or evidence.
- Too much process may overwhelm foundational learners.
- Conflicting ownership across tracks can create inconsistent standards.

## Notes

Governance must preserve least privilege, accountability, reversibility, data protection, model/prompt versioning, and explicit human responsibility for consequential decisions.
