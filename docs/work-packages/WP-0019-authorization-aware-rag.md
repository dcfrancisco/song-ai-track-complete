# WP-0019 — Add Authorization-Aware Retrieval and Malicious-Document Exercise

## Status

Blocked

## Purpose

Teach that retrieval is a data-access operation and that documents may contain malicious or instruction-like content.

## Background

Current RAG retrieves all products for every caller and inserts them directly into the generation prompt. There is no identity-aware filtering, tenant isolation, document trust model, or malicious-document handling.

## Scope

- Define document and chunk access labels.
- Define identity-aware retrieval filters.
- Define malicious-document and instruction-in-content scenarios.
- Define separation between retrieved facts and executable instructions.
- Define denial and redaction behavior.

## Out of Scope

- Implementing authentication or the authorization engine.
- Selecting a vector database.
- Defining all prompt-injection defenses.

## Dependencies

- ADR-0007 Production RAG
- ADR-0009 AI Security
- ADR-0004 Governance and Authority
- WP-0012 Authentication and Identity Propagation
- WP-0023 AI Threat Model and Prompt Injection

## Acceptance Criteria

- Unauthorized documents are excluded before generation.
- Cross-tenant retrieval attempts fail without revealing existence or content.
- Retrieved instructions cannot alter tool or policy authority.
- Malicious documents are detectable, isolated, or safely treated as untrusted data.
- Authorization and malicious-content scenarios are automated test requirements.

## Required Evidence

- Retrieval trust-boundary diagram.
- Access-label and filtering matrix.
- Malicious-document examples.
- Authorization-aware retrieval test plan.

## Risks

- Metadata mistakes can create silent data exposure.
- A model-based content classifier cannot replace deterministic access control.

## Notes

The exercise should include both unauthorized factual content and authorized content containing hostile instructions.
