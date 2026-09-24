# Interface Contract Discipline

## Principle

Every system boundary must be explicit, documented, testable, and versioned where compatibility requires it. OpenAPI is optional and becomes mandatory only when required by a client, project, platform, or team standard.

## Required Contract Content

- Request structure and required fields.
- Response structure and success semantics.
- Validation rules and rejected-input behavior.
- Error status/category and safe error payloads.
- Authentication and authorization expectations.
- Versioning and backward-compatibility expectations.
- Examples for representative success and failure cases.
- Contract-test expectations.
- Change ownership and review requirements.

## Contract Types

REST interfaces may use OpenAPI where appropriate. Other boundaries may use typed schemas, interface definitions, provider-normalization contracts, event schemas, or documented test fixtures. The technology must serve the contract; the contract is not defined by a documentation tool.

## Completion Evidence

The learner must show that another consumer can integrate without reverse-engineering implementation source code, and that breaking changes are detected by review or contract tests.
