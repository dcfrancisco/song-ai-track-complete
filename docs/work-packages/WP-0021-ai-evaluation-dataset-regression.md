# WP-0021 — Add AI Evaluation Dataset and Regression Harness

## Status

Blocked

## Purpose

Define a repeatable evaluation harness for structured output, answers, tool selection, groundedness, safety, and business rules.

## Background

The repository has no model fixtures, evaluation datasets, probabilistic scoring, or automated evidence beyond a live non-empty-response smoke test.

## Scope

- Define task-specific evaluation datasets and versioning.
- Separate deterministic assertions from probabilistic quality measures.
- Define evaluators for answer relevance, groundedness, citations, tool selection, and refusal behavior.
- Define baseline, threshold, and failure-report behavior.

## Out of Scope

- Selecting a single model or evaluator vendor.
- Treating human review as the only evaluation method.
- Implementing application features.

## Dependencies

- ADR-0008 AI Evaluation and Regression
- WP-0030 Layered Automated Test Baseline
- WP-0020 Retrieval Benchmark Dataset and Metrics

## Acceptance Criteria

- Dataset cases include happy, negative, adversarial, ambiguous, and failure inputs.
- Safety and authorization violations are hard failures.
- Probabilistic scores have documented thresholds and uncertainty limitations.
- Evaluations are reproducible with pinned prompt/model/configuration metadata.
- A model or prompt change produces a comparable report.

## Required Evidence

- Evaluation taxonomy.
- Dataset format and sample cases.
- Scoring and threshold policy.
- Regression-report format.

## Risks

- Evaluators can reproduce model bias or miss subtle hallucinations.
- Exact-text assertions are brittle for natural-language outputs.

## Notes

Evaluation must not grant safety or authorization failures a passing score because the answer was fluent.
