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
  margin: 15px;
  justify-content: center;
`

const Title = styled(Typography)`
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
`

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <Title variant="button">{title}</Title>
    </Wrapper>
  )
}
