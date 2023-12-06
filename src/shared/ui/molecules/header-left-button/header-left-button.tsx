import { styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'
import React from 'react'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-content: center;
  justify-content: center;
`
type Props = {
  action: () => void
}
export const HeaderLeftButton = ({ action }: Props) => {
  const theme = useTheme()
  return (
    <Wrapper activeOpacity={0.7} onPress={action}>
      <IconClose color={theme.palette.accent.tertiary} />
    </Wrapper>
  )
}
