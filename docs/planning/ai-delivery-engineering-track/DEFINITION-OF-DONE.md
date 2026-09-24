# Curriculum Definition of Done

## Purpose

This checklist defines evidence required to claim completion at each maturity level. It prevents a successful manual demo from being treated as proof of production competency.

## Level 1 Completion

- The intended concept is implemented or demonstrated.
- The learner can explain the prompt, model, embedding, chat, RAG, or tool concept used.
- The happy path is reproducible from documented setup steps.
- Simulated integrations and known limitations are explicitly labeled.

## Level 2 Completion

In addition to Level 1:

- Interfaces have explicit request, response, validation, and error behavior.
- Durable state and restart behavior are proven where state is authoritative.
- Automated tests cover deterministic business behavior and relevant failure paths.
- Provider/dependency failure behavior is defined and observable.
- Security boundaries and authorization rules are tested where applicable.
- Setup is reproducible without undocumented local assumptions.
- Documentation identifies tradeoffs and known limitations.

## Level 3 Completion

In addition to Level 2:

- Workflows are bounded, resumable, and completion-verified.
- Agents have identity, responsibility, allowed/forbidden tools, authority, escalation, audit, and termination criteria.
- Consequential actions have deterministic authorization and risk-based approval.
- Idempotency, partial failure, reconciliation, and recovery are proven.
- RAG quality, groundedness, access control, freshness, and prompt-injection behavior are evaluated.
- Model/provider routing and degraded behavior are evaluated.
- Operational telemetry and durable audit evidence are available.

## Level 4 Completion

In addition to Level 3:

- The learner diagnoses an existing brownfield system from symptoms and evidence.
- At least one incomplete, broken, or changing dependency is handled safely.
- Root cause, blast radius, remediation, regression risk, and residual risk are documented.
- Release validation, deployment evidence, and rollback evidence are produced.
- The learner can operate and support the changed system, not only build it.

## Non-Completion Conditions

A level claim is not valid when:

- Only a UI happy path was demonstrated.
- A mock integration is presented as a real integration.
- A prompt is treated as authorization.
- Tests exist but do not cover the claimed behavior.
- Failure behavior is unknown or hidden.
- The learner cannot reproduce the result.
- Known limitations are omitted.
