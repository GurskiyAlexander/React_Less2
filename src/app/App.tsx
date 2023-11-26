import React, { StrictMode } from 'react'
import { DevSettings } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AppThemeProvider, styled } from '@shared/ui/theme'

import { SnackBar } from '@shared/ui/molecules/snackbar/snackbar'

import { AppNavigation } from './app-navigation/app-navigation'
import { Storybook } from '../../.storybook'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`

const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`

const Wrapper = styled.View`
  flex: 1;
`

const queryClient = new QueryClient()

export const App = () => {
  const [isStorybookVisible, setIsStorybookVisible] = React.useState(false)

  React.useEffect(() => {
    DevSettings.addMenuItem(
      `${isStorybookVisible ? 'Turn off storybook' : 'Turn on storybook'}`,
      () => setIsStorybookVisible((prevState) => !prevState),
    )
  }, [isStorybookVisible])

  if (isStorybookVisible) {
    return (
      <StrictMode>
        <AppThemeProvider>
          <SafeAreaProvider>
            <Wrapper>
              <Storybook />
              <StorybookButton onPress={() => setIsStorybookVisible(false)}>
                <StorybookButtonText>OPEN APP</StorybookButtonText>
              </StorybookButton>
            </Wrapper>
          </SafeAreaProvider>
        </AppThemeProvider>
      </StrictMode>
    )
  }

  return (
    <StrictMode>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <SafeAreaProvider>
              <Wrapper>
                <AppNavigation />
                <SnackBar />
              </Wrapper>
            </SafeAreaProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </AppThemeProvider>
    </StrictMode>
  )
}
