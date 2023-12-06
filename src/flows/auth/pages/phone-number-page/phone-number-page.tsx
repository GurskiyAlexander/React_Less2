import React from 'react'
import { styled } from '@shared/ui/theme'
import { IconLogoMedium, IconPhone } from '@shared/ui/icons'
import { PhoneInput } from '@flows/payments/pages/service-page/ui'
import { useTheme } from '@shared/hooks'
import { WithTitleButton } from '@shared/ui/molecules'

const SafeAreaFlex = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const IconWrapper = styled.View`
  margin-bottom: 56px
  align-items: center;
`
const Scroll = styled.ScrollView`
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
    <SafeAreaFlex>
      <Scroll bounces={false}>
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
          isShowLoader={isLoader}
        />
      </Scroll>
      <WithTitleButton title="Войти" onPress={postValues} />
    </SafeAreaFlex>
  )
}
