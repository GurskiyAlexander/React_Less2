import React from 'react'
import { styled } from '@shared/ui/theme'
import { IconDelete } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 68px;
`
type Props = {
  action: () => void
}
export const DeleteButton = ({ action }: Props) => {
  const theme = useTheme()
  return (
    <Button activeOpacity={0.7} onPress={action}>
      <IconDelete color={theme.palette.accent.tertiary} />
    </Button>
  )
}
