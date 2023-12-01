import React, { StrictMode } from 'react'
import { DevSettings } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AppThemeProvider, styled } from '@shared/ui/theme'
import { queryClient } from '@shared/index'
import { asyncStoragePersister } from '@shared/api/config/query-client'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { Storybook } from '../../.storybook'
import { AppNavigation } from './app-navigation/app-navigation'
import { SnackBarContainer } from '@features/snack/snackbar.container'

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
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister: asyncStoragePersister }}
        >
          <NavigationContainer>
            <SafeAreaProvider>
              <Wrapper>
                <AppNavigation />
                <SnackBarContainer />
              </Wrapper>
            </SafeAreaProvider>
          </NavigationContainer>
        </PersistQueryClientProvider>
      </AppThemeProvider>
    </StrictMode>
  )
}
