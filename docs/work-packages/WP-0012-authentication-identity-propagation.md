# WP-0012 — Add Authentication and Identity Propagation Exercise

## Status

Blocked

## Purpose

Teach how authenticated user, service, and agent identity flows through AI-assisted requests.

## Background

The current APIs accept a caller-supplied customer ID and have no authentication, identity binding, or attribution. Conversation and order actions are therefore demonstrations rather than accountable operations.

## Scope

- Define identities for users, services, and agents.
- Define request identity propagation across frontend, API, workflow, model, and tool boundaries.
- Define unauthenticated, expired, invalid, and impersonation scenarios.
- Define identity claims required for audit and authorization.

## Out of Scope

- Selecting an identity provider before ADR-0004 approval.
- Implementing login, token issuance, or production IAM.
- Defining all role permissions.

## Dependencies

- ADR-0004 Agent Identity, Authority, and Governance
- WP-0011 Agent Authority Matrix

## Acceptance Criteria

- Protected operations require authenticated identity.
- Caller identity cannot be replaced by a request-body customer ID.
- Identity is propagated to workflow and tool execution context.
- Invalid, expired, and mismatched identities fail safely.
- Test scenarios prove attribution and impersonation resistance.

## Required Evidence

- Identity propagation diagram.
- Claims/identity contract.
- Authentication failure matrix.
- Authorization handoff test plan.

## Risks

- Identity data may be over-propagated into model prompts.
- Demo authentication can be mistaken for production identity assurance.

## Notes

Only the minimum identity data needed for the action should enter model context.
