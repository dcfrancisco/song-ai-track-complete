# WP-0011 — Define Agent Authority Matrix

## Status

In Progress

## Purpose

Define explicit identity, responsibility, authority, and accountability boundaries for every eventual agent and tool role.

## Background

The current order and catalog “agents” are prompt-driven demonstrations. They do not have authenticated identities, explicit permissions, forbidden actions, escalation rules, or durable accountability.

## Scope

- Define identity and responsibility for knowledge/search, order, catalog/content/SEO, verifier, and supervisor roles.
- Define allowed data, allowed tools, forbidden tools, authority levels, approval thresholds, escalation, audit, and completion criteria.
- Define the matrix review process for new agents and tools.

## Out of Scope

- Implementing authentication or authorization.
- Selecting the enforcement architecture before ADR-0004 approval.
- Assigning production-client policies.

## Dependencies

- ADR-0004 Agent Identity, Authority, and Governance

## Acceptance Criteria

- Every eventual agent has explicit identity, responsibility, allowed tools, forbidden tools, input/output contracts, state, timeout, retry policy, authority, escalation, audit, and completion requirements.
- No role has implicit unrestricted tool access.
- Consequential actions have explicit authority and approval rules.
- Tool authorization is independent of prompt wording.
- At least one denied-action scenario exists for each consequential tool class.

## Required Evidence

- Reviewed authority matrix.
- Agent/tool responsibility map.
- Denied-action scenarios.
- Matrix review checklist.

## Risks

- A matrix can become aspirational if it is not connected to deterministic enforcement.
- Broad role definitions can conceal excessive authority.

## Notes

A prompt is not a security or governance boundary.
