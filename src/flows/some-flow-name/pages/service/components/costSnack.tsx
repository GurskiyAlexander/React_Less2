/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const TouchableWrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: 14px;
  margin: 0px 10px 10px 0px;
  height: 28px;
`

const PriceText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 6px 16px;
`
export type CostSnackProps = {
  value: string
  onClick: (value: string) => void
}

export const CostSnack = ({ value, onClick }: CostSnackProps) => {
  return (
    <TouchableWrapper
      onPress={() => {
        onClick(`${value} ₽`)
      }}
    >
      <PriceText variant="caption1">{value} ₽</PriceText>
    </TouchableWrapper>
  )
}
