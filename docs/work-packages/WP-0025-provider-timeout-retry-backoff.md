# WP-0025 — Add Provider Timeout, Retry, and Backoff Behavior

## Status

Blocked

## Purpose

Define safe transient-failure handling for model and embedding provider calls.

## Background

Current provider calls use blocking HTTP operations without a clearly defined timeout, retry classification, backoff, or cancellation policy. Provider errors generally surface as generic failures.

## Scope

- Classify retryable and non-retryable provider failures.
- Define connect, read, total, and cancellation timeouts.
- Define retry count, delay, jitter, and retry budget.
- Define behavior for 429, 5xx, malformed responses, authentication failures, and network errors.
- Define observability requirements for retries.

## Out of Scope

- Selecting a provider gateway or fallback provider.
- Implementing provider routing.
- Retrying consequential tool side effects without idempotency.

## Dependencies

- ADR-0010 Model Provider Routing and Resilience
- ADR-0006 Idempotency and Transactions
- WP-0015 Idempotency and Duplicate-Action Protection

## Acceptance Criteria

- Only explicitly classified transient errors are retried.
- Authentication, validation, contract, and policy errors fail immediately.
- Retry count and delays are bounded and configurable.
- Timeout and retry exhaustion produce defined user/operator outcomes.
- Retry attempts include correlation and provider metadata without exposing secrets.

## Required Evidence

- Error-classification table.
- Timeout/retry policy.
- Failure-injection test plan.
- Retry telemetry examples.

## Risks

- Retrying non-idempotent operations can duplicate business effects.
- Aggressive retries can amplify provider outages.

## Notes

This WP must coordinate with idempotency and degraded-mode work before consequential calls are retried.
