# ADR-0002 — Agent Tool-Calling and Tool Contract Architecture

## Status

Proposed

## Context

The current order agent asks a model to emit JSON text, detects a `tool` field, parses the text, and dispatches local mock functions. This is a useful introductory demonstration but does not provide a reliable execution contract, typed validation, provider normalization, or a deterministic boundary between model output and business actions.

## Decision Drivers

- Typed inputs, outputs, and errors.
- Deterministic validation and authorization boundaries.
- Provider portability and capability differences.
- Tool-result handling and multi-step compatibility.
- Testability, observability, and curriculum clarity.
- Avoidance of direct model control over business code.

## Options Considered

### Option A — Native provider tool/function calling behind normalized contracts

Uses provider-supported structured calls where available while exposing an application-level contract. It improves call semantics but requires provider capability handling.

### Option B — Provider-neutral structured-call envelope

Uses strict application schemas independent of native provider features. It maximizes portability but may require more adapter logic and may lose provider-specific behavior.

### Option C — JSON-in-text parsing

Easy to demonstrate and provider-neutral, but fragile under malformed output, extra prose, schema drift, injection, and ambiguity. It is not the production target.

## Proposed Decision

Use typed application-level tool contracts. Native provider tool/function calling may be used where supported, but every call must be normalized, schema-validated, authorized, observable, and executed by deterministic application code. The model may request an action; it must never directly execute one.

## Consequences

### Positive

- Clear execution boundary and stronger validation.
- Better support for multi-step workflows and contract tests.
- Provider differences become explicit rather than hidden in prompts.

### Negative

- Requires contract versioning and provider adapters.
- Some providers may support different schema or tool-call capabilities.

### Risks

- Falling back to permissive text parsing can reintroduce unsafe behavior.
- Tool result semantics may be inconsistent across providers.

## Security and Governance Implications

- A prompt is not a security or governance boundary.
- Tool authorization is independent of model output.
- Unknown tools, fields, and arguments are rejected before side effects.
- Identity, authority, approval, audit, and least privilege are enforced outside the model.

## Operational Implications

- Tool calls require correlation, timeout, retry, result, and failure events.
- Contract changes require compatibility review.
- Tool execution must expose deterministic success, failure, and unknown-outcome states.

## Curriculum Implications

Learners should understand the difference between intent selection, structured tool calling, validation, authorization, execution, and verified completion. Multiple prompt roles do not by themselves create a multi-agent system.

## Affected Work Packages

- WP-0007, WP-0008, WP-0009, WP-0010, WP-0011, WP-0013, WP-0030, WP-0039

## Out of Scope

- Selecting one provider SDK as the universal implementation.
- Defining individual business-tool policies.
- Implementing tool integrations in this ADR.

## Open Questions

- Which normalized contract representation best supports the selected provider set?
- Which native capabilities are mandatory versus optional?
- How should unsupported provider features degrade without weakening safety?
