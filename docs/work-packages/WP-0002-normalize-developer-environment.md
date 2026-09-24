# WP-0002 — Normalize Developer Environment Across Tracks A/B/C

## Status

In Progress

## Purpose

Define equivalent, stack-aligned, reproducible environment requirements for all three curriculum tracks.

## Background

Tracks A and B have devcontainer definitions with configuration drift, while Track C has none. Existing labels and setup commands do not consistently match the actual Node/Express, Spring Boot/Angular, and Spring Boot/React stacks.

## Scope

- Align environment requirements with each track's actual stack.
- Provide stack-aligned `.devcontainer/devcontainer.json` definitions for Tracks A, B, and C.
- Define equivalent frontend and backend dependency provisioning through post-create commands.
- Forward the existing `LLM_API_KEY` and additive `OPENAI_API_KEY` from the host without embedding values.
- Preserve existing provider selection; document OpenAI only as an optional new advanced-lab convention.
- Define parity requirements for future persistence, vector, mock, and telemetry dependencies.

## Out of Scope

- Choosing `.devcontainer`, Docker/Compose, or a hybrid before ADR-0012 approval.
- Implementing Docker Compose, service containers, databases, vector stores, or telemetry services.
- Adding application features or data services.

## Dependencies

- ADR-0012 Developer Environment

## Acceptance Criteria

- Track A is documented as Node/Express plus React.
- Track B is documented as Spring Boot plus Angular.
- Track C receives equivalent reproducibility requirements for Spring Boot plus React.
- Cross-track naming residue is identified and removed during implementation.
- Frontend and backend setup commands are explicit for each track.
- Existing `LLM_API_KEY` forwarding remains available for the foundation labs.
- `OPENAI_API_KEY` is additive and forwarded only through host environment references.
- `LLM_API_KEY` is documented only as a deprecated compatibility fallback.
- Secret values are never committed or embedded in environment artifacts.

## Required Evidence

- Environment comparison matrix.
- Required dependency and variable matrix.
- Setup/readiness checklist.
- Track A, B, and C devcontainer definitions.
- Validation of devcontainer JSON parsing and credential forwarding references.
- Known limitation record for deferred dependent services and host-specific tooling.

## Risks

- Container or service requirements may exceed beginner-machine resources.
- Track parity can become superficial if only tool versions are aligned.

## Notes

The current implementation supplies developer workspace definitions only; the final broader environment strategy remains subject to ADR-0012. This WP does not authorize Docker Compose, dependent-service implementation, or provider routing/fallback redesign.
