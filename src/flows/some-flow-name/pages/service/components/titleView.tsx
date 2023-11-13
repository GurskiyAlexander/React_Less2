import React from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

const Container = styled.View`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
export type TitleViewProps = {
  title: string
}

const Title = styled(Typography)`
  margin: 16px;
  color: ${({ theme }) => theme.palette.text.tertiary};
`

export const TitleView = ({ title }: TitleViewProps) => {
  return (
    <Container>
      <Title variant="body15Semibold">{title}</Title>
    </Container>
  )
}
