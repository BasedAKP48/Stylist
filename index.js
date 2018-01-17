module.exports = {
  extends: "airbnb-base",
  rules: {
    "comma-dangle": ["error"],
    "consistent-return": "warn",
    "no-param-reassign": ["warn", { "props": false }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-unused-vars": "warn",
    "no-use-before-define": ["error", "nofunc"],
    "prefer-destructuring": ["error", {
      "AssignmentExpression": { "array": true, "object": false },
    }],
  },
};
