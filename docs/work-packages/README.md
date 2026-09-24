# AI Delivery Engineering Work Package Backlog

These remain the planning baseline. The backlog itself does not authorize implementation; explicit implementation batches may implement approved or documented working directions. Work Packages implement approved architectural decisions; ADRs capture unresolved architectural choices.

All ADRs remain `Proposed`. Work Packages use the implementation lifecycle documented below: `Draft`, `In Progress`, `Complete`, or `Blocked`.

## Implementation Lifecycle

For the current implementation batch, Work Packages use these lifecycle states:

- **Complete:** WP-0001, WP-0006, WP-0037, WP-0038.
- **In Progress:** WP-0002, WP-0003, WP-0004, WP-0005, WP-0007, WP-0008, WP-0009, WP-0010, WP-0011, WP-0013, WP-0014, WP-0015, WP-0027, WP-0029.
- **Blocked:** WPs whose remaining implementation depends on later capability work or unverified cross-track/runtime decisions.
- **Draft:** later WPs not yet implemented; the Track A foundation is evidence for incremental continuation, not completion of the full phase.

## Backlog

| WP | Title | Dependencies | Detailed document |
| --- | --- | --- | --- |
| WP-0001 | Define curriculum maturity model and Definition of Done | — | [WP-0001](WP-0001-curriculum-maturity-definition-of-done.md) |
| WP-0002 | Normalize developer environment across Tracks A/B/C | ADR-0012 | [WP-0002](WP-0002-normalize-developer-environment.md) |
| WP-0003 | Add environment validation and readiness checks | ADR-0012; WP-0002 | [WP-0003](WP-0003-environment-validation-readiness.md) |
| WP-0004 | Introduce durable persistence and migrations lab | ADR-0001; WP-0006 | [WP-0004](WP-0004-durable-persistence-migrations.md) |
| WP-0005 | Persist conversation/workflow state and restart recovery | ADR-0001, ADR-0003; WP-0004, WP-0009 | [WP-0005](WP-0005-conversation-workflow-recovery.md) |
| WP-0006 | Define versioned API/interface contracts and compatibility rules | — | [WP-0006](WP-0006-api-interface-contracts.md) |
| WP-0007 | Replace JSON-in-text tool selection with typed tool contracts | ADR-0002; WP-0006, WP-0011 | [WP-0007](WP-0007-typed-tool-contracts.md) |
| WP-0008 | Add tool argument validation and negative tests | ADR-0002, ADR-0009; WP-0007, WP-0013 | [WP-0008](WP-0008-tool-validation-negative-tests.md) |
| WP-0009 | Implement bounded multi-step agent workflow exercise | ADR-0002, ADR-0003; WP-0007 | [WP-0009](WP-0009-bounded-agent-workflow.md) |
| WP-0010 | Add completion verification and termination tests | ADR-0003, ADR-0008; WP-0009, WP-0016 | [WP-0010](WP-0010-completion-verification-termination.md) |
| WP-0011 | Define agent authority matrix | ADR-0004 | [WP-0011](WP-0011-agent-authority-matrix.md) |
| WP-0012 | Add authentication/identity propagation exercise | ADR-0004; WP-0011 | [WP-0012](WP-0012-authentication-identity-propagation.md) |
| WP-0013 | Add tool-level authorization and least-privilege exercise | ADR-0004, ADR-0009; WP-0011, WP-0012 | [WP-0013](WP-0013-tool-level-authorization.md) |
| WP-0014 | Add human approval workflow exercise | ADR-0003, ADR-0004, ADR-0005; WP-0005 | [WP-0014](WP-0014-human-approval-workflow.md) |
| WP-0015 | Add idempotency and duplicate-action protection | ADR-0001, ADR-0006; WP-0004 | [WP-0015](WP-0015-idempotency-duplicate-action.md) |
| WP-0016 | Add partial-failure reconciliation/compensation exercise | ADR-0003, ADR-0006; WP-0009, WP-0015 | [WP-0016](WP-0016-partial-failure-reconciliation.md) |
| WP-0017 | Add production-oriented RAG ingestion/chunking pipeline | ADR-0001, ADR-0007; WP-0004 | [WP-0017](WP-0017-production-rag-ingestion-chunking.md) |
| WP-0018 | Add metadata filtering, freshness, and versioning | ADR-0007; WP-0017 | [WP-0018](WP-0018-rag-metadata-freshness-versioning.md) |
| WP-0019 | Add authorization-aware retrieval and malicious-document exercise | ADR-0004, ADR-0007, ADR-0009; WP-0012, WP-0023 | [WP-0019](WP-0019-authorization-aware-rag.md) |
| WP-0020 | Add retrieval benchmark dataset and metrics | ADR-0007, ADR-0008; WP-0017, WP-0018 | [WP-0020](WP-0020-retrieval-benchmark-metrics.md) |
| WP-0021 | Add AI evaluation dataset and regression harness | ADR-0008; WP-0020, WP-0030 | [WP-0021](WP-0021-ai-evaluation-dataset-regression.md) |
| WP-0022 | Add prompt/model change regression gate | ADR-0008; WP-0006, WP-0021 | [WP-0022](WP-0022-prompt-model-regression-gate.md) |
| WP-0023 | Add AI threat model and prompt-injection lab | ADR-0004, ADR-0009; WP-0011 | [WP-0023](WP-0023-ai-threat-model-prompt-injection.md) |
| WP-0024 | Add data-exfiltration/tool-abuse adversarial tests | ADR-0004, ADR-0009; WP-0013, WP-0023 | [WP-0024](WP-0024-data-exfiltration-tool-abuse-tests.md) |
| WP-0025 | Add provider timeout/retry/backoff behavior | ADR-0006, ADR-0010; WP-0015 | [WP-0025](WP-0025-provider-timeout-retry-backoff.md) |
| WP-0026 | Add provider fallback/routing and degraded-mode lab | ADR-0008, ADR-0010; WP-0025 | [WP-0026](WP-0026-provider-fallback-routing-degraded-mode.md) |
| WP-0027 | Add structured logging and correlation IDs | ADR-0011; WP-0012 | [WP-0027](WP-0027-structured-logging-correlation-ids.md) |
| WP-0028 | Add model/retrieval/tool tracing and operational metrics | ADR-0011; WP-0020, WP-0027 | [WP-0028](WP-0028-model-retrieval-tool-tracing-metrics.md) |
| WP-0029 | Add durable audit events and review evidence | ADR-0001, ADR-0004, ADR-0011; WP-0012, WP-0014 | [WP-0029](WP-0029-durable-audit-events.md) |
| WP-0030 | Establish layered automated test baseline for all tracks | ADR-0008 and applicable feature ADRs | [WP-0030](WP-0030-layered-test-baseline.md) |
| WP-0031 | Add failure-injection test suite | ADR-0003, ADR-0006, ADR-0010; WP-0016, WP-0025 | [WP-0031](WP-0031-failure-injection-test-suite.md) |
| WP-0032 | Add frontend/component/API/E2E test coverage | ADR-0008; WP-0006, WP-0030 | [WP-0032](WP-0032-frontend-api-e2e-tests.md) |
| WP-0033 | Add QA failure matrix and test-design exercise | ADR-0008; WP-0024, WP-0030, WP-0031 | [WP-0033](WP-0033-qa-failure-matrix-test-design.md) |
| WP-0034 | Add brownfield maintenance exercise | WP-0001, WP-0006, WP-0030, WP-0037 | [WP-0034](WP-0034-brownfield-maintenance-exercise.md) |
| WP-0035 | Add incident diagnosis and root-cause exercise | ADR-0011; WP-0027, WP-0028, WP-0031 | [WP-0035](WP-0035-incident-diagnosis-root-cause.md) |
| WP-0036 | Add deployment, rollback, and release-evidence exercise | ADR-0012; WP-0006, WP-0018, WP-0022, WP-0027, WP-0028 | [WP-0036](WP-0036-deployment-rollback-release-evidence.md) |
| WP-0037 | Add architecture artifacts requirement | WP-0001, WP-0006, WP-0030 | [WP-0037](WP-0037-architecture-artifacts-requirement.md) |
| WP-0038 | Correct curriculum claims and label simulated components | WP-0001, WP-0037 | [WP-0038](WP-0038-curriculum-claims-simulation-labels.md) |
| WP-0039 | Add final production-readiness challenge | All applicable approved ADRs; prerequisite capability WPs | [WP-0039](WP-0039-production-readiness-challenge.md) |
| WP-0040 | Add governance and change-control curriculum thread | ADR-0004, ADR-0008, ADR-0010; WP-0011, WP-0022, WP-0029, WP-0036 | [WP-0040](WP-0040-governance-change-control.md) |

## Recommended Dependency-Oriented Sequence

This is guidance for implementation planning, not a hard schedule. ADR approval remains a prerequisite wherever listed. WPs in the same phase may proceed in parallel when their prerequisites are satisfied.

### Phase 0 — Standards and planning

- WP-0001 Curriculum maturity model and Definition of Done
- WP-0006 API/interface contracts
- WP-0037 Architecture artifact selection and review
- WP-0038 Curriculum claims and simulation labels

### Phase 1 — Runtime foundation

- WP-0002 Developer environment requirements
- WP-0003 Environment validation and readiness
- WP-0004 Durable persistence and migrations
- WP-0005 Conversation/workflow state and recovery

WP-0002 and WP-0003 are related but distinct: the former defines parity and reproducibility requirements; the latter defines validation evidence.

### Phase 2 — Agent engineering

- WP-0011 Agent authority matrix
- WP-0012 Authentication and identity propagation
- WP-0007 Typed tool contracts
- WP-0013 Tool-level authorization
- WP-0008 Tool argument validation and negative tests
- WP-0009 Bounded multi-step workflow
- WP-0015 Idempotency and duplicate-action protection
- WP-0016 Partial-failure reconciliation
- WP-0014 Human approval workflow
- WP-0010 Completion verification and termination

This phase has parallel streams, but workflow recovery, authority, contracts, identity, authorization, idempotency, and approval must be available before consequential agent behavior is assessed.

### Phase 3 — Production RAG

- WP-0017 Ingestion and chunking
- WP-0018 Metadata, freshness, and versioning
- WP-0019 Authorization-aware retrieval and malicious documents
- WP-0020 Retrieval benchmark dataset and metrics

### Phase 4 — Evaluation and security

- WP-0021 AI evaluation dataset and regression harness
- WP-0022 Prompt/model change regression gate
- WP-0023 AI threat model and prompt injection
- WP-0024 Data-exfiltration and tool-abuse adversarial tests

### Phase 5 — Resilience and observability

- WP-0025 Provider timeout, retry, and backoff
- WP-0026 Provider fallback, routing, and degraded mode
- WP-0027 Structured logging and correlation IDs
- WP-0028 Model, retrieval, and tool tracing and metrics
- WP-0029 Durable audit events

### Phase 6 — QA and verification

- WP-0030 Layered automated test baseline
- WP-0031 Failure-injection test suite
- WP-0032 Frontend, API, and E2E coverage
- WP-0033 QA failure matrix and test design

Testing and QA planning should begin in Phase 0 and continue through every later phase; this phase consolidates the cross-track evidence standard.

### Phase 7 — Delivery engineering

- WP-0034 Brownfield maintenance
- WP-0035 Incident diagnosis and root cause
- WP-0036 Deployment, rollback, and release evidence

### Phase 8 — Governance and capstone

- WP-0040 Governance and change control
- WP-0039 Final production-readiness challenge

WP-0039 consumes the preceding capability work. It is not a prerequisite for deployment, testing, observability, security, agent, or RAG WPs.

## Planning Principles

- Existing Labs 1–10 remain the foundation track.
- A prompt is not a security or governance boundary.
- Multiple prompts or services do not automatically constitute a multi-agent system.
- OpenAPI is optional unless required by a client, project, platform, or team standard.
- Environment mechanism remains unresolved pending ADR-0012.
- ADRs capture architectural choices; WPs implement approved choices and define curriculum evidence.
- No WP is complete based only on a manual happy-path demo.
