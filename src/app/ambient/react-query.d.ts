import type { QueryKey } from '@tanstack/react-query'
import type { ClientError } from 'graphql-request'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ClientError
    mutationMeta: {
      invalidates?: QueryKey[]
      successMessage?: string
      errorMessage?: string | ((error?: ClientError) => string)
    }
  }
}
