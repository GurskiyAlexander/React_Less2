import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $otpData, $phone, setGuestToken } from '@entities/auth/model/store'
import { OTPPage } from './otp-page'
import { usePostConfirm } from '@entities/auth/model/hooks/use-post-confirm'

type Props = NativeStackScreenProps<StackParamList, 'otp'>
const showAlert = (action: () => void) => {
  Alert.alert(
    'Вы ввели неверно код 5 раз',
    'Данная сессия авторизации будет сброшена!',
    [
      {
        text: 'Выход',
        onPress: () => action,
        style: 'default',
      },
    ],
  )
}

export const OTPPageContainer = ({ navigation }: Props) => {
  const authData = useStore($otpData)
  const phone = useStore($phone)
  const [code, setCode] = useState('')
  const [isValidOTP, setIsValidOTP] = useState(false)
  const [attempts, setAttempts] = useState(5)
  const { mutate, isPending } = usePostConfirm()

  useEffect(() => {
    if (code.length < 4) {
      setIsValidOTP(false)
      return
    }
    if (code !== authData?.otpCode) {
      setIsValidOTP(true)
      setAttempts((oldValue) => oldValue - 1)

      return
    }
    if (phone) {
      mutate(
        {
          otpCode: authData?.otpCode,
          otpId: authData?.otpId,
          phone,
        },
        {
          onError: () => {
            navigation.navigate('error')
          },
          onSuccess: (result) => {
            setGuestToken(result.guestToken)
            navigation.navigate('password')
          },
        },
      )
    }
  }, [code, authData, phone, mutate, navigation])

  useEffect(() => {
    if (attempts == 0) {
      setAttempts(5)
      showAlert(() => navigation.navigate('phoneNumber'))
    }
  }, [attempts, navigation])

  return (
    <OTPPage
      attempts={attempts}
      isValidOTP={isValidOTP}
      isLoading={isPending}
      code={code}
      setCode={setCode}
    />
  )
}
