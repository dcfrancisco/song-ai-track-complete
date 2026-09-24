# WP-0038 — Correct Curriculum Claims and Label Simulated Components

## Status

Complete

## Purpose

Align curriculum language with actual implementation maturity so learners can distinguish legitimate simplification from production capability.

## Background

Current documentation describes local mock order functions as agent tools and labels Track C as Levels 2, 3, and 4 despite missing persistence, governance, evaluation, resilience, and delivery evidence.

## Scope

- Audit README, lab, UI, code-comment, and endpoint claims.
- Label features as implemented, partial, simulated, documented-only, or missing.
- State explicit limitations for mock integrations, in-memory RAG, and one-shot orchestration.
- Define wording rules for maturity-level claims.

## Out of Scope

- Rewriting application behavior.
- Adding new architecture or tests.
- Removing beginner-friendly explanations where they are accurate.

## Dependencies

- WP-0001 Curriculum Maturity and Definition of Done
- WP-0037 Architecture Artifacts Requirement

## Acceptance Criteria

- Every Level 2+ claim maps to observable implementation and evidence.
- Simulated integrations are labeled at the point of use.
- “Agent” and “multi-agent” terminology includes a capability definition or qualification.
- Missing production controls are not implied by lab titles.
- Beginner simplifications remain clearly identified as educational.

## Required Evidence

- Claims audit matrix.
- Revised terminology guide.
- Before/after documentation review record.
- Traceability from claim to implementation/evidence.

## Risks

- Over-correction may make foundational material unnecessarily discouraging.
- Terminology changes can diverge across tracks if not centrally maintained.

## Notes

This WP should distinguish “demonstrates the concept” from “demonstrates production competency.”
