import React from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

type ButtonProps = {
  title: string
  onPress: () => void
}

const Wrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.button.primary};
  height: 52px;
  border-radius: 26px;
  margin: 0 16px;
  justify-content: center;
  align-items: center;
`

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <Typography variant="button">{title}</Typography>
    </Wrapper>
  )
}
