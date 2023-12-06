import {
  ConfirmBody,
  EnterBody,
  EnterResponse,
  GuestToken,
  OTPResponse,
} from '@entities/auth/types'

import { authApi } from '../config/api'

export const postEnter = async ({
  guestToken,
  password,
}: EnterBody): Promise<EnterResponse> => {
  const response = await authApi.post('/api/auth/enter', {
    guestToken,
    password,
  })
  return response.data
}

export const postConfirm = async ({
  otpCode,
  otpId,
  phone,
}: ConfirmBody): Promise<GuestToken> => {
  const response = await authApi.post('api/auth/confirm', {
    otpCode,
    otpId,
    phone,
  })
  return response.data
}

export const postPhone = async (phone: string): Promise<OTPResponse> => {
  const response = await authApi.post('api/auth/login', { phone })
  return response.data
}
