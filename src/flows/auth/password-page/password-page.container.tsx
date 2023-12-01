import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Alert } from 'react-native'
import React, { useState } from 'react'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { useStore } from 'effector-react'
import { $guestToke, setEnterData } from '@entities/auth/model/store'
import { postEnter } from '@shared/api/auth/model'
import { PasswordPage } from './password-page'

type PasswordPageProps = NativeStackScreenProps<StackParamList, 'password'>
const specialSymbols = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`

export const PasswordPageContainer = ({ navigation }: PasswordPageProps) => {
  const [password, setPassword] = useState('')
  const guestToken = useStore($guestToke)
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
        isButtonPosition: false,
      })
      return
    }
    if (passwordIncludeSpecialSymbols) {
      updateSnackList({
        message: 'Пароль может содержать только цифры и буквы',
        duration: 10000,
        isButtonPosition: false,
      })
      return
    }
    if (guestToken) {
      postEnter({ guestToken: guestToken, password: password })
        .then((result) => {
          setEnterData(result)
          navigation.navigate('authResult')
        })
        .catch(() => {
          navigation.navigate('error')
        })
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
