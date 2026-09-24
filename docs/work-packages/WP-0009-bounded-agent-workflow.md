# WP-0009 — Implement a Bounded Multi-Step Agent Workflow Exercise

## Status

In Progress

## Purpose

Introduce a real bounded execution loop with explicit state rather than the current one-shot tool dispatch.

## Background

The existing order agent performs one model call followed by at most one local tool call. It has no observe/reason/act cycle, step limit, resumable state, or controlled continuation.

## Scope

- Define a bounded workflow with explicit steps and state transitions.
- Define model decision, deterministic action, observation, and continuation boundaries.
- Define maximum steps, time budget, retry budget, and terminal states.
- Include at least one workflow requiring more than one controlled step.

## Out of Scope

- Unbounded autonomous loops.
- Production-scale orchestration infrastructure.
- Tool authorization and approval implementation.

## Dependencies

- ADR-0003 Agent Execution
- ADR-0002 Tool Calling
- WP-0007 Typed Tool Contracts

## Acceptance Criteria

- Workflow state transitions are explicit and testable.
- Maximum steps and time limits prevent unbounded execution.
- Each step has an input and output contract.
- A failed step reaches a defined retryable or terminal state.
- The workflow exposes enough state to resume safely.

## Required Evidence

- Sequence and state diagrams.
- Execution trace for a successful multi-step run.
- Evidence for max-step termination.
- Failure and resume scenarios.

## Risks

- Calling a workflow an agent may still overstate autonomy if decisions and limits are unclear.
- Parallelism can complicate ordering and recovery.

## Notes

Models should make bounded decisions; deterministic code should own safety-critical transitions.
