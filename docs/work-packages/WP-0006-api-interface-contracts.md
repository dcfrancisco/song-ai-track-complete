# WP-0006 — Define Versioned API and Interface Contracts

## Status

Complete

## Purpose

Teach and require explicit, documented, versioned where needed, and testable contracts across frontend, backend, model, tool, and external-service boundaries.

## Background

The current REST endpoints and frontend clients are understandable from source, but request schemas, error behavior, compatibility expectations, and change governance are not maintained as explicit contracts.

## Scope

- Define request and response schemas.
- Define validation and error contracts.
- Define versioning, backward compatibility, examples, and change-management expectations.
- Define contract-test requirements for REST and non-REST interfaces.
- Permit OpenAPI where required by client, project, platform, or team standards.

## Out of Scope

- Mandating OpenAPI for every REST API.
- Mandating REST as the only integration style.
- Implementing or changing current endpoints.

## Dependencies

- None

## Acceptance Criteria

- Another team can integrate without reverse-engineering controller or source code.
- Breaking and compatible changes are distinguishable.
- Error behavior and validation are part of the contract.
- Examples cover successful, invalid, unauthorized, and dependency-failure responses.
- Contract tests are required evidence.
- OpenAPI is mandatory only when an applicable external or team standard requires it.

## Required Evidence

- Reviewed contract standard.
- Sample contract and compatibility change.
- Contract-test plan.
- Contract ownership and change-review rules.

## Risks

- Contract documents can drift unless validated in automation.
- Over-specifying a tool can distract from interface behavior and compatibility.

## Notes

The requirement is explicit, testable interface discipline, not a universal documentation technology.
