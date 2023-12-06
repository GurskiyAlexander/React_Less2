import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { IconSuccessAuth } from '@shared/ui/icons'
import { setIsSuccessLogin } from '@entities/auth/model/store'
import { ResultView } from '@shared/ui/molecules'

type AuthSuccessPageProps = NativeStackScreenProps<StackParamList, 'authResult'>

export const AuthResultPage = ({ navigation }: AuthSuccessPageProps) => {
  const handleContinue = () => {
    navigation.navigate('main')
    setIsSuccessLogin(true)
  }

  return (
    <ResultView
      image={<IconSuccessAuth />}
      title="Все готово"
      subTitle="Теперь вы можете использовать мобильное приложение Kode bank"
      action={handleContinue}
      actionButtonTitle="Продолжить"
    />
  )
}
