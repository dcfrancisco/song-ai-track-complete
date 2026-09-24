# ADR-0008 — AI Evaluation and Regression Strategy

## Status

Proposed

## Context

The repository has no fixed evaluation datasets, retrieval benchmarks, groundedness checks, structured-output fixtures, tool-selection evaluation, adversarial cases, or prompt/model regression gates. The only automated test is a live non-empty-response smoke test.

AI capabilities require different evidence. A single universal score cannot adequately represent schema correctness, authorization, retrieval quality, groundedness, tool arguments, or natural-language usefulness.

## Decision Drivers

- Repeatability and reproducibility.
- Separation of deterministic correctness from probabilistic quality.
- Safety and authorization hard failures.
- Retrieval, groundedness, tool, and answer-quality evaluation.
- Model, prompt, embedding, and index change detection.
- Dataset maintenance and reviewer effort.

## Options Considered

### Option A — Layered repository-owned evaluation datasets and gates

Combines deterministic assertions, capability-specific datasets, thresholds, and human review where needed. It requires dataset ownership and maintenance.

### Option B — Manual review only

Useful for exploratory quality assessment but not repeatable enough for regression or engineering evidence.

### Option C — One aggregate AI quality score

Simple to report but hides capability-specific failures and can allow safety or authorization defects to be averaged away.

## Proposed Decision

Adopt layered evaluation: deterministic assertions for contracts, schemas, business rules, authorization, and safety; capability-specific datasets for retrieval, groundedness, citations, tool selection, argument correctness, and answer quality; and human review only where judgment is genuinely required. No single score is mandatory for all capabilities.

## Consequences

### Positive

- Makes AI quality measurable and reviewable.
- Prevents fluent but unsafe or ungrounded output from passing by default.
- Supports prompt/model/configuration regression evidence.

### Negative

- Dataset curation, annotation, versioning, and evaluation cost increase.
- Probabilistic metrics require careful interpretation and stable baselines.

### Risks

- Biased or too-small datasets create false confidence.
- Evaluators may reward stylistic conformity rather than correctness.
- Model nondeterminism can make thresholds unstable.

## Security and Governance Implications

- Safety, authorization, privacy, and contract violations are hard failures.
- Evaluation data must avoid real secrets and follow data governance rules.
- Prompt/model/dataset versions and evaluator versions must be attributable.
- Evaluation changes require review and change control.

## Operational Implications

- Normal regression runs should not require live provider access.
- Live-provider evaluations need explicit labeling, cost controls, and reproducibility metadata.
- Failed gates require a defined release, rollback, or exception path.

## Curriculum Implications

QA learners should select evaluation methods appropriate to each capability and distinguish exact deterministic assertions from probabilistic quality evidence.

## Affected Work Packages

- WP-0010, WP-0020, WP-0021, WP-0022, WP-0024, WP-0030, WP-0031, WP-0032, WP-0033, WP-0039, WP-0040

## Out of Scope

- Selecting a single evaluator vendor or model-judge framework.
- Requiring one numeric threshold for every output.
- Replacing conventional security and contract testing with model evaluation.

## Open Questions

- Which datasets and labels are required for each target capability?
- Which thresholds are hard gates versus review signals?
- How should nondeterminism and evaluator disagreement be reported?
