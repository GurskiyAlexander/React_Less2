import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styled } from '@shared/ui/theme'
import { WithTitleButton } from '@shared/ui/molecules'
import { CircleInfoView, SumView } from '../ui'

type Props = NativeStackScreenProps<StackParamList, 'paymentResult'>

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

export const PaymentResultPage = ({ navigation, route }: Props) => {
  const isSuccess = route.params.isSuccess
  return (
    <Wrapper>
      <CenterWrapper>
        <CircleInfoView isSuccess={isSuccess} />
        <SumView isSuccess={isSuccess} sum={`${route.params.sum}`} />
      </CenterWrapper>
      <WithTitleButton
        title="Готово"
        onPress={() => navigation.navigate('payments')}
      ></WithTitleButton>
    </Wrapper>
  )
}
