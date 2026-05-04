import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  env: { GRAPHQL_BASE_URL: process.env.GRAPHQL_BASE_URL },
  experimental: { typedEnv: true }
}

export default nextConfig
