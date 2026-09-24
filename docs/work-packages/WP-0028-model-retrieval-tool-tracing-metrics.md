# WP-0028 — Add Model, Retrieval, and Tool Tracing and Operational Metrics

## Status

Blocked

## Purpose

Expose the latency, quality, cost, and failure behavior of AI-assisted workflows at the boundaries where diagnosis requires evidence.

## Background

The current repository cannot show model latency, token usage, retrieval scores, tool calls, retry counts, or cost. The multi-agent pipeline reports only aggregate elapsed time.

## Scope

- Define spans/events for model, embedding, retrieval, reranking, workflow, and tool operations.
- Define latency, error, retry, token, cost, and quality metrics.
- Define sampling, retention, and redaction requirements.
- Define dashboards or reports needed for curriculum evidence.

## Out of Scope

- Selecting a telemetry vendor.
- Implementing distributed tracing.
- Treating metrics as durable business audit records.

## Dependencies

- ADR-0011 Observability and Audit
- WP-0027 Structured Logging and Correlation IDs
- WP-0020 Retrieval Benchmark Dataset and Metrics

## Acceptance Criteria

- A workflow trace identifies each model, retrieval, and tool step.
- Metrics distinguish provider, model, operation, outcome, and latency.
- Token/cost data is captured where providers expose it, with explicit unknown handling.
- Retrieval metrics include candidate count and selected results where permitted.
- Telemetry can diagnose timeout, retry, authorization denial, and tool failure.

## Required Evidence

- Trace/span catalogue.
- Metrics schema and dashboard/report requirements.
- Redacted example traces.
- Operational diagnosis scenarios.

## Risks

- Prompt and document content may be sensitive.
- Sampling can hide rare but consequential failures.

## Notes

Operational telemetry and accountability/audit records must remain conceptually separate.
