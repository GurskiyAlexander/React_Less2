import React from 'react'
import { styled } from '@shared/ui/theme'
import { IconLogoMedium, IconPhone } from '@shared/ui/icons'
import { PhoneInput } from '@flows/payments/service-page/ui'
import { useTheme } from '@shared/hooks'
import { WithTitleButton } from '@shared/ui/molecules'
import { Keyboard } from 'react-native'

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1
  background-color: ${({ theme }) => theme.palette.background.secondary}
`
export const SafeAreaFlex = styled.SafeAreaView`
  flex: 1;
`
const Spacer = styled.View`
  flex: 1;
`
const IconWrapper = styled.View`
  margin-bottom: 56px
  align-items: center;
`
const TouchableView = styled.TouchableOpacity`
  flex: 1;
`
type Props = {
  isValid: boolean
  isLoader: boolean
  onValueChanged: (phone: string) => void
  postValues: () => void
}

export const PhoneNumberPage = ({
  isValid,
  isLoader,
  onValueChanged,
  postValues,
}: Props) => {
  const theme = useTheme()
  return (
    <Wrapper behavior="padding">
      <TouchableView activeOpacity={1} onPress={Keyboard.dismiss}>
        <SafeAreaFlex>
          <IconWrapper>
            <IconLogoMedium />
          </IconWrapper>
          <PhoneInput
            imageSource={{ uri: '' }}
            image={
              <IconPhone
                color={
                  isValid
                    ? theme.palette.accent.primary
                    : theme.palette.indicator.error
                }
              />
            }
            onValueChanged={(text) => onValueChanged(text)}
            isValid={isValid}
            placeholder="Номер телефона"
            isShowClearButton={false}
            isShowLoader={isLoader}
          />
          <Spacer />
          <WithTitleButton title="Войти" onPress={postValues} />
        </SafeAreaFlex>
      </TouchableView>
    </Wrapper>
  )
}
