import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import { CalculateDailyIntakeDocument } from '@/shared/api'

export const useCalculateDailyIntake = (clear: () => void) => {
  // const apolloClient = useApolloClient()
  const { push } = useRouter()

  const [mutate, { loading }] = useMutation(CalculateDailyIntakeDocument, {
    onCompleted: async () => {
      // await apolloClient.mutate({ mutation: RefreshTokensDocument })
      clear()
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
