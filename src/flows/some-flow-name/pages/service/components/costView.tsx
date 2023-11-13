/* eslint-disable no-unused-vars */
import React from 'react'
import { FlatList, FlatListProps } from 'react-native'
import { useEffect, useState } from 'react'
import { Separator } from '@flows/some-flow-name/ui/molecules'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

import { CostSnack } from './costSnack'
import { TitleView } from './titleView'

const costs = ['100', '500', '1000', '2500', '5000']
const cashback = 10

const MainWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  margin-top: 20px;
`
const CostInput = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: ${({ theme }) => theme.typography.largeTitle.fontFamily};
  font-size: ${({ theme }) => theme.typography.largeTitle.size};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`

type SeparatorLineProps = {
  isActive: boolean
  isValid: boolean
}

const SeparatorLine = styled(Separator)<SeparatorLineProps>`
  margin: 0px 15px;
  background-color: ${({ theme, isActive, isValid }) =>
    isValid
      ? isActive
        ? theme.palette.accent.primary
        : theme.palette.content.secondary
      : theme.palette.indicator.error};
`
const SnacksFlatList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>,
)`
  margin: 10px 0px;
  padding-left: 15px;
`
const CashbackTitle = styled(Typography)`
  margin: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(2)}px ${({ theme }) => theme.spacing(2.5)}px;
  color: ${({ theme }) => theme.palette.text.secondary};
`
export type CostViewProps = {
  onValueChanged: (value: string) => void
  isValid: boolean
}

export const CostView = ({ onValueChanged, isValid }: CostViewProps) => {
  const [isActive, setActive] = useState(false)
  const [cost, setCost] = useState('0 ₽')

  const getCostForRub = () => {
    return Number(cost.replace(' ₽', ''))
  }

  const onChangeText = (text: string) => {
    setCost(text)
  }

  const startEditing = () => {
    setActive(true)
    setCost(cost.replace(/[^0-9]/g, ''))
  }

  const endEditing = () => {
    setActive(false)
    setCost(cost.length <= 2 ? '0 ₽' : cost + ' ₽')
  }

  useEffect(() => {
    onValueChanged(String(getCostForRub()))
  })

  return (
    <MainWrapper>
      <TitleView title="Сумма" />
      <CostInput
        value={cost}
        onChangeText={onChangeText}
        onResponderStart={startEditing}
        onEndEditing={endEditing}
        returnKeyType="done"
        keyboardType="decimal-pad"
        keyboardAppearance="dark"
      />
      <SeparatorLine isActive={isActive} isValid={isValid} />
      {getCostForRub() == 0 ? (
        <SnacksFlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={costs}
          renderItem={(item) => (
            <CostSnack
              value={item.item}
              onClick={(value) => {
                onChangeText(value)
              }}
            />
          )}
        />
      ) : (
        <CashbackTitle variant="caption1">
          Ваш кешбек составит 10% - {getCostForRub() / cashback} ₽
        </CashbackTitle>
      )}
    </MainWrapper>
  )
}
