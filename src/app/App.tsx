import React, { StrictMode } from 'react'
import { DevSettings, SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from 'pages/ui'
import { AppThemeProvider, styled } from '@shared/ui/theme'

import { Storybook } from '../../.storybook'

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
        <NavigationContainer>
          <SafeAreaProvider>
            <Wrapper>
              <AppNavigation />
            </Wrapper>
          </SafeAreaProvider>
        </NavigationContainer>
      </AppThemeProvider>
    </StrictMode>
  )
}
