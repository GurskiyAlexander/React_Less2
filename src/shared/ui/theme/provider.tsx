import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from './dark'

type Props = {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}
