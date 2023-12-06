import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React from 'react'

const InputWrapper = styled.View`
  width: 40px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  margin: 0px 3px;
  justify-content: center;
`
const InputText = styled(Typography)<{ isFailed: boolean }>`
  text-align: center;
  color: ${({ theme, isFailed }) =>
    isFailed ? theme.palette.indicator.error : theme.palette.text.primary};
`
const InputLine = styled.View`
  width: 24px;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  margin-bottom: 10px;
  margin-left: 8px;
  margin-right: 8px;
`
const Spacer = styled.View`
  flex: 1;
`
type Props = {
  text: string
  isValid: boolean
}

export const OtpInput = ({ text, isValid }: Props) => {
  return (
    <InputWrapper>
      <InputText variant="subtitle" isFailed={isValid}>
        {text}
      </InputText>
      {text === '' ? <Spacer /> : null}
      {text === '' ? <InputLine /> : null}
    </InputWrapper>
  )
}
