import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Alert } from 'react-native'
import React, { useState } from 'react'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { useStore } from 'effector-react'
import { $guestToken, setEnterData } from '@entities/auth/model/store'
import { PasswordPage } from './password-page'
import { usePostEnter } from '@entities/auth/model/hooks/use-post-enter'

type PasswordPageProps = NativeStackScreenProps<StackParamList, 'password'>
const specialSymbols = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`

export const PasswordPageContainer = ({ navigation }: PasswordPageProps) => {
  const [password, setPassword] = useState('')
  const { mutate } = usePostEnter()
  const guestToken = useStore($guestToken)
  const passwordIncludeSpecialSymbols = specialSymbols
    .split('')
    .some((char) => password.includes(char))
  const showAlert = () => {
    Alert.alert('Вы точно хотите выйти?', undefined, [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      {
        text: 'Выйти',
        onPress: () => navigation.navigate('phoneNumber'),
        style: 'default',
      },
    ])
  }

  const handleLogin = () => {
    if (password.length < 5) {
      updateSnackList({
        message: 'Длина пароля должна быть не менее 5 символов',
        duration: 10000,
        isBottomPosition: false,
      })
      return
    }
    if (passwordIncludeSpecialSymbols) {
      updateSnackList({
        message: 'Пароль может содержать только цифры и буквы',
        duration: 10000,
        isBottomPosition: false,
      })
      return
    }
    if (guestToken) {
      mutate(
        { guestToken: guestToken, password: password },
        {
          onError: () => {
            navigation.navigate('error')
          },
          onSuccess: (result) => {
            setEnterData(result)
            navigation.navigate('authResult')
          },
        },
      )
    }
  }

  return (
    <PasswordPage
      showAlert={showAlert}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  )
}
