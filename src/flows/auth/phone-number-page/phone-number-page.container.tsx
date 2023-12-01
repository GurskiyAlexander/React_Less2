import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { postPhone } from '@shared/api/auth/model'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { PhoneNumberPage } from './phone-number-page'
import { setOTPData, setPhone } from '@entities/auth/model/store'

type PhoneNumberPageProps = NativeStackScreenProps<
  StackParamList,
  'phoneNumber'
>

export const PhoneNumberPageContainer = ({
  navigation,
}: PhoneNumberPageProps) => {
  const [isLoader, setIsLoader] = useState(false)
  const [number, setNumber] = useState('')
  const [isValid, setIsValid] = useState(true)

  const postValues = async () => {
    if (number.length === 18) {
      setIsLoader(true)
      postPhone(number)
        .then((data) => {
          setOTPData(data)
          setPhone(number)
          navigation.navigate('otp')
          setIsLoader(false)
        })
        .catch(() => {
          updateSnackList({
            duration: 10000,
            message: 'Такой номер не зарегистрирован или доступ ограничен',
            isButtonPosition: false,
          })
          navigation.navigate('error')
          setIsValid(false)
          setIsLoader(false)
        })
    } else {
      setIsValid(false)
      updateSnackList({
        duration: 10000,
        message: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
        isButtonPosition: false,
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
      isLoader={isLoader}
      onValueChanged={onValueChanged}
      postValues={postValues}
    />
  )
}
