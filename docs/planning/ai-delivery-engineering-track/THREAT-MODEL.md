# AI Bootcamp Threat Model Seed

## Trust boundaries

- learner/user input → API
- model output → deterministic parser and tool contract
- retrieved catalog content → prompt context
- tool boundary → business state
- approval/authority context → consequential action

## Key threats and controls

| Threat | Required control |
|---|---|
| Direct prompt injection | Treat user instructions as untrusted; enforce policy in application code |
| Retrieved prompt injection | Mark retrieved content untrusted; validate tool requests outside the model |
| Unauthorized action | Actor/authority and allowed-tool checks before execution |
| Malicious parameters | Typed schema, range, identifier, and domain validation |
| Duplicate action | Durable idempotency key and action record |
| Secret disclosure | Never place credentials in prompts, logs, frontend, or audit details |
| False completion | Deterministic completion verification and persisted state |

A prompt is not a security or governance boundary.
