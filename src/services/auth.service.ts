import type { SigninSchema, SignupSchema } from '@/lib/schemas'
import type { AuthResponse } from '@/typings'

import { axiosInstance } from '@/api'
import { ApiEndpoints } from '@/config'

import { authTokenService } from './auth-token.service'

export const authService = {
  async signup(data: SignupSchema) {
    const r = await axiosInstance.post<AuthResponse>(ApiEndpoints.Signup, data)

    if (r.data.accessToken) {
      authTokenService.saveTokenToCookies(r.data.accessToken)
    }

    return r.data
  },

  async signin(data: SigninSchema) {
    const r = await axiosInstance.post<AuthResponse>(ApiEndpoints.Signin, data)

    if (r.data.accessToken) {
      authTokenService.saveTokenToCookies(r.data.accessToken)
    }

    return r.data
  },

  async getNewTokens() {
    const { data } = await axiosInstance.post<AuthResponse>(ApiEndpoints.Tokens)

    if (data.accessToken) {
      authTokenService.saveTokenToCookies(data.accessToken)
    }
  },

  async signout() {
    const r = await axiosInstance.post<boolean>(ApiEndpoints.Signout)

    if (r) authTokenService.removeTokenFromCookies()
  }
}
