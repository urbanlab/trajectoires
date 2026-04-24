import js from '@eslint/js'
import { globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,tsx}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/*.json']),

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks
    },
    rules: reactHooks.configs.recommended.rules
  },

  {
    name: 'app/exoRules',
    rules: {
      'indent': ['error', 2],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'comma-dangle': ['warn', 'never'],
      'no-trailing-spaces': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'semi': ['error', 'never'],
      'quotes': ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-double']
    }
  },

  {
    name: 'app/srcFormatting',
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'array-bracket-newline': ['error', { minItems: 3 }],
      'array-element-newline': ['error', { minItems: 3 }],
      'function-paren-newline': ['error', { minItems: 3 }]
    }
  }
)
