const eslint = require('eslint');

const rules = new eslint.Linter().getRules();

module.exports = {
  rules: {
    'no-restricted-imports-error': rules.get('no-restricted-imports'),
    'no-restricted-imports-warn': rules.get('no-restricted-imports'),
  },
};
