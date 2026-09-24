# ADR-0011 — Observability, Traceability, and Audit Architecture

## Status

Proposed

## Context

Current observability is mostly console logging and aggregate pipeline duration. There are no correlation IDs, structured event schemas, model/retrieval/tool spans, token or cost metrics, durable audit events, or reproducible decision evidence.

Operational telemetry and durable audit have different purposes. Logs and traces help diagnose behavior; audit records establish who requested, authorized, approved, executed, and received the outcome of a consequential action.

## Decision Drivers

- Debuggability and incident diagnosis.
- Accountability and auditability.
- Latency, token, cost, provider, and tool visibility.
- Prompt/data redaction and retention.
- Reproducibility of model and workflow decisions.
- Curriculum portability and operational complexity.

## Options Considered

### Option A — Structured logs, traces, metrics, and durable audit events

Provides full workflow visibility and accountability but requires schemas, storage, redaction, retention, and telemetry infrastructure.

### Option B — Structured logging plus selected metrics

Improves diagnosis with lower complexity but may not reconstruct cross-boundary workflows or satisfy durable accountability.

### Option C — Console logs only

Matches the current repository and is adequate for introductory demos, but cannot support enterprise diagnosis or audit evidence.

## Proposed Decision

Adopt correlation-based observability across request, retrieval, model, workflow, and tool boundaries, and maintain durable append-oriented audit events for consequential decisions and state changes. Keep operational telemetry separate from audit records. The exact telemetry products and storage remain open for human review.

## Consequences

### Positive

- Enables diagnosis, cost/latency analysis, QA evidence, and accountability.
- Makes capstone incidents evidence-driven.
- Separates operational retention from durable governance records.

### Negative

- Adds telemetry schemas, storage, redaction, retention, and access-control work.
- Instrumentation can increase cost and execution complexity.

### Risks

- Prompts, retrieved content, identities, or secrets may leak through telemetry.
- Sampling may hide rare consequential failures.
- Audit records may be incomplete or incorrectly treated as immutable.

## Security and Governance Implications

- Audit events identify requester, identity, authority, policy, approval, agent, tool, parameters or safe references, and outcome.
- Sensitive prompt and document content is redacted or governed by explicit policy.
- Audit access is least-privilege and itself reviewable.
- Correlation IDs support traceability but do not establish identity or permission.

## Operational Implications

- Define event schemas, propagation, retention, redaction, sampling, and failure behavior.
- Telemetry failure must not silently authorize an action; consequential audit requirements may fail closed or escalate.
- Runbooks and incident diagnosis require reliable trace/log/metric evidence.

## Curriculum Implications

Learners should distinguish logs, traces, metrics, and audit; trace a request across model/retrieval/tool boundaries; measure cost/latency; and reconstruct a consequential action without exposing secrets.

## Affected Work Packages

- WP-0027, WP-0028, WP-0029, WP-0035, WP-0036, WP-0039, WP-0040

## Out of Scope

- Selecting a telemetry vendor or deployment stack.
- Treating every debug message as an audit event.
- Capturing unrestricted raw prompts by default.

## Open Questions

- Which events require durable audit versus operational telemetry?
- What is the retention/redaction policy for prompts, retrieved content, and tool arguments?
- What telemetry minimum is required for the capstone and incident exercise?
