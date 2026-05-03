import eslintPluginReactModern from '@eslint-react/eslint-plugin'
import eslintPluginJs from '@eslint/js'
import eslintPluginQuery from '@tanstack/eslint-plugin-query'
import eslintConfigNextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigNextTs from 'eslint-config-next/typescript'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...eslintConfigNextTs,
  ...eslintConfigNextVitals,
  eslintPluginJs.configs.recommended,
  eslintPluginReactModern.configs.recommended,
  ...eslintPluginQuery.configs['flat/recommended'],
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])

export default eslintConfig
