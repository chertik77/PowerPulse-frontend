import type { SignupSchema } from '@/lib/schemas'
import type { UseFormReset } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toast'

import { Pages } from '@/config'
import { authService } from '@/services'

export const useSignupUser = (reset: UseFormReset<SignupSchema>) => {
  const { replace } = useRouter()

  const { isPending, mutate } = useMutation({
    mutationKey: ['signup'],
    mutationFn: authService.signup,
    onSuccess() {
      replace(Pages.DailyNorm)
      reset()
    },
    onError(e) {
      toast.error(
        e.response?.status === 409
          ? 'Another user is already registered with the provided email address. Please use a different email.'
          : 'An error occurred during sign-up. Our technical team has been notified. Please try again shortly.'
      )
    }
  })

  return { isPending, mutate }
}
