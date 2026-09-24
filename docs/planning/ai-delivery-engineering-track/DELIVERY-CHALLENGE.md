# Production Readiness Challenge Seed

The learner receives symptoms and evidence, not the subsystem name:

- a customer reports an occasional duplicate action;
- operations reports an intermittent API failure;
- a recent configuration change altered AI behavior;
- one automated regression fails while the happy path succeeds;
- an audit record is missing approval evidence.

The learner must reproduce the issue, identify the affected boundary, establish root cause and blast radius, remediate safely, prove regression behavior, and provide release/rollback evidence. The challenge deliberately does not disclose whether the defect is in persistence, authorization, model handling, retrieval, integration, or observability.
