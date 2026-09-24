# WP-0033 — Add QA Failure Matrix and Test-Design Exercise

## Status

Blocked

## Purpose

Teach QA engineers to design tests for AI behavior, system failure, security boundaries, and recovery rather than only manually validating UI paths.

## Background

Current curriculum labs expose interactive features but do not require a systematic failure matrix, adversarial cases, probabilistic evaluation, or evidence of recovery.

## Scope

- Define a failure matrix across model, retrieval, tools, persistence, authorization, frontend, and integrations.
- Classify deterministic, probabilistic, adversarial, negative, recovery, and regression tests.
- Define expected evidence for each failure class.
- Include tool selection, hallucinated parameters, groundedness, prompt injection, and duplicate actions.

## Out of Scope

- Implementing the test suite.
- Selecting one QA toolchain for all tracks.
- Treating manual exploratory testing as sufficient proof.

## Dependencies

- ADR-0008 AI Evaluation
- WP-0030 Layered Automated Test Baseline
- WP-0031 Failure Injection
- WP-0024 Data-Exfiltration and Tool-Abuse Tests

## Acceptance Criteria

- Every major capability has happy, negative, failure, recovery, security, and regression cases where applicable.
- Each case identifies setup, stimulus, expected state, expected response, and evidence.
- Probabilistic evaluations define datasets and thresholds rather than brittle exact text.
- Critical security and authorization violations are hard failures.
- The matrix identifies untestable or currently unimplemented behavior.

## Required Evidence

- QA failure matrix template.
- Completed sample matrix for one AI workflow.
- Test-design review checklist.
- Traceability from risks to tests.

## Risks

- A very large matrix can become unmaintainable without prioritization.
- Scoring AI quality without clear labels can be subjective.

## Notes

The curriculum should teach Specify → Build → Prove → Break → Recover → Prove Again.
