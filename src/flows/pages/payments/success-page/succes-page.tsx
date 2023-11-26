import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styled } from '@shared/ui/theme'
import { IconCheck, IconClose } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'

import { Button } from '../service-page/ui'

type SuccessScreenProps = NativeStackScreenProps<StackParamList, 'success'>

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding: 24px 16px;
`
const CenterWrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circle = styled.View<{ size: number }>`
  display: flex;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: rgba(112, 109, 118, 0.05);
  justify-content: center;
  align-items: center;
`

const ResultCircle = styled.View<{ isSuccess: boolean }>`
  display: flex;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: ${({ theme, isSuccess }) =>
    isSuccess ? theme.palette.indicator.done : theme.palette.indicator.error};
  justify-content: center;
  align-items: center;
`

const SumView = styled.View`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

const TitleView = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 5px;
`

export const SuccessPage = ({ navigation, route }: SuccessScreenProps) => {
  return (
    <Wrapper>
      <CenterWrapper>
        <Circle size={150}>
          <Circle size={112}>
            <ResultCircle isSuccess={route.params.isSuccess}>
              {route.params.isSuccess ? (
                <IconCheck size={40} color="#fff" />
              ) : (
                <IconClose size={40} color="#fff" />
              )}
            </ResultCircle>
          </Circle>
        </Circle>
        <SumView>
          <TitleView variant="body17Regular">
            {route.params.isSuccess ? 'Оплачено' : 'Платеж отклонен'}
          </TitleView>
          <Typography variant="largeTitle">{route.params.sum}₽</Typography>
        </SumView>
      </CenterWrapper>
      <Button
        title="Продолжить"
        onPress={() => navigation.navigate('payments')}
      ></Button>
    </Wrapper>
  )
}
