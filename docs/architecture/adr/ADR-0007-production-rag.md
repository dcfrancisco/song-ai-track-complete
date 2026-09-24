# ADR-0007 — Production-Oriented RAG Architecture

## Status

Proposed

## Context

The current RAG is an in-memory product-vector demonstration. It embeds whole product records, performs brute-force cosine similarity, and inserts top results into a prompt. It does not model document lifecycle, chunking, metadata filters, reranking, citations, ACL-aware retrieval, freshness, versioning, recoverable indexing, or retrieval evaluation.

The architecture must preserve this as useful Level 1 material while defining a higher-level target rather than overengineering the foundation track.

## Decision Drivers

- Retrieval quality and relevance.
- Source traceability and citation precision.
- Freshness, versioning, and index recovery.
- Authorization and tenant isolation.
- Operational cost and learner portability.
- Evaluability, security, and observability.

## Options Considered

### Option A — Vector index with metadata-aware retrieval

Supports document/chunk metadata, filtering, and semantic retrieval. It introduces a separate service or store and lifecycle operations.

### Option B — Relational store with vector capability

Can consolidate authoritative metadata and vectors and simplify some local environments. Scale and feature fit depend on the selected product.

### Option C — Hybrid lexical/vector retrieval with optional reranking

Improves exact-match and semantic behavior and can provide better quality evidence, but adds ranking complexity and tuning.

### Option D — Keep in-memory brute force

Appropriate for the introductory demonstration but insufficient for durable, secure, evaluable RAG.

## Proposed Decision

Retain the current simple RAG as Level 1 foundation material and add a production-oriented RAG architecture with explicit ingestion, deterministic chunking, source/version metadata, authorization-aware filtering, citations, freshness, recoverable index lifecycle, and evaluation. The store, hybrid retrieval, reranking, and exact chunking strategy remain open for human review.

## Consequences

### Positive

- Separates beginner concepts from production concerns.
- Enables quality measurement, source traceability, ACL enforcement, and freshness handling.
- Supports malicious-document and index-recovery exercises.

### Negative

- Adds ingestion, indexing, metadata, storage, and evaluation complexity.
- Requires additional local services or carefully bounded alternatives.

### Risks

- Incorrect ACL metadata can expose unauthorized content.
- Poor chunking or stale indexes can produce plausible but wrong answers.
- Retrieved content can contain prompt-injection instructions.

## Security and Governance Implications

- Retrieved content is untrusted input, not policy.
- Authorization filters execute before generation and are independent of the model.
- Source, version, owner, retention, and deletion metadata require governance.
- Citations must not reveal unauthorized source existence or content.

## Operational Implications

- Ingestion and reindexing need status, retry, failure, and rollback behavior.
- Index changes must be observable and recoverable.
- Freshness and version policy must define stale-data behavior.

## Curriculum Implications

Learners should first understand embed/retrieve/generate, then prove chunking, metadata filtering, freshness, citations, ACL-aware retrieval, malicious-document handling, and retrieval metrics without confusing semantic similarity with production search.

## Affected Work Packages

- WP-0017, WP-0018, WP-0019, WP-0020, WP-0021, WP-0023, WP-0024, WP-0028, WP-0039

## Out of Scope

- Selecting a specific vector database or embedding provider.
- Requiring reranking for every beginner search use case.
- Treating the Level 1 in-memory implementation as production architecture.

## Open Questions

- Which storage option best balances portability, ACL filtering, and lifecycle realism?
- Is hybrid retrieval required for the capstone or optional?
- What citation granularity and freshness threshold are appropriate?
