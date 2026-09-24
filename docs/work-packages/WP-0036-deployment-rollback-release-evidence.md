# WP-0036 — Add Deployment, Rollback, and Release-Evidence Exercise

## Status

Blocked

## Purpose

Teach release discipline and operational ownership without assuming a specific deployment mechanism prematurely.

## Background

The current repository contains local run instructions but no deployment process, release checks, rollback procedure, migration strategy, or evidence that a change can be safely reversed.

## Scope

- Define build, validation, release, deployment, health, and rollback stages.
- Define configuration and secret-handling expectations.
- Define compatibility checks for API, data, prompts, models, and indexes.
- Define rollback versus forward-fix criteria.
- Define release evidence required for learner completion.

## Out of Scope

- Choosing Docker, Compose, `.devcontainer`, or a cloud platform.
- Implementing deployment manifests or pipelines.
- Performing an actual external deployment in this planning WP.

## Dependencies

- ADR-0012 Developer Environment
- WP-0006 API and Interface Contracts
- WP-0018 RAG Versioning
- WP-0022 Prompt/Model Regression Gate
- WP-0027 Structured Logging and Correlation IDs
- WP-0028 Model, Retrieval, and Tool Tracing and Metrics

## Acceptance Criteria

- Release steps and owners are explicit.
- Health/readiness and rollback criteria are measurable.
- Configuration and secret handling are documented without committing secrets.
- Data, prompt, model, and index compatibility risks are addressed.
- Release evidence proves validation before and after deployment and rollback.

## Required Evidence

- Release checklist.
- Rollback runbook.
- Compatibility matrix.
- Validation and rollback evidence format.

## Risks

- Environment choice may constrain the exercise prematurely.
- Rollback of data or model/index changes may not be symmetric.

## Notes

This WP defines requirements only; ADR-0012 determines the eventual environment mechanism.
