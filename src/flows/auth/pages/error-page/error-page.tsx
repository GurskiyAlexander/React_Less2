import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IconErrorFile } from '@shared/ui/icons'
import { ResultView } from '@shared/ui/molecules'
type Props = NativeStackScreenProps<StackParamList, 'error'>

export const ErrorPage = ({ navigation }: Props) => {
  return (
    <ResultView
      image={<IconErrorFile />}
      title="Внимание"
      subTitle="Сервер временно недоступен. Пожалуйста, повторите попытку позднее"
      action={navigation.goBack}
      actionButtonTitle="Повторить"
    />
  )
}
