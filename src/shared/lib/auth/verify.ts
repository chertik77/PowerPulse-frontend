import { importSPKI, jwtVerify } from 'jose'

let cachedKey: CryptoKey | null = null

const getPublicKey = async () => {
  if (cachedKey) return cachedKey

  cachedKey = await importSPKI(process.env.JWT_PUBLIC_KEY!, 'RS256')

  return cachedKey
}

export const verifyToken = async (token: string | undefined) => {
  if (!token) return null

  try {
    const key = await getPublicKey()
    const { payload } = await jwtVerify(token, key)

    return payload
  } catch {
    return null
  }
}
