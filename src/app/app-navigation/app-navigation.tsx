import React from 'react'
import { AuthScreenNavigator } from './auth-screen-navigator'
import { MainScreenNavigator } from './main-screen-navigation'
import { useStore } from 'effector-react'
import { $isSuccessLogin } from '@entities/auth/model/store'

export const AppNavigation = () => {
  const isSuccessLogin = useStore($isSuccessLogin)
  if (!isSuccessLogin) {
    return <AuthScreenNavigator />
  }
  return <MainScreenNavigator />
}
