# WP-0008 — Add Tool Argument Validation and Negative Tests

## Status

In Progress

## Purpose

Ensure model-selected tool calls cannot execute with invalid, incomplete, unauthorized, or unsafe arguments.

## Background

Current tool methods accept model-derived values with limited checks. Invalid SKUs, empty identifiers, malformed reasons, and invalid durations are not comprehensively rejected or tested.

## Scope

- Define validation rules per tool argument.
- Define normalization and rejection behavior.
- Add planning requirements for malformed, boundary, adversarial, and unknown arguments.
- Define validation errors that are safe to expose to users and operators.

## Out of Scope

- Implementing tool contracts themselves.
- Implementing authorization policy.
- Adding live downstream integrations.

## Dependencies

- ADR-0002 Tool Calling
- ADR-0009 AI Security
- WP-0007 Typed Tool Contracts
- WP-0013 Tool-Level Authorization

## Acceptance Criteria

- Required, optional, range, enum, format, and cross-field validation rules are defined.
- Invalid arguments fail before any side effect.
- Unknown fields and tools have deterministic behavior.
- Negative tests cover empty, malformed, boundary, and hallucinated values.
- Validation failures are observable without logging sensitive values.

## Required Evidence

- Tool validation matrix.
- Negative-test catalogue.
- Example rejected requests and error contracts.
- Proof that rejected calls produce no side effect.

## Risks

- Validation duplicated across layers may drift.
- Overly broad coercion can conceal model errors.

## Notes

Validation must be deterministic and independent of prompt wording.
