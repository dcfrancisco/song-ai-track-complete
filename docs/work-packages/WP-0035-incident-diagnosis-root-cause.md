# WP-0035 — Add Incident Diagnosis and Root-Cause Exercise

## Status

Blocked

## Purpose

Teach evidence-based diagnosis of AI application incidents using logs, traces, metrics, state, and reproducible failure information.

## Background

The current repository has console logging but no correlation IDs, traces, operational metrics, audit events, or incident runbooks. Learners cannot practice tracing a failure across model, retrieval, tool, and API boundaries.

## Scope

- Define controlled incident scenarios involving provider, RAG, tool, persistence, security, and frontend failures.
- Require symptom identification, timeline reconstruction, root cause, impact, mitigation, and follow-up.
- Define evidence standards and uncertainty handling.
- Include a post-incident improvement loop.

## Out of Scope

- Running incidents against production systems.
- Selecting an incident-management platform.
- Implementing all observability features in this planning WP.

## Dependencies

- ADR-0011 Observability and Audit
- WP-0027 Structured Logging and Correlation IDs
- WP-0028 Tracing and Operational Metrics
- WP-0031 Failure Injection

## Acceptance Criteria

- Learner reconstructs an incident from available evidence rather than guessing.
- Root cause is distinguished from symptom and contributing factors.
- Incident impact and affected identities/data are identified.
- Mitigation, recovery, and prevention actions are documented.
- Evidence includes at least one trace/log/metric correlation and one known limitation.

## Required Evidence

- Incident brief.
- Timeline and evidence map.
- Root-cause analysis.
- Recovery validation.
- Post-incident action list.

## Risks

- Poor telemetry can make the exercise test guesswork rather than diagnosis.
- Incident details may accidentally expose sensitive test data.

## Notes

Use synthetic incidents and explicitly label evidence gaps.
