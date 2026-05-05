import type { SignupMutationVariables } from '@/shared/api'
import type { UseFormSetError } from 'react-hook-form'
import type { SignupSchema } from '../model/contract'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { graphQLClient } from '@/shared/api'

import { SignupDocument } from './signup-document'

export const useSignupUser = (setError: UseFormSetError<SignupSchema>) => {
  const { push } = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: (input: SignupMutationVariables) =>
      graphQLClient.request(SignupDocument, input),
    onSuccess: () => {
      push('/daily-intake')
    },
    onError: error => {
      if (error.response.status === 409) {
        setError(
          'email',
          { message: 'A user with this email already exists.' },
          { shouldFocus: true }
        )
      }

      toast.error(
        'An error occurred while signing up. Please try again later.',
        { richColors: true }
      )
    }
  })

  return { signup: mutate, isLoading: isPending }
}
