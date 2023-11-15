import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { ServicePage } from '@flows/payments/pages/service'
import { PaymentsCategoryPage } from '@flows/payments/pages/payment'
import { PaymentsPage } from '@flows/payments'

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
        component={PaymentsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paymentsCategory"
        component={PaymentsCategoryPage}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="service"
        component={ServicePage}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  )
}
