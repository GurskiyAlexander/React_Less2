import { EnterResponse, OTPResponse } from '../types'
import { createEvent, restore } from 'effector'

export const setOTPData = createEvent<OTPResponse>()
export const setPhone = createEvent<string>()
export const setGuestToken = createEvent<string>()
export const setEnterData = createEvent<EnterResponse>()
export const setIsSuccessLogin = createEvent<boolean>()

export const $isSuccessLogin = restore(setIsSuccessLogin, null)
export const $enterData = restore(setEnterData, null)
export const $otpData = restore(setOTPData, null)
export const $phone = restore(setPhone, null)
export const $guestToken = restore(setGuestToken, null)
