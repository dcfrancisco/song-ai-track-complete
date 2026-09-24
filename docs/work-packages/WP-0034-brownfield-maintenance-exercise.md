# WP-0034 — Add Brownfield Maintenance Exercise

## Status

Draft

## Purpose

Teach learners to understand and safely modify an existing AI-enabled system rather than only completing greenfield tutorial steps.

## Background

The current tracks are polished reference implementations with known architecture and lab boundaries. They do not require learners to handle incomplete documentation, hidden coupling, existing regressions, or compatibility constraints.

## Scope

- Provide an existing track with incomplete or stale documentation.
- Introduce a bounded maintenance request and at least one existing defect.
- Require impact analysis across frontend, backend, prompts, persistence, contracts, and tests.
- Require a safe change plan, regression evidence, and updated documentation.

## Out of Scope

- Introducing production incidents without an assessment plan.
- Replacing the foundation Labs 1–10.
- Requiring a specific language or framework.

## Dependencies

- WP-0001 Curriculum Maturity and Definition of Done
- WP-0006 API and Interface Contracts
- WP-0030 Layered Automated Test Baseline
- WP-0037 Architecture Artifacts Requirement

## Acceptance Criteria

- Learner identifies affected components before proposing changes.
- Existing behavior and compatibility expectations are documented.
- The change includes regression tests and failure-path evidence.
- Documentation updates reflect the actual implementation.
- Learner records assumptions, risks, and unresolved gaps.

## Required Evidence

- Repository discovery report.
- Impact analysis.
- Change plan.
- Test and regression results.
- Updated technical documentation.

## Risks

- Hidden defects may be ambiguous without an assessor fault matrix.
- Learners may focus on local fixes without understanding system impact.

## Notes

The exercise should preserve the existing architecture unless a justified change is approved.
