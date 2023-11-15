import { Typography } from '@shared/ui/atoms'
import React from 'react'
import styled from 'styled-components/native'

type TabBarUIItemProps = {
  isFocused: boolean
}

type TabBarLabelProps = {
  isFocused: boolean
  title: string
}

const TypographyLabel = styled(Typography)<TabBarUIItemProps>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.palette.accent.secondary : theme.palette.text.secondary};
`

export const TabBarLabel = ({ isFocused, title }: TabBarLabelProps) => {
  return (
    <TypographyLabel variant="caption2" isFocused={isFocused}>
      {title}
    </TypographyLabel>
  )
}
