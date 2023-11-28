import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackParamList } from './types'
import { useTheme } from '@shared/hooks'
import React from 'react'
import {
  AuthResultPage,
  OTPPage,
  PasswordPage,
  PhoneNumberPage,
} from '@flows/auth'

const Stack = createNativeStackNavigator<StackParamList>()

export const AuthScreenNavigator = () => {
  const theme = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background.primary,
        },
        headerTintColor: 'white',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="phoneNumber"
        component={PhoneNumberPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="authResult"
        component={AuthResultPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="password"
        component={PasswordPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="otp"
        component={OTPPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
