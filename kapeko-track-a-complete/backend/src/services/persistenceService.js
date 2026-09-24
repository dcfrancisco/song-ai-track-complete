// Durable bootcamp persistence for Tracks A's advanced labs.
// SQLite is intentionally kept small and explicit so learners can inspect it.

const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = process.env.SQLITE_DB_PATH || path.resolve(__dirname, '../../data/bootcamp.sqlite');
let db;

function open() {
  if (db) return db;
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  db = new sqlite3.Database(dbPath);
  return db;
}

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    open().run(sql, params, function onRun(error) {
      if (error) reject(error);
      else resolve({ changes: this.changes, lastID: this.lastID });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    open().get(sql, params, (error, row) => error ? reject(error) : resolve(row));
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    open().all(sql, params, (error, rows) => error ? reject(error) : resolve(rows));
  });
}

async function initialize() {
  await run('PRAGMA foreign_keys = ON');
  await run(`CREATE TABLE IF NOT EXISTS schema_migrations (
    version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL
  )`);
  const migration = await get('SELECT version FROM schema_migrations WHERE version = 1');
  if (!migration) {
    await run('BEGIN IMMEDIATE');
    try {
      await run(`CREATE TABLE workflows (
        id TEXT PRIMARY KEY, type TEXT NOT NULL, state TEXT NOT NULL,
        current_step TEXT, failure_reason TEXT, retry_count INTEGER NOT NULL DEFAULT 0,
        actor_id TEXT NOT NULL, authority TEXT NOT NULL, created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL, completed_at TEXT
      )`);
      await run(`CREATE TABLE workflow_steps (
        id INTEGER PRIMARY KEY AUTOINCREMENT, workflow_id TEXT NOT NULL,
        step_name TEXT NOT NULL, state TEXT NOT NULL, result_json TEXT,
        error TEXT, started_at TEXT, completed_at TEXT,
        UNIQUE(workflow_id, step_name), FOREIGN KEY(workflow_id) REFERENCES workflows(id)
      )`);
      await run(`CREATE TABLE idempotency_keys (
        key TEXT PRIMARY KEY, action TEXT NOT NULL, result_json TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`);
      await run(`CREATE TABLE audit_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT, correlation_id TEXT NOT NULL,
        actor_id TEXT NOT NULL, authority TEXT NOT NULL, event_type TEXT NOT NULL,
        resource_id TEXT, outcome TEXT NOT NULL, details_json TEXT,
        created_at TEXT NOT NULL
      )`);
      await run(`INSERT INTO schema_migrations(version, applied_at) VALUES (1, datetime('now'))`);
      await run('COMMIT');
    } catch (error) {
      await run('ROLLBACK').catch(() => {});
      throw error;
    }
  }
}

async function createWorkflow({ id, type, actorId, authority, steps }) {
  const now = new Date().toISOString();
  await run('BEGIN IMMEDIATE');
  try {
    await run(`INSERT INTO workflows(id, type, state, current_step, actor_id, authority, created_at, updated_at)
      VALUES (?, ?, 'pending', ?, ?, ?, ?, ?)`, [id, type, steps[0], actorId, authority, now, now]);
    for (const step of steps) {
      await run(`INSERT INTO workflow_steps(workflow_id, step_name, state) VALUES (?, ?, 'pending')`, [id, step]);
    }
    await run('COMMIT');
  } catch (error) {
    await run('ROLLBACK').catch(() => {});
    throw error;
  }
  return getWorkflow(id);
}

async function getWorkflow(id) {
  const workflow = await get('SELECT * FROM workflows WHERE id = ?', [id]);
  if (!workflow) return null;
  workflow.steps = await all('SELECT * FROM workflow_steps WHERE workflow_id = ? ORDER BY id', [id]);
  return workflow;
}

async function updateWorkflow(id, state, currentStep, failureReason = null) {
  const completedAt = state === 'completed' || state === 'failed' ? new Date().toISOString() : null;
  await run(`UPDATE workflows SET state = ?, current_step = ?, failure_reason = ?,
    updated_at = ?, completed_at = COALESCE(?, completed_at) WHERE id = ?`,
  [state, currentStep, failureReason, new Date().toISOString(), completedAt, id]);
  return getWorkflow(id);
}

async function updateStep(workflowId, stepName, state, result = null, error = null) {
  await run(`UPDATE workflow_steps SET state = ?, result_json = ?, error = ?,
    started_at = CASE WHEN ? = 'running' AND started_at IS NULL THEN ? ELSE started_at END,
    completed_at = CASE WHEN ? IN ('completed', 'failed') THEN ? ELSE completed_at END
    WHERE workflow_id = ? AND step_name = ?`,
  [state, result && JSON.stringify(result), error, state, new Date().toISOString(), state, new Date().toISOString(), workflowId, stepName]);
}

async function getIdempotent(key) {
  const row = await get('SELECT result_json FROM idempotency_keys WHERE key = ?', [key]);
  return row ? JSON.parse(row.result_json) : null;
}

async function saveIdempotent(key, action, result) {
  await run(`INSERT INTO idempotency_keys(key, action, result_json, created_at) VALUES (?, ?, ?, ?)` ,
    [key, action, JSON.stringify(result), new Date().toISOString()]);
}

async function audit(event) {
  await run(`INSERT INTO audit_events(correlation_id, actor_id, authority, event_type, resource_id, outcome, details_json, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [event.correlationId, event.actorId, event.authority,
    event.eventType, event.resourceId || null, event.outcome, JSON.stringify(event.details || {}), new Date().toISOString()]);
}

module.exports = { initialize, createWorkflow, getWorkflow, updateWorkflow, updateStep, getIdempotent, saveIdempotent, audit };
