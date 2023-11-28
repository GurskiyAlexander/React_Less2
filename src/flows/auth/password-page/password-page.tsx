import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import React from 'react'

type PasswordPageProps = NativeStackScreenProps<StackParamList, 'password'>

export const PasswordPage = ({}: PasswordPageProps) => {
  return <View></View>
}
