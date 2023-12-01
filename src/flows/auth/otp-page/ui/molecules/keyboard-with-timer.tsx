import React, { useEffect, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { IconDelete } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'
import { CreateKeyboardButtonProps } from '../../model/type'
import { keyboardModels } from '../../model/keyboard-models'

type RepeatButtonTextProps = {
  isAvailable: boolean
}

const Wrapper = styled.View`
  flex: 1;
`

const RepeatButtonText = styled(Typography)<RepeatButtonTextProps>`
  color: ${({ theme, isAvailable }) =>
    isAvailable ? theme.palette.text.primary : theme.palette.text.secondary};
  text-align: center;
`
const RowStack = styled.View`
  flex-direction: row;
`

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 68px;
`
const ButtonTitle = styled(Typography)`
  text-align: center;
`

type Props = {
  setCode: (code: string) => void
  code: string
  isClearCode: boolean
}

export const KeyboardWithTimer = ({ setCode, code, isClearCode }: Props) => {
  const theme = useTheme()
  const [seconds, setSeconds] = useState(180)
  const createTimerButton = () => {
    if (seconds === 0) {
      return 'Выслать код повторно'
    }
    const minutes = Math.floor(seconds / 60)
    const secondsInMinute = seconds - minutes * 60
    const secondsString = (secondsInMinute < 10 ? '0' : '') + secondsInMinute
    return `Повторить через\n${minutes}:${secondsString}`
  }

  const createKeyboardButton = ({
    title,
    type,
    key,
  }: CreateKeyboardButtonProps) => {
    switch (type) {
      case 'delete':
        return (
          <Button
            key={key}
            activeOpacity={0.7}
            onPress={() => {
              if (isClearCode) {
                return setCode('')
              }
              setCode(code.slice(0, -1))
            }}
          >
            <IconDelete color={theme.palette.accent.tertiary} />
          </Button>
        )
      case 'number':
        return (
          <Button
            key={key}
            activeOpacity={0.7}
            onPress={() => {
              if (isClearCode) {
                return setCode('')
              }
              setCode(code.length < 4 ? code + title : code)
            }}
          >
            <ButtonTitle variant="title"> {title}</ButtonTitle>
          </Button>
        )
      case 'timer':
        return (
          <Button
            key={key}
            activeOpacity={0.7}
            disabled={seconds !== 0}
            onPress={() => setSeconds(180)}
          >
            <RepeatButtonText variant="caption1" isAvailable={seconds === 0}>
              {createTimerButton()}
            </RepeatButtonText>
          </Button>
        )
    }
  }

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [seconds])

  return (
    <Wrapper>
      {keyboardModels.map((items, index) => {
        return (
          <RowStack key={index}>
            {items.map((item, index) => {
              return createKeyboardButton({
                title: item.title,
                type: item.type,
                key: index,
              })
            })}
          </RowStack>
        )
      })}
    </Wrapper>
  )
}
