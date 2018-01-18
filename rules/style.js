module.exports = {
  'rules': {
    // Minimizes diffs when adding new lines
    'comma-dangle': ['error', 'always-multiline'],
    // Warn, we allow this behavior, but want to be aware of any possible issues
    'consistent-return': 'warn',
    // We allow modification of properties
    'no-param-reassign': ['warn', { 'props': true }],
    // Allow short circuits: test && action
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    // Allow function arguments to be unused
    'no-unused-vars': ['error', { 'args': 'none' }],
    // Allow functions to be defined after references (functions are top-level)
    'no-use-before-define': ['error', 'nofunc'],
    // Deconstruction not required when assigning to object properties (declared_var = object.key)
    'prefer-destructuring': ['error', {
      'AssignmentExpression': { 'array': true, 'object': false },
    }],
    // Allow for loops to use unary (++/--)
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  },
};
