const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  // ignore
  { ignores: ['node_modules/**','dist/**','build/**','android/**','ios/**','eslint.config.cjs', 'babel.config.js',
'metro.config.js', 'jest.config.*', '*.config.js',] },

  // JS recommended, scoped to source files
  { files: ['**/*.{js,jsx,ts,tsx}'], ...js.configs.recommended },

  // React + Hooks presets, scoped
  ...compat
    .extends('plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier')
    .map((cfg) => ({ files: ['**/*.{js,jsx,ts,tsx}'], ...cfg })),

  // TS preset, scoped
  ...compat
    .extends('plugin:@typescript-eslint/recommended')
    .map((cfg) => ({ files: ['**/*.{js,jsx,ts,tsx}'], ...cfg })),

  // project parser/plugins
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: { react: { version: 'detect' } },
  },

  // FINAL overrides win
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
