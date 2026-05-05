import type { SigninMutationVariables } from '@/shared/api'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { graphQLClient } from '@/shared/api'
import { getGraphQLStatusCode } from '@/shared/lib'

import { SigninDocument } from './signin-document'

export const useSigninUser = () => {
  const { push } = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: (input: SigninMutationVariables) =>
      graphQLClient.request(SigninDocument, input),
    meta: {
      errorMessage: e =>
        getGraphQLStatusCode(e) === 401
          ? 'The email or password you entered is incorrect. Please try again.'
          : 'An error occurred while signing in. Please try again later.'
    },
    onSuccess: () => {
      push('/daily-intake')
    }
  })

  return { signin: mutate, isLoading: isPending }
}
