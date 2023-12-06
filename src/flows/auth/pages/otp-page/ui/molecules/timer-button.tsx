import { styled } from '@shared/ui/theme'
import { useEffect, useState } from 'react'
import React from 'react'
import { Typography } from '@shared/ui/atoms'

type RepeatButtonTextProps = {
  isAvailable: boolean
}
const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 68px;
`
const RepeatButtonText = styled(Typography)<RepeatButtonTextProps>`
  color: ${({ theme, isAvailable }) =>
    isAvailable ? theme.palette.text.primary : theme.palette.text.secondary};
  text-align: center;
`

export const TimerButton = () => {
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

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [seconds])

  return (
    <Button
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
