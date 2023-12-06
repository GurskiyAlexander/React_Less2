import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { PaymentsCategoryPageContainer } from '@flows/index'
import { PaymentResultPage } from '@flows/payments/pages/payment-result-page/payment-result-page'
import { ServicePageContainer } from '@flows/payments/pages/service-page/service-page.container'
import { PaymentCategoryListPageContainer } from '@flows/payments'

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
        component={PaymentCategoryListPageContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paymentsCategory"
        component={PaymentsCategoryPageContainer}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="service"
        component={ServicePageContainer}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="paymentResult"
        component={PaymentResultPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
