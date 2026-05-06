import { decodeJwt } from 'jose/jwt/decode'

export const decodeToken = (token: string | undefined) => {
  if (!token) return null

  const payload = decodeJwt(token)

  return payload
}
