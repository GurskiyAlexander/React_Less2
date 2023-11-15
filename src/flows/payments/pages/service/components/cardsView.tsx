import React from 'react'
import { styled } from '@shared/ui/theme'
import { Icon2CardPay, IconChevronDown } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'

import { TitleView } from './titleView'

const CardWrapper = styled.View`
  padding: 16px;
  flex-direction: row;
`
const TextWrapper = styled.View`
  justify-content: 'space-between';
  padding-left: 20px;
  flex-grow: 1;
`
const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  margin: 8px 0 16px 0;
`

export const CardView = () => {
  return (
    <Wrapper>
      <TitleView title="Карта для оплаты" />
      <CardWrapper>
        <Icon2CardPay size={40} color="#706D76" />
        <TextWrapper>
          <Typography variant="body15Regular">Карта зарплатная</Typography>
          <Typography variant="caption1">457 334,00 ₽</Typography>
        </TextWrapper>
        {IconChevronDown({ size: 24, color: '#706D76' })}
      </CardWrapper>
    </Wrapper>
  )
}
