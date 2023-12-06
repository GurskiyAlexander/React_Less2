import React from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

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
  title: string
  action: () => void
}
export const KeyboardButton = ({ title, action }: Props) => {
  return (
    <Button activeOpacity={0.7} onPress={action}>
      <ButtonTitle variant="title"> {title}</ButtonTitle>
    </Button>
  )
}
