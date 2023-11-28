import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

import { SnackModel } from './types'

const Container = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palette.indicator.error};
  bottom: 30px;
  left: 20px;
  right: 20px;
  position: absolute;
  flex-direction: row;
  border-radius: 16px;
  padding: 16px;
`
type Props = {
  pressedClose: () => void
  isVisible: boolean
  snackList: SnackModel[]
}

export const SnackBar = ({ pressedClose, isVisible, snackList }: Props) => {
  const theme = useTheme()
  if (!isVisible) {
    return null
  }
  return (
    <Container activeOpacity={0.7} onPress={pressedClose}>
      <Typography variant="body15Regular">{snackList[0]?.message}</Typography>
      <IconClose color={theme.palette.text.primary} />
    </Container>
  )
}
