'use client'

import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react'
import { toast } from 'sonner'

import { LogoutDocument } from '@/shared/api'
import { cn } from '@/shared/lib'
import { Button, Icon } from '@/shared/ui'

export const HeaderLogoutBtn = ({ className }: { className?: string }) => {
  const { push } = useRouter()

  const [logout, { loading }] = useMutation(LogoutDocument, {
    onCompleted() {
      push('/')
    },
    onError() {
      toast.error(
        'An error occurred while signing out. Please try again later.',
        { richColors: true }
      )
    }
  })

  return (
    <Button
      variant='ghost'
      disabled={loading}
      onClick={() => logout()}
      className={cn('text-md! font-normal', className)}>
      {loading ? 'Logging out...' : 'Logout'}
      <Icon
        name='logout'
        className='stroke-current'
      />
    </Button>
  )
}
