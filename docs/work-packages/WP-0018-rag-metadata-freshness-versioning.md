# WP-0018 — Add RAG Metadata Filtering, Freshness, and Versioning

## Status

Blocked

## Purpose

Make retrieval results constrained by metadata, freshness, and document version rather than similarity alone.

## Background

Current retrieval scans all in-memory product vectors and returns top-K matches. It has no metadata filters, timestamps, source versions, stale-data policy, or index consistency guarantees.

## Scope

- Define metadata fields required for filtering and citation.
- Define freshness windows and stale-document behavior.
- Define active, superseded, deleted, and quarantined versions.
- Define retrieval filters and their interaction with ranking.

## Out of Scope

- Selecting the vector-store implementation.
- Implementing tenant authorization filters.
- Defining the full retrieval benchmark.

## Dependencies

- ADR-0007 Production-Oriented RAG
- WP-0017 Production RAG Ingestion and Chunking

## Acceptance Criteria

- Retrieval can exclude stale, deleted, superseded, and disallowed versions.
- Filter behavior is deterministic and documented.
- Freshness failures are visible rather than silently returning stale answers.
- Results expose document/chunk/version metadata needed for citations.
- Reindex and version transitions are testable.

## Required Evidence

- Metadata and versioning schema.
- Freshness policy and failure matrix.
- Filter behavior examples.
- Stale-data test plan.

## Risks

- Incorrect timestamps or version selection can produce plausible but outdated answers.
- Filters applied after generation are too late to protect data.

## Notes

Authorization and tenant filtering must be enforced before retrieved content enters model context.
