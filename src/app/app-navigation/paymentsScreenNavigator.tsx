import React from 'react'
import { StackParamList } from '@app/app-navigation/models'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { Service } from '@flows/some-flow-name/pages/service'
import { PaymentsCategory } from '@flows/some-flow-name/pages/payment'
import { PaymentsFlow } from '@flows/some-flow-name/pages/payments'

const Stack = createNativeStackNavigator<StackParamList>()

export const PaymentsScreenNavigator = () => {
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
        name="payments"
        component={PaymentsFlow}
        options={{ title: 'Платежи', headerShown: false }}
      />
      <Stack.Screen
        name="paymentsCategory"
        component={PaymentsCategory}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="service"
        component={Service}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  )
}
