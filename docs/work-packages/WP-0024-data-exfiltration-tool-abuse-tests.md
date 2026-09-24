# WP-0024 — Add Data-Exfiltration and Tool-Abuse Adversarial Tests

## Status

Blocked

## Purpose

Turn AI security threats into executable adversarial scenarios that prove data and tool boundaries hold under hostile inputs.

## Background

The repository has no tests for malicious prompts, hostile retrieved documents, unauthorized data requests, prompt leakage, or model-selected tool abuse.

## Scope

- Define adversarial inputs for direct and indirect injection.
- Test attempts to retrieve another user's or tenant's data.
- Test attempts to expose secrets, system prompts, internal errors, or hidden metadata.
- Test unauthorized, excessive, repeated, or malformed tool requests.
- Define expected refusal, denial, escalation, and audit outcomes.

## Out of Scope

- Implementing the security controls.
- Performing destructive security testing against external systems.
- Replacing conventional application security testing.

## Dependencies

- ADR-0009 AI Security
- ADR-0004 Governance and Authority
- WP-0013 Tool-Level Authorization
- WP-0023 AI Threat Model and Prompt Injection

## Acceptance Criteria

- Adversarial cases cover user prompts, retrieved documents, and tool arguments.
- Unauthorized data is never returned in successful or error responses.
- Unauthorized tools are denied before side effects.
- Security failures are hard failures and are observable.
- Regression tests preserve mitigations across prompt/model changes.

## Required Evidence

- Adversarial test catalogue.
- Expected-result and severity definitions.
- Security test results.
- Evidence of no side effect for denied tool calls.

## Risks

- Test payloads may accidentally contain real secrets or destructive commands.
- Passing a finite attack list does not prove complete security.

## Notes

Use synthetic identities, documents, and secrets in all curriculum evidence.
