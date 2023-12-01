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
import { ErrorPage } from '@flows/auth/error-page/error-page'
import { styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'

const Stack = createNativeStackNavigator<StackParamList>()
const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-content: center;
  justify-content: center;
`

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
        component={PhoneNumberPageContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="authResult"
        component={AuthResultPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="password"
        component={PasswordPageContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="otp"
        component={OTPPageContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="main"
        component={MainScreenNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="error"
        component={ErrorPage}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => (
            <Wrapper activeOpacity={0.7} onPress={() => navigation.goBack()}>
              <IconClose color={theme.palette.accent.tertiary} />
            </Wrapper>
          ),
        })}
      />
    </Stack.Navigator>
  )
}
