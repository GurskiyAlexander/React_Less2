import React from 'react'
import { View } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Icon2CardPay, IconChevronDown } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'

import { TitleView } from './titleView'

const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 20px;
  flex-direction: row;
`
const TextWrapper = styled.View`
  justify-content: 'space-between';
  padding-left: 20px;
  flex-grow: 1;
`
const Wrapper = styled.View`
  margin: 8px 0px 16px 0px;
`

export const CardView = () => {
  return (
    <Wrapper>
      <TitleView title="Карта для оплаты" />
      <View>
        <CardWrapper>
          {Icon2CardPay({ size: 40 })}
          <TextWrapper>
            <Typography variant="body15Regular">Карта зарплатная</Typography>
            <Typography variant="caption1">457 334,00 ₽</Typography>
          </TextWrapper>
          {IconChevronDown({ size: 24, color: '#706D76' })}
        </CardWrapper>
      </View>
    </Wrapper>
  )
}
