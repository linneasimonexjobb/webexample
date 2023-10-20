/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  rules: {
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-unsafe-finally': 'error',
    'require-jsdoc': 'warn',
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}