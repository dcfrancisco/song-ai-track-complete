# WP-0007 — Replace JSON-in-Text Tool Selection with Typed Tool Contracts

## Status

In Progress

## Purpose

Replace prompt-only JSON parsing with an explicit, typed boundary between model decisions and deterministic tool execution.

## Background

The current order agent asks the model to emit JSON text, detects a `tool` field, and dispatches local mock functions. It has no formal schema, native tool contract, or normalized provider boundary.

## Scope

- Define tool names, versions, request schemas, response schemas, and error schemas.
- Define provider-native versus provider-neutral normalization requirements.
- Define unknown-tool, malformed-call, and unsupported-capability behavior.
- Define contract versioning and compatibility expectations.

## Out of Scope

- Implementing business tools.
- Implementing authorization or approval.
- Choosing a specific model provider or SDK.

## Dependencies

- ADR-0002 Agent Tool-Calling and Tool Contract Architecture
- WP-0006 Versioned API and Interface Contracts
- WP-0011 Agent Authority Matrix

## Acceptance Criteria

- Every tool has a machine-readable input and output contract.
- Unknown tools, missing fields, extra fields, and wrong types are rejected deterministically.
- Provider responses are normalized before execution.
- Contract versions and backward-compatibility rules are documented.
- The model cannot directly invoke application code.

## Required Evidence

- Tool contract catalogue.
- Provider-normalization mapping.
- Contract examples and error examples.
- Contract-test plan.

## Risks

- Provider-native features may differ in naming and schema support.
- Overly permissive compatibility logic can recreate text-parsing risks.

## Notes

The implementation must preserve a deterministic application execution boundary.
