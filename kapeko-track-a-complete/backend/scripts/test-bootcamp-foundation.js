const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dbPath = path.join(os.tmpdir(), `kapeko-test-${process.pid}.sqlite`);
process.env.SQLITE_DB_PATH = dbPath;
const workflow = require('../src/services/workflowService');
const { validateToolCall } = require('../src/services/toolContractService');

(async () => {
  await workflow.initialize();
  const created = await workflow.createOrderWorkflow({ idempotencyKey: 'test-key' });
  const waiting = await workflow.resume(created.id, { idempotencyKey: 'test-key' });
  assert.equal(waiting.state, 'waiting_approval');
  const completed = await workflow.resume(created.id, { idempotencyKey: 'test-key', approvalGranted: true });
  assert.equal(completed.state, 'completed');
  assert(completed.steps.every(step => step.state === 'completed'));
  assert.equal(validateToolCall('pauseSubscription', { customerId: 'c', months: 4 }).valid, false);
  assert.equal(validateToolCall('changeSubscriptionProduct', { customerId: 'c', newSku: 'BAD' }).valid, false);
  assert.equal(validateToolCall('getOrderStatus', { orderId: 'o' }).valid, true);
  console.log('Bootcamp foundation tests passed: persistence=1 workflow=1 tool-validation=3');
})().finally(() => {
  try { fs.unlinkSync(dbPath); } catch (_) { /* test cleanup */ }
});
