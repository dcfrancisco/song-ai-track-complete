# ADR-0009 — AI Security and Prompt-Injection Defense

## Status

Proposed

## Context

Current prompts and retrieved content are trusted too broadly. There is no systematic threat model for direct or indirect prompt injection, data exfiltration, privilege escalation, unsafe output, secret exposure, or model-directed tool abuse. The current agent parses model text and invokes local mock actions without deterministic authorization.

## Decision Drivers

- Trust-boundary clarity.
- Defense in depth and deterministic enforcement.
- Identity, least privilege, and tool protection.
- Retrieval access control and data minimization.
- Adversarial testability and operational visibility.
- Curriculum portability and understandable controls.

## Options Considered

### Option A — Layered deterministic controls plus model guidance

Uses identity, authorization, validation, retrieval controls, tool constraints, output handling, and monitoring, with prompts as one advisory layer. It is more complex but supports real security boundaries.

### Option B — Model-based classifier or guardrail layer

Adds a model to detect unsafe input/output. It can improve coverage but remains probabilistic and cannot replace deterministic authorization or validation.

### Option C — Prompt-only defense

Easy to teach and useful as a foundation exercise, but inadequate against adversarial or conflicting instructions. It is not the target architecture.

## Proposed Decision

Adopt layered AI security controls. Treat user prompts, retrieved content, model output, tool calls, and external data as untrusted. Enforce identity, authorization, input/output validation, retrieval permissions, tool constraints, secret handling, and audit outside the model. Threat-model each consequential workflow.

## Consequences

### Positive

- Aligns security with actual execution boundaries.
- Supports adversarial QA and data-access exercises.
- Prevents prompts from becoming the only policy mechanism.

### Negative

- Requires policy, validation, threat-model, and test maintenance.
- May limit some model flexibility and require explicit escalation.

### Risks

- Finite attack tests can create false confidence.
- Logging and evaluation data can expose the same secrets the controls protect.
- Overly permissive fallback behavior can bypass security.

## Security and Governance Implications

- A prompt is not a security or governance boundary.
- Authorization is deterministic and independent of model output.
- Retrieved instructions cannot override system, identity, or tool policy.
- Secrets are never placed in prompts or logs unless explicitly justified and protected.
- Denied actions, escalations, and policy failures are attributable and auditable.

## Operational Implications

- Security failures fail closed for consequential actions.
- Security controls need redacted telemetry and incident response paths.
- Policy and threat-model changes require regression and change-control evidence.

## Curriculum Implications

Learners should identify trust boundaries, attack paths, and residual risks, then prove prompt-injection resistance, authorization enforcement, safe output handling, and no-side-effect denial behavior.

## Affected Work Packages

- WP-0008, WP-0013, WP-0019, WP-0023, WP-0024, WP-0030, WP-0033, WP-0039, WP-0040

## Out of Scope

- Selecting a security product or enterprise threat-model framework.
- Claiming prompt filters alone provide authorization.
- Replacing conventional application security testing.

## Open Questions

- Which trust-boundary controls are mandatory for each maturity level?
- Which data classes may enter model context?
- Which security events require durable audit versus operational telemetry?
