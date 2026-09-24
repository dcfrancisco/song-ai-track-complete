# WP-0013 — Add Tool-Level Authorization and Least-Privilege Exercise

## Status

In Progress

## Purpose

Make tool authorization deterministic, explicit, and independent of model instructions.

## Background

The current “agent” can select recognized tools based on prompt output, but no caller, agent, role, tenant, or risk policy is checked before execution.

## Scope

- Map identities and agent roles to allowed and forbidden tools.
- Define read, recommend, execute, approve, and administer authority levels.
- Define resource ownership and tenant boundaries.
- Define denial, escalation, and audit behavior.

## Out of Scope

- Implementing identity issuance.
- Implementing human approval workflows.
- Selecting a centralized or distributed authorization architecture beyond ADR-0004.

## Dependencies

- ADR-0004 Governance and Authority
- ADR-0009 AI Security
- WP-0011 Agent Authority Matrix
- WP-0012 Authentication and Identity Propagation

## Acceptance Criteria

- Every consequential tool has an authorization policy separate from its prompt.
- Least privilege is the default for every agent role.
- Unauthorized tools and resources are denied before side effects.
- Cross-user and cross-tenant access attempts are rejected.
- Denials, escalations, and policy decisions are observable and testable.

## Required Evidence

- Tool permission matrix.
- Denied-action test catalogue.
- Tenant/resource-boundary scenarios.
- Authorization decision evidence.

## Risks

- Prompt instructions may be incorrectly treated as permission.
- A policy layer that trusts model-provided identity is unsafe.

## Notes

The model may request an action; only deterministic policy can authorize it.
