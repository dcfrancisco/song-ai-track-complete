# ADR-0001 — Persistent Application and Workflow State

## Status

Proposed

## Context

The current tracks rely on JSON files and process-local memory. Catalog data may be written to disk, while chat sessions, retrieval indexes, and agent-like workflow state are lost on restart. There is no authoritative state model, migration discipline, transaction boundary, or defined recovery behavior.

The curriculum needs durable state to teach restart recovery, idempotency, auditability, RAG metadata lifecycle, and bounded workflows. It must remain portable enough for learners to run locally and realistic enough to support failure exercises.

## Decision Drivers

- Durability and restart/resume behavior.
- Clear separation of authoritative business state from transient AI context.
- Migration, rollback, and consistency testability.
- Curriculum portability and operational realism.
- Support for idempotency, audit, recovery, and brownfield work.
- Cost, setup complexity, and local developer experience.

## Options Considered

### Option A — Relational database as primary durable store

Provides transactions, migrations, constraints, and familiar integration testing. It introduces schema and environment complexity.

### Option B — Document or key-value persistence

Can fit workflow/session records and simplify some local setup. It may make relational integrity, cross-entity consistency, and migration teaching less direct.

### Option C — Separate stores by state type

Uses fit-for-purpose stores for business state, workflow state, vectors, and transient context. It can model real systems well but increases operational and curriculum complexity.

### Option D — Continue file/in-memory state

Preserves beginner simplicity but cannot demonstrate durable recovery, concurrency, audit, or enterprise delivery competency.

## Proposed Decision

Adopt a durable persistence architecture for authoritative application and workflow state. The specific product and whether all state uses one store remain open for human review. Business state, workflow state, audit state, RAG metadata, and transient AI context must have explicitly defined authority and lifecycle.

## Consequences

### Positive

- Enables restart recovery, migrations, idempotency, audit, and realistic integration tests.
- Makes state transitions and ownership reviewable.
- Supports brownfield and incident exercises.

### Negative

- Adds schema, migration, setup, backup, and cleanup complexity.
- Requires explicit handling of sensitive conversation and audit data.

### Risks

- Treating model output or embeddings as authoritative business state.
- Partial migrations or stale indexes creating inconsistent behavior.
- Local setup complexity reducing learner participation.

## Security and Governance Implications

- Durable state must have ownership, access, retention, and deletion rules.
- Identity and authorization must apply before reading or changing protected state.
- Audit records require stronger integrity and access controls than debug logs.
- Conversation and prompt data must not be retained by default without a defined purpose.

## Operational Implications

- Restart, backup/restore, migration, rollback, and corruption behavior must be defined.
- Persistence failures must be observable and must not silently corrupt business state.
- State transitions need recovery and reconciliation semantics.

## Curriculum Implications

Learners should distinguish transient model context from authoritative state and demonstrate migrations, restart recovery, consistency, and failure handling rather than only reading/writing a file.

## Affected Work Packages

- WP-0004, WP-0005, WP-0015, WP-0017, WP-0029, WP-0039

## Out of Scope

- Selecting a specific database product at this stage.
- Designing every business entity.
- Selecting a vector database or workflow framework.

## Open Questions

- Which persistence option best balances portability, transactions, and curriculum realism?
- Which state categories require durable storage versus rebuildable storage?
- What migration and rollback level is required for the capstone?
