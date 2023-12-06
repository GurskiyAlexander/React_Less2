import { KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IconClose, IconLock, IconLogoMedium } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { Typography } from '@shared/ui/atoms'
import { WithTitleButton } from '@shared/ui/molecules'
import { EyeButton } from './ui/molecules'

const CloseButtonWrapper = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-top: 12px;
  margin-left: 16px;
`
const EnterPasswordText = styled(Typography)`
  margin-top: 80px;
  text-align: center;
`
const SafeAreaFlex = styled.SafeAreaView`
  flex: 1;
`
const Wrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const PasswordContentWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 16px;
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 85%;
`
const PhoneView = styled.View`
    flex: 1
    background-color: ${({ theme }) => theme.palette.content.primary};
    border-radius: 26px;
    height: 52px;
    padding:16px 24px;
    flex-direction: row;
`
const PhoneTextInput = styled.TextInput`
  flex-grow: 16;
  margin-left: 16px;
  color: ${({ theme }) => theme.palette.text.primary};
  padding-right: 16px;
`
const HorizontalFlex = styled.View`
  flex: 1
  flex-direction: row;
`
const IconWrapper = styled.View`
  margin-bottom: 56px
  align-items: center;
`
type Props = {
  showAlert: () => void
  setPassword: (text: string) => void
  handleLogin: () => void
}

export const PasswordPage = ({
  showAlert,
  setPassword,
  handleLogin,
}: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const theme = useTheme()

  return (
    <Wrapper behavior="padding">
      <ScrollView bounces={false}>
        <SafeAreaFlex>
          <CloseButtonWrapper onPress={showAlert}>
            <IconClose color={theme.palette.text.primary} />
          </CloseButtonWrapper>
          <IconWrapper>
            <IconLogoMedium />
          </IconWrapper>
          <EnterPasswordText variant="body15Regular">
            Введите пароль
          </EnterPasswordText>
          <PasswordContentWrapper>
            <PhoneView>
              <IconLock color={theme.palette.accent.primary} />
              <HorizontalFlex>
                <PhoneTextInput
                  clearButtonMode="never"
                  keyboardAppearance="dark"
                  secureTextEntry={isPasswordHidden}
                  onChangeText={setPassword}
                  returnKeyType="done"
                />
              </HorizontalFlex>
              <EyeButton
                action={() => setIsPasswordHidden((isHidden) => !isHidden)}
                isHidden={isPasswordHidden}
              />
            </PhoneView>
          </PasswordContentWrapper>
          <WithTitleButton title="Войти" onPress={handleLogin} />
        </SafeAreaFlex>
      </ScrollView>
    </Wrapper>
  )
}