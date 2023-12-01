import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $otpData, $phone, setGuestToken } from '@entities/auth/model/store'
import { postConfirm } from '@shared/api/auth/model'
import { OTPPage } from './otp-page'

type Props = NativeStackScreenProps<StackParamList, 'otp'>

let attempts = 5
export const OTPPageContainer = ({ navigation }: Props) => {
  const authData = useStore($otpData)
  const phone = useStore($phone)
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidOTP, setIsValidOTP] = useState(false)
  const showAlert = () => {
    Alert.alert(
      'Вы ввели неверно код 5 раз',
      'Данная сессия авторизации будет сброшена!',
      [
        {
          text: 'Выход',
          onPress: () => navigation.navigate('phoneNumber'),
          style: 'default',
        },
      ],
    )
  }

  useEffect(() => {
    if (code.length < 4) {
      setIsValidOTP(false)
      return
    }
    if (code !== authData?.otpCode) {
      setIsValidOTP(true)
      attempts--
      return
    }
    if (phone) {
      setIsLoading(true)
      postConfirm({ otpCode: authData?.otpCode, otpId: authData?.otpId, phone })
        .then((result) => {
          setGuestToken(result.guestToken)
          setIsLoading(false)
          navigation.navigate('password')
        })
        .catch(() => {
          setIsLoading(false)
          navigation.navigate('error')
        })
    }
  }, [code])

  useEffect(() => {
    if (attempts == 0) {
      attempts = 5
      showAlert()
    }
  }, [attempts])

  return (
    <OTPPage
      attempts={attempts}
      isValidOTP={isValidOTP}
      isLoading={isLoading}
      code={code}
      setCode={setCode}
    />
  )
}
