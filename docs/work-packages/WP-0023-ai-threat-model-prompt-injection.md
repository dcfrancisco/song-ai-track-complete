# WP-0023 — Add AI Threat Model and Prompt-Injection Lab

## Status

Blocked

## Purpose

Teach systematic threat modeling for user prompts, retrieved content, model outputs, tools, identities, and external data.

## Background

Current prompts treat user input and retrieved catalog content as trusted context. There is no threat model for instruction injection, data exfiltration, unsafe output, or tool abuse.

## Scope

- Define AI-specific assets, actors, trust boundaries, and abuse cases.
- Cover direct prompt injection, indirect document injection, context manipulation, and instruction-conflict attacks.
- Define controls outside the model.
- Define adversarial test categories and severity.

## Out of Scope

- Selecting a security framework as a mandatory implementation standard.
- Implementing security controls.
- Treating prompt wording as authorization.

## Dependencies

- ADR-0009 AI Security
- ADR-0004 Governance and Authority
- WP-0011 Agent Authority Matrix

## Acceptance Criteria

- Every AI workflow has documented assets, trust boundaries, threats, and controls.
- User input, retrieved content, model output, and tools are classified by trust.
- Threats include unauthorized retrieval, tool misuse, secret exposure, and unsafe output.
- Each high-risk threat has a testable mitigation requirement.
- Residual risk and owner are documented.

## Required Evidence

- AI threat model.
- Trust-boundary diagram.
- Abuse-case catalogue.
- Mitigation and residual-risk matrix.

## Risks

- Threat models can become checklist exercises without executable tests.
- Model-based detection may create false assurance.

## Notes

The core teaching principle is that a prompt is not a security or governance boundary.
