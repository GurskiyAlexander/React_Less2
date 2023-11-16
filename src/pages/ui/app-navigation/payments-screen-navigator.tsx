import React from 'react'
import { StackParamList } from '@entities/common/models/stack-param-list'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { ServicePage } from 'pages/screens/payments/pages/service'
import { PaymentsCategoryPage } from 'pages/screens/payments/pages/payment/payments-category-page'
import { PaymentCategoryListPage } from 'pages/screens/payments'

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
    </Stack.Navigator>
  )
}
