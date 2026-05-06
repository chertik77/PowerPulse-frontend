import type { UseFormSetError } from 'react-hook-form'
import type { SignupSchema } from '../model/contract'

import { useRouter } from 'next/navigation'
import { CombinedGraphQLErrors } from '@apollo/client/errors'
import { useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import { getGraphQLErrorCode } from '@/shared/lib'

import { SignupDocument } from './signup-document'

export const useSignupUser = (setError: UseFormSetError<SignupSchema>) => {
  const { push } = useRouter()

  const [mutate, { loading }] = useMutation(SignupDocument, {
    onCompleted: () => {
      push('/daily-intake')
    },
    onError: error => {
      if (CombinedGraphQLErrors.is(error)) {
        if (getGraphQLErrorCode(error) === 'CONFLICT') {
          setError(
            'email',
            { message: 'A user with this email already exists.' },
            { shouldFocus: true }
          )
        }
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.',
          { richColors: true }
        )
      }
    }
  })

  return { signup: mutate, isLoading: loading }
}
