import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import React from 'react'

type AuthSuccessPageProps = NativeStackScreenProps<StackParamList, 'authResult'>

export const AuthResultPage = ({}: AuthSuccessPageProps) => {
  return <View></View>
}
