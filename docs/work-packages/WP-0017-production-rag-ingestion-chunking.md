# WP-0017 — Add Production-Oriented RAG Ingestion and Chunking Pipeline

## Status

Blocked

## Purpose

Extend the introductory in-memory product-vector demo into a document lifecycle and retrieval pipeline suitable for engineering evaluation.

## Background

Current RAG embeds whole product records into process memory. It has no ingestion source model, chunking policy, document identity, provenance, or recoverable indexing process.

## Scope

- Define source documents, document identity, versions, chunks, and ingestion jobs.
- Define chunking rules and preservation of headings, fields, and provenance.
- Define indexing lifecycle: discovered, processing, indexed, failed, superseded, deleted.
- Define reprocessing and partial-index behavior.

## Out of Scope

- Selecting the vector-store technology.
- Defining authorization filters in detail.
- Implementing reranking or evaluation datasets.

## Dependencies

- ADR-0007 Production-Oriented RAG
- ADR-0001 Persistent State
- WP-0004 Durable Persistence and Migrations

## Acceptance Criteria

- Every chunk maps to a source document and version.
- Chunking is deterministic for the same source and configuration.
- Failed ingestion does not silently replace a valid prior index.
- Reindexing behavior is defined for changed, deleted, and malformed documents.
- Retrieval results can identify their source and version.

## Required Evidence

- Ingestion and chunking design.
- Document/chunk data model.
- Index lifecycle diagram.
- Reprocessing and failure matrix.

## Risks

- Poor chunking can reduce retrieval quality and citation precision.
- Reindexing can expose mixed document versions.

## Notes

Retrieved content remains untrusted input even when it comes from an approved source.
