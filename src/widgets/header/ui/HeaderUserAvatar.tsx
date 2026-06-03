'use client'

import { useQuery } from '@apollo/client/react'

import { GetMeBasicDocument } from '@/shared/api'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui'

export const HeaderUserAvatar = () => {
  const { data } = useQuery(GetMeBasicDocument)

  return (
    <Avatar>
      <AvatarImage src={data?.me.avatar ?? ''} />
      <AvatarFallback />
    </Avatar>
  )
}
