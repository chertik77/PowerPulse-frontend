import { useRouter } from 'next/navigation'
import { CombinedGraphQLErrors } from '@apollo/client/errors'
import { useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import { getGraphQLErrorCode } from '@/shared/lib'

import { SigninDocument } from './signin-document'

export const useSigninUser = () => {
  const { push } = useRouter()

  const [mutate, { loading }] = useMutation(SigninDocument, {
    onCompleted() {
      push('/daily-intake')
    },
    onError(error) {
      if (CombinedGraphQLErrors.is(error)) {
        if (getGraphQLErrorCode(error) === 'UNAUTHENTICATED') {
          toast.error(
            'The email or password you entered is incorrect. Please try again.',
            { richColors: true }
          )
        }
      } else {
        toast.error(
          'An error occurred while signing in. Please try again later.',
          { richColors: true }
        )
      }
    }
  })

  return { signin: mutate, isLoading: loading }
}
