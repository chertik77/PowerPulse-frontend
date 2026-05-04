import type { UseFormSetError } from 'react-hook-form'
import type { SignupSchema } from '../model/contract'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { useMutation } from 'urql'

import { getGraphQLErrorCode } from '@/shared/lib'

import { SignupDocument } from './signup-document'

export const useSignupUser = (setError: UseFormSetError<SignupSchema>) => {
  const [{ fetching, error }, signup] = useMutation(SignupDocument)

  useEffect(() => {
    if (error) {
      if (getGraphQLErrorCode(error) === 409) {
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
  }, [error, setError])

  return { signup, isLoading: fetching }
}
