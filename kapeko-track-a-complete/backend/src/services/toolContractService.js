// Explicit tool contracts for the advanced agent curriculum.
// The model may suggest an action, but this module owns validation and policy.

const TOOL_CONTRACTS = {
  getOrderStatus: {
    risk: 'read-only', allowedAuthorities: ['customer', 'support'],
    schema: { orderId: 'string' },
  },
  pauseSubscription: {
    risk: 'reversible', allowedAuthorities: ['customer', 'support'],
    schema: { customerId: 'string', months: 'number' },
  },
  changeSubscriptionProduct: {
    risk: 'consequential', allowedAuthorities: ['customer', 'support'],
    schema: { customerId: 'string', newSku: 'string' },
  },
  initiateReturn: {
    risk: 'consequential', allowedAuthorities: ['customer', 'support'],
    schema: { orderId: 'string', reason: 'string' },
  },
};

function validateToolCall(tool, args = {}, authority = 'customer') {
  const contract = TOOL_CONTRACTS[tool];
  if (!contract) return { valid: false, error: `Unknown tool: ${tool}` };
  if (!contract.allowedAuthorities.includes(authority)) {
    return { valid: false, error: `Authority '${authority}' cannot use ${tool}` };
  }
  for (const [name, type] of Object.entries(contract.schema)) {
    if (args[name] === undefined || args[name] === null) return { valid: false, error: `Missing parameter: ${name}` };
    if (typeof args[name] !== type) return { valid: false, error: `Parameter ${name} must be ${type}` };
  }
  if (tool === 'pauseSubscription' && (!Number.isInteger(args.months) || args.months < 1 || args.months > 3)) {
    return { valid: false, error: 'months must be an integer from 1 to 3' };
  }
  if (tool === 'changeSubscriptionProduct' && !/^SKU-00[1-4]$/.test(args.newSku)) {
    return { valid: false, error: 'newSku is not an allowed product SKU' };
  }
  return { valid: true, contract };
}

module.exports = { TOOL_CONTRACTS, validateToolCall };
