# AI Delivery Engineering Curriculum Maturity Model

This model describes demonstrated competency, not feature-label maturity. Existing Labs 1–10 remain the foundation track and should not be retroactively judged as enterprise implementations.

## Level 1 — AI Foundations

Learners demonstrate educational or simulated capabilities:

- Prompt construction and prompt constraints.
- Basic structured-output prompting and parsing.
- Embeddings and similarity concepts.
- Chat and session concepts.
- Basic RAG: embed, retrieve, and generate.
- Basic tool-selection concepts.

Completion may use a working happy path and limited manual exploration, but the learner must state that integrations, persistence, security, evaluation, or recovery are simulated where applicable.

## Level 2 — AI Engineering

Learners demonstrate engineering evidence for:

- Durable persistence and state.
- Real or contract-faithful integrations.
- Typed interface and tool contracts.
- Validation and deterministic business rules.
- Automated unit, integration, contract, frontend, and API tests where applicable.
- Authentication, authorization, and least privilege.
- Structured logging and useful operational diagnostics.
- Timeout, retry, failure, and recovery behavior.
- Reproducible local and CI setup.

A happy-path demo alone cannot satisfy Level 2.

## Level 3 — Enterprise Agentic Engineering

Learners demonstrate:

- Bounded durable workflows.
- Agent identity, responsibility, authority, and forbidden actions.
- Deterministic tool authorization.
- Risk-based human approval.
- Completion verification and escalation.
- Idempotency, reconciliation, and recovery.
- Retrieval access control, freshness, citations, and evaluation.
- Adversarial security testing.
- Model/provider routing, fallback, and degraded mode.
- Model, prompt, tool, retrieval, and audit evidence.

## Level 4 — Delivery Engineering

Learners demonstrate end-to-end ownership in a brownfield system:

- Incomplete or stale documentation discovery.
- Broken or changing integrations.
- Production-like incident diagnosis.
- Evidence-based root-cause analysis.
- Safe changes with compatibility and regression evidence.
- Deployment validation and rollback.
- Operational runbooks and known limitations.
- Changing requirements and release discipline.

## Evidence Rule

For Level 2 and above, completion follows:

`Specify → Build → Prove → Break → Recover → Prove Again`

Evidence should include, where relevant:

- Automated test results.
- Negative and failure behavior.
- Recovery and restart evidence.
- Security and authorization evidence.
- Logs, traces, metrics, and audit records.
- Reproducible setup instructions.
- Architecture and interface documentation.
- Known limitations and residual risks.

## Current Repository Position

The existing tracks primarily demonstrate Level 1. Some Level 2 concepts are present as introductory implementations, but completion of the current Labs 1–10 does not prove Level 2, Level 3, or Level 4 competency.
