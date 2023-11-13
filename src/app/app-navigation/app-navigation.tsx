import React from 'react'
import { MainFlow } from '@flows/some-flow-name/pages/main'
import { ProfileFlow } from '@flows/some-flow-name/pages/profile'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { ATMsFlow } from '@flows/some-flow-name/pages/ATMs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  IconBankAccount,
  IconMainProduct,
  IconPayment,
  IconUser,
} from '@shared/ui/icons'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { PaymentsScreenNavigator } from './paymentsScreenNavigator'

type TabBarLabelProps = {
  isFocused: boolean
  title: string
}

type TabBarUIItemProps = {
  isFocused: boolean
}

const TabBarLabel = styled.Text<TabBarUIItemProps>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.palette.accent.secondary : theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.caption2.size};
  font-family: ${({ theme }) => theme.typography.caption2.fontFamily};
`
const Tabs = createBottomTabNavigator()

export const AppNavigation = () => {
  const theme = useTheme()

  const tabBarLabel = ({ isFocused, title }: TabBarLabelProps) => {
    return <TabBarLabel isFocused={isFocused}>{title}</TabBarLabel>
  }

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.palette.background.primary,
          borderTopWidth: 0,
        },
        headerStyle: { backgroundColor: theme.palette.background.primary },
        headerTintColor: 'white',
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="Главная"
        component={MainFlow}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            tabBarLabel({ isFocused: focused, title: 'Главная' }),
          tabBarIcon: ({ focused }) =>
            IconMainProduct({
              size: 24,
              color: focused
                ? theme.palette.accent.secondary
                : theme.palette.text.secondary,
            }),
        }}
      />
      <Tabs.Screen
        name="Платежи"
        component={PaymentsScreenNavigator}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            tabBarLabel({ isFocused: focused, title: 'Платежи' }),
          tabBarIcon: ({ focused }) =>
            IconPayment({
              size: 24,
              color: focused
                ? theme.palette.accent.secondary
                : theme.palette.text.secondary,
            }),
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: theme.palette.background.primary,
          },
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
        component={ATMsFlow}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            tabBarLabel({ isFocused: focused, title: 'Банкоматы' }),
          tabBarIcon: ({ focused }) =>
            IconBankAccount({
              size: 24,
              color: focused
                ? theme.palette.accent.secondary
                : theme.palette.text.secondary,
            }),
        }}
      />
      <Tabs.Screen
        name="Профиль"
        component={ProfileFlow}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            tabBarLabel({ isFocused: focused, title: 'Профиль' }),
          tabBarIcon: ({ focused }) =>
            IconUser({
              size: 24,
              color: focused
                ? theme.palette.accent.secondary
                : theme.palette.text.secondary,
            }),
        }}
      />
    </Tabs.Navigator>
  )
}
