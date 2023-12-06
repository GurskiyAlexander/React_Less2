import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { PhoneNumberPage } from './phone-number-page'
import { setOTPData, setPhone } from '@entities/auth/model/store'
import { usePostPhone } from '@entities/auth/model/hooks/use-post-phone'

type PhoneNumberPageProps = NativeStackScreenProps<
  StackParamList,
  'phoneNumber'
>

export const PhoneNumberPageContainer = ({
  navigation,
}: PhoneNumberPageProps) => {
  const [number, setNumber] = useState('')
  const [isValid, setIsValid] = useState(true)
  const { mutate, isPending } = usePostPhone()
  const postValues = async () => {
    if (number.length === 18) {
      mutate(number, {
        onError: () => {
          updateSnackList({
            duration: 10000,
            message: 'Такой номер не зарегистрирован или доступ ограничен',
            isBottomPosition: false,
          })
          navigation.navigate('error')
          setIsValid(false)
        },
        onSuccess: (result) => {
          setOTPData(result)
          setPhone(number)
          navigation.navigate('otp')
        },
      })
    } else {
      setIsValid(false)
      updateSnackList({
        duration: 10000,
        message: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
        isBottomPosition: false,
      })
    }
  }

  const onValueChanged = (phone: string) => {
    setNumber(phone)
    setIsValid(true)
  }

  return (
    <PhoneNumberPage
      isValid={isValid}
      isLoader={isPending}
      onValueChanged={onValueChanged}
      postValues={postValues}
    />
  )
}
