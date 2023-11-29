import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import React from 'react'

type OTPPageProps = NativeStackScreenProps<StackParamList, 'otp'>

export const OTPPage = ({}: OTPPageProps) => {
  return <View></View>
}
