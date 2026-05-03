import eslintPluginReactModern from '@eslint-react/eslint-plugin'
import eslintPluginJs from '@eslint/js'
import eslintPluginQuery from '@tanstack/eslint-plugin-query'
import eslintConfigNextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigNextTs from 'eslint-config-next/typescript'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintTypescript from 'typescript-eslint'

const eslintConfig = defineConfig([
  ...eslintConfigNextTs,
  ...eslintConfigNextVitals,
  eslintPluginJs.configs.recommended,
  eslintPluginReactModern.configs.recommended,
  ...eslintPluginQuery.configs['flat/recommended'],
  { languageOptions: { parser: eslintTypescript.parser } },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "ImportDeclaration[source.value='react'] :matches(ImportDefaultSpecifier, ImportNamespaceSpecifier)",
          message: 'Default React import is not allowed'
        },
        {
          selector: 'Identifier[name="React"]',
          message: 'Prefix React is not allowed'
        },
        {
          selector:
            'MemberExpression[object.property.name="meta"][property.name="env"]',
          message:
            'Direct access to `import.meta.env` is forbidden. Use `@/shared/config` instead.'
        }
      ],
      'newline-before-return': 'error',
      'arrow-body-style': ['warn', 'as-needed'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'typeLike', format: ['PascalCase'] }
      ],
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            FC: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177'
          }
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/jsx-no-useless-fragment': 'error',
      'react/boolean-prop-naming': [
        'error',
        {
          rule: '^(is|as|has|should|can|enable)[A-Z]([A-Za-z0-9]?)+',
          validateNested: true
        }
      ],
      'react/destructuring-assignment': [
        'warn',
        'always',
        { destructureInSignature: 'always' }
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' }
      ],
      'react/self-closing-comp': ['warn', { component: true, html: true }]
    }
  }
])

export default eslintConfig
