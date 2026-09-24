# WP-0005 — Persist Conversation and Workflow State with Restart Recovery

## Status

In Progress

## Purpose

Teach learners to make conversational and agent workflow execution resumable and safe across process restarts.

## Background

Current chat sessions are held in memory and the order workflow is one-shot. Restarting a service loses context and there is no durable state for pending, failed, approved, or completed actions.

## Scope

- Define conversation, workflow, step, and execution-status records.
- Define state transitions for pending, running, waiting-for-approval, succeeded, failed, and resumable states.
- Define restart recovery and stale-running-step behavior.
- Define separation of user conversation context from authoritative action state.

## Out of Scope

- Implementing equivalent framework-specific recovery in Tracks B and C.
- Implementing the agent loop, tools, or approval UI.
- Solving all distributed transaction concerns.

## Dependencies

- ADR-0001 Persistent Application and Workflow State
- ADR-0003 Agent Execution
- WP-0004 Durable Persistence and Migrations
- WP-0009 Bounded Multi-Step Agent Workflow

## Acceptance Criteria

- A workflow state model covers normal, failed, waiting, and resumed execution.
- Recovery behavior is deterministic for each persisted state.
- Duplicate resume attempts have defined outcomes.
- Conversation history cannot authorize an action by itself.
- Restart and recovery scenarios are required completion evidence.

## Required Evidence

- Workflow state diagram.
- Restart/recovery matrix.
- Resume and duplicate-resume test plan.
- State ownership and retention rules.

## Risks

- Persisting raw prompts may create privacy and retention concerns.
- Recovery logic can accidentally repeat side effects without idempotency controls.

## Notes

This WP is implemented as a small explicit SQLite state machine in Track A and must continue with WP-0015 and WP-0016 considerations. It does not introduce an external workflow engine.
