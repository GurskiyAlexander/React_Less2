import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { useStore } from 'effector-react'
import React from 'react'
import { IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

import { $snackList } from './snackbar-store'
import { SnackBarContainer } from './snackbar.container'

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

const CloseView = styled.View`
  justify-content: center;
  align-items: center;
`

export const SnackBar = () => {
  const theme = useTheme()
  const snackList = useStore($snackList)
  const { pressedClose, isVisible } = SnackBarContainer()

  if (!isVisible) {
    return null
  }

  return (
    <Container activeOpacity={0.7} onPress={pressedClose}>
      <Typography variant="body15Regular">{snackList[0]?.message}</Typography>
      <CloseView>
        <IconClose color={theme.palette.text.primary} />
      </CloseView>
    </Container>
  )
}
