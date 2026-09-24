# AI Delivery Engineering Track — Planning Draft

This package contains **planning artifacts only** for review before implementation.

Phase 0 documentation, Phase 1 environment/readiness, and the first Track A persistence/workflow/tool-contract foundation are implemented incrementally. Later phases remain partial and require additional cross-track evidence.

## Status

All ADRs are `Proposed`.
Work package lifecycle states are `Draft`, `In Progress`, `Complete`, or `Blocked` during implementation. ADRs remain Proposed while their documented bootcamp working directions are used.

The recommended dependency-oriented implementation sequence is maintained in [`docs/work-packages/README.md`](../../work-packages/README.md). It is guidance rather than a hard schedule; parallel work remains possible after prerequisite ADRs are approved.

## Structure

- `docs/architecture/adr/` — proposed architecture decision records.
- `docs/work-packages/` — proposed implementation/curriculum work packages.

## Environment direction

The curriculum must provide a reproducible development/runtime environment. The implementation mechanism is intentionally not finalized yet. ADR-0012 evaluates `.devcontainer`, Docker/Compose, and a hybrid approach.

## API contract direction

OpenAPI is **not** mandatory by default. The requirement is an explicit, versioned, testable interface contract. OpenAPI may be selected when appropriate or required by the client/project/platform/team standard.
