import type { JwtPayload } from 'jwt-decode'

import { jwtDecode } from 'jwt-decode'

type Payload = JwtPayload & {
  isDailyIntakeFormCompleted: boolean
}

export const decodeToken = (token: string | undefined) => {
  if (!token) return null

  const payload = jwtDecode<Payload>(token)

  return payload
}
