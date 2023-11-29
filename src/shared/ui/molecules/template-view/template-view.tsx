import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

type PropsTemplateView = {
  title: string
}

const TemplateContainer = styled.View`
  flex: 1;
  padding: 20px
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.primary};
`

export const TemplateView = ({ title }: PropsTemplateView) => {
  return (
    <TemplateContainer>
      <Typography variant="largeTitle">{title}</Typography>
    </TemplateContainer>
  )
}
