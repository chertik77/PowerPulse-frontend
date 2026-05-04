import { useEffect } from 'react'
import { toast } from 'sonner'
import { useMutation } from 'urql'

import { getGraphQLErrorCode } from '@/shared/lib'

import { SigninDocument } from './signin-document'

export const useSigninUser = () => {
  // const router = useRouter()
  const [{ fetching, error }, signin] = useMutation(SigninDocument)

  // useEffect(() => {
  //   if (data) router.push('/daily-intake')
  // }, [data, router])

  useEffect(() => {
    if (error) {
      if (getGraphQLErrorCode(error) === 401) {
        toast.error('The email or password is incorrect. Please try again.', {
          richColors: true
        })
      } else {
        toast.error(
          'An error occurred while signing in. Please try again later.',
          { richColors: true }
        )
      }
    }
  }, [error])

  return { signin, isLoading: fetching }
}
