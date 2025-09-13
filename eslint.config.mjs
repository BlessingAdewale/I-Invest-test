import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNative from 'eslint-plugin-react-native';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig, // Disables conflicting ESLint rules with Prettier
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-native': pluginReactNative,
      import: pluginImport,
      prettier: prettierPlugin,
    },
    rules: {
      // ts rules
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unsafe-optional-chaining': 'error',
      '@typescript-eslint/no-require-imports': 'off',

      // react rules
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-did-mount-set-state': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/no-array-index-key': 'error',

      // react-native rules
      'react-native/no-unused-styles': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'error',
      'react-native/sort-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-raw-text': 'off',
      'react-native/no-single-element-style-arrays': 'warn',

      // preettier
      'prettier/prettier': 'error', // Enforce Prettier rules
      ...pluginReactHooks.configs.recommended.rules,

      // sort
      'sort-imports': 'off',

      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node built-ins: fs, path
            'external', // npm packages: react, lodash
            'internal', // your aliases like @/src/*
            ['parent', 'sibling', 'index'], // relative paths
            'object', // import * as foo
            'type', // import type
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/',
      '.git',
      '.husky',
      'ios',
      'android',
      '.expo',
      '.yarn',
      'expo-env.d.ts',
      'babel.config.js',
      'metro.config',
      'eslint.config.mjs',
    ],
  },
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
