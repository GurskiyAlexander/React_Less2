import { SafeAreaView } from 'react-native'
import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { Loader } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { KeyboardWithTimer } from './ui'

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: 16px;
`
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
const LoaderWrapper = styled(Spacer)`
  justify-content: center;
  align-self: center;
`

const Title = styled(Typography)`
  text-align: center;
  margin: 140px 16px 24px;
`
const PinCodeWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 48px;
`
const DeviderView = styled.View`
  width: 10px;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.content.tertiary};
  margin: 0px 3px;
`
const ErrorText = styled(Typography)`
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.indicator.error};
`

type OTPPageProps = {
  attempts: number
  isValidOTP: boolean
  isLoading: boolean
  code: string
  setCode: (text: string) => void
}

export const OTPPage = ({
  attempts,
  isValidOTP,
  isLoading,
  code,
  setCode,
}: OTPPageProps) => {
  const theme = useTheme()
  const errorString = `Неверный код. Осталось ${attempts} попытки`

  const getInputWrapper = (text: string) => {
    return (
      <InputWrapper>
        <InputText variant="subtitle" isFailed={isValidOTP}>
          {text}
        </InputText>
        {text === '' ? <Spacer /> : null}
        {text === '' ? <InputLine /> : null}
      </InputWrapper>
    )
  }

  if (isLoading) {
    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader color={theme.palette.text.primary} />
        </LoaderWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title variant="body15Regular">
        На ваш номер отправлено SMS с кодом подтверждения.
      </Title>

      <PinCodeWrapper>
        {getInputWrapper(code.charAt(0))}
        {getInputWrapper(code.charAt(1))}
        <DeviderView />
        {getInputWrapper(code.charAt(2))}
        {getInputWrapper(code.charAt(3))}
      </PinCodeWrapper>
      {isValidOTP ? (
        <ErrorText variant="caption2">{errorString}</ErrorText>
      ) : null}

      <Spacer />
      <KeyboardWithTimer
        setCode={setCode}
        code={code}
        isClearCode={isValidOTP}
      />
    </Wrapper>
  )
}
