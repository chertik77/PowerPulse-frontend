import { useRouter } from 'next/navigation'
import { useApolloClient, useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import {
  CalculateDailyIntakeDocument,
  RefreshTokensDocument
} from '@/shared/api'

export const useCalculateDailyIntake = (clearLS: () => void) => {
  const apolloClient = useApolloClient()

  const { push } = useRouter()

  const [mutate, { loading }] = useMutation(CalculateDailyIntakeDocument, {
    onCompleted: async () => {
      await apolloClient.mutate({ mutation: RefreshTokensDocument })
      clearLS()
      push('/app/diary')
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
