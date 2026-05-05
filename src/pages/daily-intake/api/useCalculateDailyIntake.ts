import type { CalculateDailyIntakeMutationVariables } from '@/shared/api'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { graphQLClient } from '@/shared/api'

import { DailyIntakeDocumet } from './daily-intake-document'

export const useCalculateDailyIntake = () => {
  const { push } = useRouter()

  const { mutate: calculateDailyIntake, isPending } = useMutation({
    mutationFn: (input: CalculateDailyIntakeMutationVariables) =>
      graphQLClient.request(DailyIntakeDocumet, input),
    meta: {
      errorMessage:
        'An error occurred while calculating daily intake. Please try again later.'
    },
    onSuccess: () => {
      push('/app')
    }
  })

  return { calculateDailyIntake, isLoading: isPending }
}
