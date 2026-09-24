# Architecture Artifact Selection Guide

Choose the artifact that explains, governs, tests, or operates the system. Do not create every artifact for every feature.

| Artifact | Use when |
|---|---|
| ADR | A meaningful architectural choice has viable alternatives and lasting consequences. |
| Sequence diagram | Component interaction, ordering, retries, or handoffs are difficult to explain linearly. |
| State diagram | Workflow, approval, recovery, or lifecycle transitions matter. |
| Threat model | Trust boundaries, data exposure, identity, tools, or consequential actions exist. |
| Failure matrix | External, distributed, AI, stateful, or unreliable dependencies create distinct failure behavior. |
| Interface contract | Systems or teams integrate across a boundary. |
| Runbook | Operators must diagnose, recover, roll back, or support the system. |
| Data/lifecycle model | Data ownership, retention, versioning, migration, or authority matters. |

## Review Criteria

For each selected artifact, the learner should explain:

- What decision, behavior, risk, or operation it clarifies.
- Which audience uses it.
- What evidence validates it.
- How it will remain synchronized with implementation.

If an expected artifact is not created, the learner should justify why it would not add material value.
