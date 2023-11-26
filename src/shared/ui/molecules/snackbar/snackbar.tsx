import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import React from 'react'
import { IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

import {
  $snackList,
  updateSnackList,
} from '../../../../entities/snacks/model/snackbar-store'

const Container = styled.View`
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

const CloseView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const SnackBar = () => {
  const theme = useTheme()
  const snackList = useStore($snackList)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (snackList.length != 0) {
      setIsVisible(true)
      const snack = snackList[0]
      const timeout = setTimeout(() => {
        updateSnackList()
        setIsVisible(false)
      }, snack.duration)
      return () => clearTimeout(timeout)
    }
  }, [snackList])

  const pressedClose = () => {
    updateSnackList()
    setIsVisible(false)
  }

  return isVisible ? (
    <Container>
      <Typography variant="body15Regular">{snackList[0]?.message}</Typography>
      <CloseView activeOpacity={0.7} onPress={pressedClose}>
        <IconClose color={theme.palette.text.primary} />
      </CloseView>
    </Container>
  ) : null
}
