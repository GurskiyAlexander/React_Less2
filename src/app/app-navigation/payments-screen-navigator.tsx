import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import {
  ServicePage,
  PaymentsCategoryPage,
  PaymentCategoryListPage,
} from '@flows/pages'
import { SuccessPage } from '@flows/pages/payments/success-page/succes-page'

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
        component={PaymentCategoryListPage}
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
      <Stack.Screen
        name="success"
        component={SuccessPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
