# WP-0020 — Add Retrieval Benchmark Dataset and Metrics

## Status

Blocked

## Purpose

Replace visual inspection of search results with repeatable evidence of retrieval quality.

## Background

The current RAG returns top-K cosine matches without a benchmark, expected results, relevance labels, recall measurement, or regression threshold.

## Scope

- Define representative query types and relevance labels.
- Define dataset versioning and split strategy.
- Define retrieval metrics such as hit rate, recall@K, precision@K, MRR, or nDCG where appropriate.
- Define metadata, freshness, and authorization evaluation cases.

## Out of Scope

- Selecting a specific evaluation platform.
- Measuring answer quality beyond retrieval-specific signals.
- Implementing the retrieval system.

## Dependencies

- ADR-0007 Production RAG
- ADR-0008 AI Evaluation
- WP-0017 Production RAG Ingestion and Chunking
- WP-0018 RAG Metadata, Freshness, and Versioning

## Acceptance Criteria

- Dataset includes easy, ambiguous, out-of-domain, stale, and authorization-constrained queries.
- Relevance labels and annotation guidance are documented.
- Metrics and threshold interpretation are defined.
- Retrieval regressions are detectable between index/configuration changes.
- Failures distinguish retrieval misses from generation errors.

## Required Evidence

- Versioned benchmark schema.
- Seed dataset and annotation guide.
- Metric calculation examples.
- Baseline and regression-report format.

## Risks

- Small or biased datasets can create false confidence.
- Exact expected-document matching may penalize valid alternative retrievals.

## Notes

Quality thresholds should be justified by use case and risk, not selected arbitrarily.
