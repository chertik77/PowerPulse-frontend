import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import { apolloClient } from '@/shared/api/client'

import { DailyIntakeDocumet } from './daily-intake-document'
import { RefreshTokensDocument } from './refresh-tokens-document'

export const useCalculateDailyIntake = () => {
  const { push } = useRouter()

  const [mutate, { loading }] = useMutation(DailyIntakeDocumet, {
    onCompleted: async () => {
      await apolloClient.mutate({ mutation: RefreshTokensDocument })
      push('/app')
    },
    onError() {
      toast.error(
        'The email or password you entered is incorrect. Please try again.',
        { richColors: true }
      )
    }
  })

  return { calculateDailyIntake: mutate, isLoading: loading }
}
