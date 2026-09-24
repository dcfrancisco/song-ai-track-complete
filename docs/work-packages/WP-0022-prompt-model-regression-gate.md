# WP-0022 — Add Prompt and Model Change Regression Gate

## Status

Blocked

## Purpose

Make prompt, model, embedding, and retrieval changes subject to explicit regression evidence.

## Background

Prompts and provider settings are central to every lab, but the repository has no versioning convention, change review gate, or comparison evidence when they change.

## Scope

- Define version identifiers for prompts, models, embedding models, schemas, and retrieval configuration.
- Define required evaluation runs for each change class.
- Define hard-failure versus quality-regression thresholds.
- Define approval and rollback evidence for changes.

## Out of Scope

- Choosing a CI vendor or deployment platform.
- Implementing model routing.
- Rewriting existing prompts in this planning WP.

## Dependencies

- ADR-0008 AI Evaluation
- WP-0021 AI Evaluation Dataset and Regression Harness
- WP-0006 Versioned API and Interface Contracts

## Acceptance Criteria

- Every evaluated result identifies prompt/model/configuration versions.
- Changes cannot be considered safe without the required evaluation set.
- Safety, contract, authorization, and grounding failures block acceptance.
- Quality regressions are reported with comparison to a baseline.
- Rollback criteria are explicit.

## Required Evidence

- Change classification matrix.
- Versioning convention.
- Baseline comparison report.
- Approval/rollback checklist.

## Risks

- Evaluation cost can discourage small but important safety changes.
- A passing aggregate score can hide a critical failure in a rare case.

## Notes

Regression gates must preserve hard safety and contract failures as non-negotiable.
