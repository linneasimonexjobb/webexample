/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  "plugins": ["jsdoc"],
  rules: {
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-unsafe-finally': 'error',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'valid-jsdoc': [
      'warn',
      {
        requireReturn: false,
        requireParamDescription: true,
        requireReturnDescription: true,
      },
    ],
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
