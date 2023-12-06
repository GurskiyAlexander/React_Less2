import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackParamList } from './types'
import { useTheme } from '@shared/hooks'
import React from 'react'
import {
  AuthResultPage,
  OTPPageContainer,
  PhoneNumberPageContainer,
  PasswordPageContainer,
} from '@flows/auth'
import { MainScreenNavigator } from './main-screen-navigation'
import { ErrorPage } from '@flows/auth/pages/error-page/error-page'
import { HeaderLeftButton } from '@shared/ui/molecules'

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
        headerShown: false,
      }}
    >
      <Stack.Screen name="phoneNumber" component={PhoneNumberPageContainer} />
      <Stack.Screen name="authResult" component={AuthResultPage} />
      <Stack.Screen name="password" component={PasswordPageContainer} />
      <Stack.Screen name="otp" component={OTPPageContainer} />
      <Stack.Screen name="main" component={MainScreenNavigator} />
      <Stack.Screen
        name="error"
        component={ErrorPage}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <HeaderLeftButton action={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
