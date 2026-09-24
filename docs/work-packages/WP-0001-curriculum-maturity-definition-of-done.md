# WP-0001 — Define Curriculum Maturity Model and Definition of Done

## Status

Complete

## Purpose

Define the evidence-based maturity model used to distinguish AI foundations, AI engineering, enterprise agentic engineering, and delivery engineering competency.

## Background

The current Labs 1–10 provide useful foundational demonstrations, but completion cannot by itself prove persistence, security, evaluation, resilience, governance, or delivery ownership. A shared Definition of Done is needed before higher-level WPs are assessed.

## Scope

- Define Levels 1–4 and observable competencies for each level.
- Define completion evidence for implementation, contracts, tests, security, failure handling, recovery, observability, and documentation.
- Map existing Labs 1–10 to their actual demonstrated maturity.
- Define continuous Specify → Build → Prove → Break → Recover → Prove Again expectations.

## Out of Scope

- Implementing application features.
- Changing frontend or backend source code.
- Approving architectural decisions.

## Dependencies

- None

## Acceptance Criteria

- Each level is tied to observable competencies and evidence.
- Manual happy-path demonstration alone cannot satisfy Level 2 or higher.
- Failure, recovery, security, QA, and documentation evidence is required where relevant.
- A learner can determine which competency is proven and which remains unproven.
- The model does not overstate the current repository as Levels 2–4.

## Required Evidence

- Reviewed maturity matrix.
- Definition-of-Done checklist.
- Lab-to-level mapping.
- Evidence-quality rubric.

## Risks

- A broad checklist may encourage evidence collection without meaningful engineering work.
- Level boundaries may be interpreted as sequential when some competencies can develop in parallel.

## Notes

This WP establishes assessment standards; it does not approve implementation architecture.
