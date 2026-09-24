# WP-0027 — Add Structured Logging and Correlation IDs

## Status

In Progress

## Purpose

Make requests and workflow steps diagnosable across frontend, backend, model, retrieval, and tool boundaries.

## Background

Current observability consists mostly of console output and aggregate pipeline duration. There are no structured events or request correlation identifiers.

## Scope

- Define structured application log fields.
- Define correlation and causation ID propagation.
- Define redaction and sensitive-data handling.
- Define log levels, event names, retention, and operator-facing diagnostics.
- Define boundaries for request, model, retrieval, workflow, and tool events.

## Out of Scope

- Selecting a logging vendor.
- Full distributed tracing and metrics implementation.
- Persisting audit records as operational logs.

## Dependencies

- ADR-0011 Observability, Traceability, and Audit
- WP-0012 Authentication and Identity Propagation

## Acceptance Criteria

- One request can be traced across all relevant application events.
- Correlation IDs are generated, propagated, and validated at boundaries.
- Logs exclude API keys, secrets, and prohibited sensitive content.
- Error events include actionable classification and context.
- Malformed or missing correlation IDs have defined behavior.

## Required Evidence

- Logging schema.
- Correlation propagation diagram.
- Redaction rules.
- Example traces for success and failure scenarios.

## Risks

- Logging prompts or retrieved data may create a new data-leak path.
- Excessive structured logging can increase cost and noise.

## Notes

Correlation IDs support diagnosis; they are not identity or authorization.
