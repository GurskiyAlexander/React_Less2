import { IconEye, IconEyeOff } from '@shared/ui/icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@shared/hooks'

type Props = {
  action: () => void
  isHidden: boolean
}
export const EyeButton = ({ action, isHidden }: Props) => {
  const theme = useTheme()
  return (
    <TouchableOpacity activeOpacity={1} onPress={action}>
      {isHidden ? (
        <IconEyeOff color={theme.palette.text.tertiary} />
      ) : (
        <IconEye color={theme.palette.text.tertiary} />
      )}
    </TouchableOpacity>
  )
}
