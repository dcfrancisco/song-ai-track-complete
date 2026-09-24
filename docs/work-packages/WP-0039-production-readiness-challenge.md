# WP-0039 — Add Final Production-Readiness Challenge

## Status

Blocked

## Purpose

Create a capstone that evaluates end-to-end engineering ownership rather than guided tutorial completion or a successful UI demo.

## Background

The current tracks are greenfield reference implementations. They do not require diagnosis of incomplete documentation, broken integrations, changing requirements, incidents, security defects, RAG quality defects, or release risk.

## Scope

- Present a deliberately imperfect existing system with incomplete documentation, changed integrations, intermittent failures, duplicate-action risk, RAG defects, prompt-injection risk, observability gaps, failing tests, and a changing requirement.
- Present symptoms, evidence, user reports, operational reports, and recent-change context without identifying the faulty subsystem.
- Require learners to determine the defect, location, root cause, blast radius, remediation, regression risk, and evidence required for release.
- Assess diagnosis, safe change management, failure/recovery, testing, security, observability, deployment/rollback, and known limitations.

## Out of Scope

- Giving a checklist that identifies each defect or its subsystem.
- Assessing only whether the UI appears to work.
- Replacing prerequisite competency WPs.

## Dependencies

- All applicable approved ADRs for the final architecture
- WP-0001 Curriculum Maturity and Definition of Done
- WP-0006 Versioned API and Interface Contracts
- WP-0010 Completion Verification and Termination
- WP-0014 Human Approval Workflow
- WP-0013 Tool-Level Authorization
- WP-0015 Idempotency and Duplicate-Action Protection
- WP-0016 Partial-Failure Reconciliation
- WP-0019 Authorization-Aware RAG
- WP-0020 Retrieval Benchmark Dataset and Metrics
- WP-0021 AI Evaluation Dataset and Regression Harness
- WP-0024 Data-Exfiltration and Tool-Abuse Tests
- WP-0025 Provider Timeout, Retry, and Backoff
- WP-0026 Provider Fallback, Routing, and Degraded Mode
- WP-0028 Model, Retrieval, and Tool Tracing and Metrics
- WP-0030 Layered Automated Test Baseline
- WP-0031 Failure-Injection Test Suite
- WP-0034 Brownfield Maintenance Exercise
- WP-0035 Incident Diagnosis and Root Cause
- WP-0036 Deployment, Rollback, and Release Evidence
- WP-0037 Architecture Artifacts Requirement
- WP-0040 Governance and Change Control

## Acceptance Criteria

- The learner receives symptoms and evidence, not a defect-location checklist.
- The learner identifies what is wrong, where it is, root cause, blast radius, remediation, regression risk, and required proof.
- The challenge includes at least one ambiguous or misleading symptom.
- The learner demonstrates safe change management and backward-compatibility reasoning.
- Failure, recovery, authorization, security, evaluation, and observability behavior is evidenced.
- Deployment validation and rollback evidence are required.
- The learner documents known risks, residual gaps, and unresolved uncertainty.

## Required Evidence

- Root-cause and blast-radius report.
- Architecture decision(s) where justified.
- Automated test and E2E results.
- Failure-injection and recovery evidence.
- Security and authorization evidence.
- Trace/log/metric evidence.
- Release and rollback evidence.
- Known-risks and residual-limitations statement.

## Risks

- An under-instrumented challenge may test guessing instead of diagnosis.
- Too many simultaneous defects can make scoring subjective.
- Hidden assessor faults must be versioned and protected from learners.

## Notes

The capstone consumes deployment, testing, failure handling, observability, security, agent, RAG, and brownfield competencies; it is not a prerequisite for them.
