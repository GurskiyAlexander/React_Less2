import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

import { SnackModel } from './types'

const Container = styled.TouchableOpacity<{ isBottomPosition: boolean }>`
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palette.indicator.error};
  ${({ isBottomPosition }) =>
    isBottomPosition ? `bottom: 30px;` : 'top: 50px;'}
  left: 20px;
  right: 20px;
  position: absolute;
  flex-direction: row;
  border-radius: 16px;
  padding: 16px;
`

const TextWrapper = styled.View`
  margin-right: 25px;
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
    <Container
      activeOpacity={0.7}
      onPress={pressedClose}
      isBottomPosition={snackList[0]?.isBottomPosition ?? true}
    >
      <TextWrapper>
        <Typography variant="body15Regular">{snackList[0]?.message}</Typography>
      </TextWrapper>
      <IconClose color={theme.palette.text.primary} />
    </Container>
  )
}
