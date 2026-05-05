import type { CodegenConfig } from '@graphql-codegen/cli'

import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

export default {
  schema: process.env.GRAPHQL_BASE_URL,
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    'src/shared/api/generated/': {
      preset: 'client',
      config: { useTypeImports: true }
    }
  }
} satisfies CodegenConfig
