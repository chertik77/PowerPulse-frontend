import type { IGraphQLConfig } from 'graphql-config'

import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: IGraphQLConfig = {
  schema: process.env.GRAPHQL_BASE_URL!,
  documents: ['src/**/*.{gql,graphql}']
}

export default config
