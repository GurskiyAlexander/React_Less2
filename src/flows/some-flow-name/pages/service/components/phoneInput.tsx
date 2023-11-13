/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FlexView } from '@flows/some-flow-name/ui/molecules/template'
import { ImageSourcePropType } from 'react-native'
import { styled } from '@shared/ui/theme'

import { PhoneFormat } from '../models'

type PhoneTextInputProps = {
  isValid: boolean
}

const PhoneTextInput = styled.TextInput<PhoneTextInputProps>`
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  flex-grow: 1;
  margin-left: 16px;
  color: ${({ isValid, theme }) =>
    isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`
const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 10px;
  flex-direction: row;
`

const PhoneView = styled(FlexView)`
  background-color: ${({ theme }) => theme.palette.content.primary};
  border-radius: 26px;
  height: 52px;
  padding: 0px 24px;
  flex-direction: row;
`

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
`

type PhoneInputProps = {
  isValid: boolean
  placeholder: string
  imageSource?: ImageSourcePropType
  onValueChanged: (value: string) => void
}

export const PhoneInput = ({
  isValid,
  placeholder,
  imageSource,
  onValueChanged,
}: PhoneInputProps) => {
  const [phone, setPhone] = useState('')
  const phoneMask = '+# (###) ### ## ##'
  const phoneNumberHandler = (text: string) => {
    const phoneText = PhoneFormat(text, phoneMask)
    setPhone(phoneText)
    onValueChanged(phoneText)
  }

  return (
    <Wrapper>
      <PhoneView>
        <Icon source={imageSource} />
        <PhoneTextInput
          isValid={isValid}
          placeholder={placeholder}
          clearButtonMode="while-editing"
          placeholderTextColor={isValid ? '#706D76' : '#FB6176'}
          maxLength={phoneMask.length}
          onChangeText={phoneNumberHandler}
          keyboardType="decimal-pad"
          keyboardAppearance="dark"
          value={phone}
          onFocus={() => {
            setPhone(phone.length == 0 ? '+7 ' : phone)
          }}
        />
      </PhoneView>
    </Wrapper>
  )
}
