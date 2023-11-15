import React from 'react'
import { MainPage } from '@flows/main'
import { ProfilePage } from '@flows/profile'
import { useTheme } from '@shared/hooks'
import { AtmsPage } from '@flows/atms/pages/atms-page'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  IconBankAccount,
  IconMainProduct,
  IconPayment,
  IconUser,
} from '@shared/ui/icons'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { PaymentsScreenNavigator } from './paymentsScreenNavigator'
import { TabBarLabel } from './ui/atoms'

const Tabs = createBottomTabNavigator()

export const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.palette.background.primary,
          borderTopWidth: 0,
        },
        headerTintColor: 'white',
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Главная"
        component={MainPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel isFocused={focused} title={'Главная'} />
          ),
          tabBarIcon: ({ focused }) => (
            <IconMainProduct
              size={24}
              color={
                focused
                  ? theme.palette.accent.secondary
                  : theme.palette.text.secondary
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Платежи"
        component={PaymentsScreenNavigator}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabBarLabel isFocused={focused} title={'Платежи'} />
          ),
          tabBarIcon: ({ focused }) => (
            <IconPayment
              size={24}
              color={
                focused
                  ? theme.palette.accent.secondary
                  : theme.palette.text.secondary
              }
            />
          ),
          tabBarStyle: {
            display:
              getFocusedRouteNameFromRoute(route) == 'payments'
                ? 'flex'
                : 'none',
            backgroundColor: theme.palette.background.primary,
            borderTopWidth: 0,
          },
        })}
      />
      <Tabs.Screen
        name="ATMs"
        component={AtmsPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel isFocused={focused} title={'Банкоматы'} />
          ),
          tabBarIcon: ({ focused }) => (
            <IconBankAccount
              size={24}
              color={
                focused
                  ? theme.palette.accent.secondary
                  : theme.palette.text.secondary
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Профиль"
        component={ProfilePage}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel isFocused={focused} title={'Профиль'} />
          ),
          tabBarIcon: ({ focused }) => (
            <IconUser
              size={24}
              color={
                focused
                  ? theme.palette.accent.secondary
                  : theme.palette.text.secondary
              }
            />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}
