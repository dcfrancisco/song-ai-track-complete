# ADR-0012 — Reproducible Developer and Runtime Environment Standard

## Status

Proposed

## Context

Tracks A and B contain `.devcontainer/devcontainer.json` files with configuration drift; Track C has none. Track A is Node.js/Express but uses a Java-oriented base image, and Track B is Angular but contains React-oriented port labeling. Existing setup installs frontend dependencies without fully validating backend readiness, tests, or future supporting services.

The curriculum will eventually need reproducible frontend/backend setup plus optional persistence, vector, mock-integration, and observability services. The mechanism should support learner machines and CI without prematurely selecting an implementation.

OpenAI-based examples must read `OPENAI_API_KEY` from the host environment. The secret must never be hardcoded, committed, copied into documentation, placed in Dockerfiles/devcontainers/Compose files/source/tests, or emitted in logs. Future containers may receive it securely from the host when implementation begins.

## Decision Drivers

- Developer experience and learner setup friction.
- Windows, macOS, and Linux portability.
- VS Code support and track-specific stack alignment.
- Frontend/backend readiness and service health validation.
- Future database, vector, mock-service, and telemetry requirements.
- Reproducibility, CI compatibility, resource usage, and secret safety.

## Options Considered

### Option A — `.devcontainer` as primary environment definition

Provides an integrated VS Code workspace and can install track tools. It may require additional service-container handling and can be less convenient outside VS Code.

### Option B — Docker/Compose as primary environment definition

Provides runtime parity and explicit dependent services. It adds container and resource complexity and may require a separate developer workspace experience.

### Option C — Hybrid

Uses a devcontainer for the learner workspace and Docker/Compose or equivalent service definitions for databases, vector stores, mocks, and observability. It offers flexibility but increases conceptual and operational surface area.

## Proposed Decision

Adopt a reproducible container-based environment standard with stack-aligned track definitions, backend/frontend validation, readiness checks, optional supporting services, CI compatibility, and external secret injection. The final choice among `.devcontainer`, Docker/Compose, and hybrid remains open for human review. No runtime implementation is selected by this ADR.

## Consequences

### Positive

- Reduces environment drift and setup failures.
- Supports realistic dependency and delivery exercises.
- Makes service readiness and secret handling explicit.

### Negative

- Container tooling adds resource, platform, and debugging complexity.
- Multiple services can increase learner setup and maintenance cost.

### Risks

- Environment parity can be claimed while runtime dependencies still differ.
- Secret forwarding may be misconfigured or accidentally logged.
- A container-first path may be inaccessible on constrained machines.

## Security and Governance Implications

- `OPENAI_API_KEY` is the documented OpenAI environment variable and must remain external to committed artifacts.
- Secrets are injected at runtime, never copied into images, files, logs, diagnostics, or fixtures.
- Service identities and permissions must follow least privilege as supporting services are added.
- Environment and dependency changes require review and reproducibility evidence.

## Operational Implications

- Environment setup must validate tools, dependencies, backend/frontend build, service readiness, and tests.
- Required services need health/readiness semantics and failure guidance.
- Local and CI workflows should share validation expectations.
- Environment changes need rollback or versioning guidance.

## Curriculum Implications

Learners should be able to reproduce a track, diagnose readiness failures, understand service dependencies, run the required validation, and explain which environment mechanism was selected and why.

## Affected Work Packages

- WP-0002, WP-0003, WP-0036, WP-0039

## Out of Scope

- Creating or modifying devcontainers, Dockerfiles, Compose files, deployment manifests, or CI.
- Selecting a cloud runtime.
- Adding actual database, vector, mock, or observability services now.

## Open Questions

- Which environment option best balances VS Code experience, portability, service parity, and CI reuse?
- Which supporting services are required at each curriculum level?
- How should constrained-machine learners access equivalent exercises?
- What secure host-to-environment secret injection mechanism will be approved?
