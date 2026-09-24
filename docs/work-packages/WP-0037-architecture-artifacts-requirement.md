# WP-0037 — Add Architecture Artifacts Requirement

## Status

Complete

## Purpose

Require learners to communicate architectural behavior, risks, and tradeoffs through reviewable artifacts.

## Background

The repository contains implementation comments and quick-start READMEs but lacks consistent ADRs, sequence diagrams, state diagrams, threat models, failure matrices, and production-readiness criteria.

## Scope

- Define artifact-selection guidance by system risk, boundary, statefulness, and operational consequence.
- Require ADRs when a meaningful architectural choice exists and WPs for execution/curriculum work.
- Use sequence/state diagrams when interaction ordering or workflow transitions need explanation.
- Use threat models, failure matrices, interface contracts, and runbooks when the system boundary or operational risk justifies them.
- Define review and traceability expectations.

## Out of Scope

- Writing ADRs for every typo, test, or local implementation detail.
- Mandating a diagramming or documentation tool.
- Changing existing ADR status.

## Dependencies

- WP-0001 Curriculum Maturity and Definition of Done
- WP-0006 API and Interface Contracts
- WP-0030 Layered Test Baseline

## Acceptance Criteria

- Learners can justify which artifacts are needed for a feature or decision rather than applying a universal checklist.
- Selected artifacts materially explain decisions, boundaries, failure behavior, tradeoffs, or operation.
- ADRs are used only for meaningful architectural decisions; WPs are not used to hide unresolved ADR choices.
- Every implementation claim can be traced to code, tests, or planned evidence.
- Review criteria detect stale, contradictory, or ceremonial documentation.
- Unselected artifacts are explicitly justified when a reviewer might reasonably expect them.

## Required Evidence

- Artifact checklist by level.
- Traceability example.
- Review rubric.
- Sample sequence, state, threat, and failure artifact templates.

## Risks

- Documentation can become ceremonial and disconnected from behavior.
- Excessive artifacts can burden beginner labs.

## Notes

Artifact requirements should scale with consequence and maturity level.
