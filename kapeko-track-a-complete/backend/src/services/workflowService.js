// Explicit persisted state machine used by the advanced bootcamp workflow lab.

const crypto = require('crypto');
const persistence = require('./persistenceService');

const STEPS = ['validate_request', 'authorize_action', 'execute_action', 'verify_completion'];

async function createOrderWorkflow({ actorId = 'learner-demo', authority = 'customer', idempotencyKey }) {
  const id = `wf-${crypto.randomUUID()}`;
  const workflow = await persistence.createWorkflow({ id, type: 'order_action', actorId, authority, steps: STEPS });
  await persistence.audit({ correlationId: id, actorId, authority, eventType: 'workflow_created', resourceId: id, outcome: 'accepted' });
  return { ...workflow, idempotencyKeyRequired: true, idempotencyKey };
}

async function resume(workflowId, { actorId = 'learner-demo', authority = 'customer', idempotencyKey, approvalGranted = false } = {}) {
  const workflow = await persistence.getWorkflow(workflowId);
  if (!workflow) throw new Error('Workflow not found');
  if (workflow.state === 'completed') return workflow;
  if (workflow.state === 'waiting_approval' && !approvalGranted) return workflow;
  if (!idempotencyKey) throw new Error('idempotencyKey is required to resume a consequential workflow');

  const prior = await persistence.getIdempotent(idempotencyKey);
  if (prior) return { ...workflow, replayed: true, result: prior };

  for (const step of workflow.steps) {
    if (step.state === 'completed') continue;
    await persistence.updateWorkflow(workflowId, 'running', step.step_name);
    await persistence.updateStep(workflowId, step.step_name, 'running');
    if (step.step_name === 'authorize_action' && authority !== 'customer') {
      await persistence.updateStep(workflowId, step.step_name, 'failed', null, 'authority_denied');
      await persistence.updateWorkflow(workflowId, 'failed', step.step_name, 'authority_denied');
      await persistence.audit({ correlationId: workflowId, actorId, authority, eventType: 'authorization_denied', resourceId: workflowId, outcome: 'denied' });
      return persistence.getWorkflow(workflowId);
    }
    if (step.step_name === 'execute_action') {
      if (!approvalGranted) {
        await persistence.updateWorkflow(workflowId, 'waiting_approval', step.step_name);
        await persistence.audit({ correlationId: workflowId, actorId, authority, eventType: 'approval_requested', resourceId: workflowId, outcome: 'pending' });
        return persistence.getWorkflow(workflowId);
      }
      const result = { action: 'simulated_order_action', status: 'committed', workflowId };
      await persistence.saveIdempotent(idempotencyKey, 'simulated_order_action', result);
      await persistence.updateStep(workflowId, step.step_name, 'completed', result);
      await persistence.audit({ correlationId: workflowId, actorId, authority, eventType: 'consequential_action', resourceId: workflowId, outcome: 'committed', details: result });
      continue;
    }
    await persistence.updateStep(workflowId, step.step_name, 'completed', { verified: true });
  }
  await persistence.updateWorkflow(workflowId, 'completed', null);
  await persistence.audit({ correlationId: workflowId, actorId, authority, eventType: 'workflow_completed', resourceId: workflowId, outcome: 'completed' });
  return persistence.getWorkflow(workflowId);
}

module.exports = { initialize: persistence.initialize, createOrderWorkflow, resume, getWorkflow: persistence.getWorkflow };
