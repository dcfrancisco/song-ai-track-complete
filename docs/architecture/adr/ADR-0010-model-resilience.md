# ADR-0010 — Model Provider Routing, Resilience, and Degraded Mode

## Status

Proposed

## Context

Tracks B and C expose several provider configurations, while Track A has a smaller and inconsistent provider abstraction. None provides health-based routing, capability negotiation, provider fallback, explicit timeout/backoff policy, privacy/cost/latency policy, or meaningful degraded operation. AI is therefore a single point of failure for most curriculum features.

Future OpenAI-based configuration must read `OPENAI_API_KEY` from the host environment. The value must never be hardcoded, committed, copied into documentation, placed in runtime files, or emitted in logs.

## Decision Drivers

- Availability and core business continuity.
- Provider and model capability compatibility.
- Timeout, retry, backoff, and circuit behavior.
- Privacy, data residency, and secret handling.
- Cost, latency, quality, and capacity.
- Portability across cloud and local providers.
- Evaluation, observability, and change governance.

## Options Considered

### Option A — Policy-based model gateway or abstraction

Routes requests based on capability and operational policy and centralizes resilience. It improves consistency but adds a gateway or abstraction layer and policy complexity.

### Option B — Single configured provider with explicit degraded mode

Simpler for learners and easier to operate locally, but it provides less availability and portability.

### Option C — Hard-coded provider calls

Matches parts of the current repository but creates provider coupling and inconsistent failure behavior. It is not suitable for the target maturity.

### Option D — Local/cloud hybrid by policy

Can reduce cost or protect sensitive data, but requires capability, quality, privacy, and operational governance across models.

## Proposed Decision

Retain a provider abstraction and extend it with explicit capability metadata, timeout/retry/backoff policy, health and fallback behavior, privacy/cost/latency routing rules, and deterministic degraded mode. The final routing/gateway shape remains open for human review. Use `OPENAI_API_KEY` for OpenAI-based configuration, sourced from the environment only.

## Consequences

### Positive

- Reduces provider single-point-of-failure risk.
- Makes model selection and degraded behavior explainable.
- Supports privacy, cost, latency, and capability-aware curriculum exercises.

### Negative

- Adds provider compatibility, routing, testing, and configuration complexity.
- Fallback models may produce different quality, schema, latency, or safety behavior.

### Risks

- Fallback can silently weaken quality or policy if not evaluated.
- Routing sensitive data to an unsuitable provider creates privacy risk.
- Retry and fallback can duplicate consequential actions without idempotency.

## Security and Governance Implications

- Provider policy must not override identity, authorization, privacy, or safety requirements.
- `OPENAI_API_KEY` remains external secret input and is never logged or committed.
- Provider, model, prompt, and routing changes require evaluation and change control.
- Data classification may prohibit some provider or local/cloud routes.

## Operational Implications

- Define connect/read/total timeouts, retryable errors, backoff, circuit behavior, and exhaustion outcomes.
- Make routing, fallback, provider errors, and degraded responses observable.
- Core deterministic business functions should remain usable when AI is unavailable where feasible.
- Provider changes require rollback and compatibility evidence.

## Curriculum Implications

Learners should test provider failure, timeout, 429/5xx behavior, fallback, capability mismatch, degraded operation, secret handling, and cost/latency tradeoffs. Provider abstraction alone is not resilience.

## Affected Work Packages

- WP-0021, WP-0022, WP-0025, WP-0026, WP-0030, WP-0031, WP-0036, WP-0039, WP-0040

## Out of Scope

- Implementing routing or fallback now.
- Selecting a provider, gateway, model, cloud region, or deployment SKU.
- Creating or modifying runtime secret configuration.

## Open Questions

- Is a gateway required, or is an in-process abstraction sufficient for the target curriculum?
- Which capabilities and privacy classes determine routing eligibility?
- Which core business functions require deterministic degraded behavior?
- What evaluation threshold is required before fallback is allowed?
