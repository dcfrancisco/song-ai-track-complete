# WP-0004 — Introduce Durable Persistence and Migrations Lab

## Status

In Progress

## Purpose

Move the curriculum beyond file and in-memory state by defining a durable persistence exercise with schema and migration discipline.

## Background

The current catalog is stored in JSON and conversations, vectors, and workflow state are process-local. There is no authoritative database model, migration process, transaction boundary, or persistence integration test.

## Scope

- Define authoritative entities for catalog, conversations, workflow state, and relevant business actions.
- Define schema ownership, migrations, seed data, and rollback expectations.
- Separate durable business state from transient prompts, embeddings, and model context.
- Define persistence failure and consistency scenarios.

## Out of Scope

- Implementing the equivalent persistence runtime in Tracks B and C.
- Implementing repositories, migrations, or runtime services.
- Designing the complete order-management domain.

## Dependencies

- ADR-0001 Persistent Application and Workflow State
- WP-0006 Versioned API and Interface Contracts

## Acceptance Criteria

- Authoritative and transient data are explicitly classified.
- Every proposed entity has ownership, lifecycle, and integrity rules.
- Migration forward, rollback, and incompatible-change behavior is defined.
- Persistence failure behavior is specified for reads and writes.
- The curriculum exercise requires evidence after application restart.

## Required Evidence

- Data model and lifecycle diagram.
- Migration and rollback plan.
- Persistence failure matrix.
- Proposed integration-test scenarios.

## Risks

- Persistence complexity may obscure the AI learning goals.
- Treating model output as authoritative data could bypass business validation.

## Notes

The approved bootcamp working direction is SQLite. Track A provides the first runnable migration and durable workflow foundation; the broader track implementations and full migration test evidence remain incomplete.
