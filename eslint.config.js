import js from '@eslint/js'
import jest from 'eslint-plugin-jest'
import cypress from 'eslint-plugin-cypress'

export default [
  js.configs.recommended,
  {
    plugins: {
      cypress,
      jest,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
]
