# Bootcamp Failure Matrix

| Scenario | Current behavior | Evidence | Remaining work |
|---|---|---|---|
| Missing OpenAI key | Readiness fails without printing value | readiness matrix commands | complete clean-environment build |
| Model unavailable | Existing introductory routes return an error; no durable recovery | existing route behavior | provider timeout/retry lab |
| Malformed tool JSON | Existing agent returns controlled error | order agent parser | structured native tool fixture |
| Unknown tool | Deterministic contract rejection | `toolContractService` | API-level assertion |
| Invalid tool parameter | Deterministic contract rejection | foundation test | broader adversarial matrix |
| Unauthorized authority | Tool contract rejects unsupported authority | contract implementation | identity propagation across all tracks |
| Duplicate consequential request | SQLite idempotency record prevents repeat result | workflow foundation test | acknowledgement-loss injection |
| Process restart | SQLite workflow state remains queryable | SQLite persistence evidence | separate-process automated test |
| Persistence write failure | Startup/runtime error is surfaced | schema/runtime boundary | failure injection and recovery |
| Retrieved prompt injection | Not yet enforced in current simple RAG | gap | WP-0023/WP-0024 security lab |
