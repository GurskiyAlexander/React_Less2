import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { styled } from '@shared/ui/theme'
import { IconLogoMedium, IconPhone } from '@shared/ui/icons'
import { PhoneInput } from '@flows/payments/service-page/ui'
import { useTheme } from '@shared/hooks'

type PhoneNumberPageProps = NativeStackScreenProps<
  StackParamList,
  'phoneNumber'
>

const Wrapper = styled.SafeAreaView`
  flex: 1
  align-items: center
  background-color: ${({ theme }) => theme.palette.background.secondary}
  padding-top: 16px
  padding-bottom: 24px
`

const Image = styled(IconPhone)`
  align-self: center;
`

export const PhoneNumberPage = ({}: PhoneNumberPageProps) => {
  const theme = useTheme()
  const [phone, setPhone] = useState('')
  return (
    <Wrapper>
      <IconLogoMedium />
      <PhoneInput
        imageSource={{ uri: '' }}
        image={<Image color={theme.palette.accent.primary} />}
        onValueChanged={setPhone}
        isValid={true}
        placeholder="Номер телефона"
      />
    </Wrapper>
  )
}
