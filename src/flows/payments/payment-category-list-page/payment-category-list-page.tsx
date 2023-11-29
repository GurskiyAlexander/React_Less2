import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

import { CategoryUI } from '../../../entities/payments/types'
import { CategoriesList } from '../ui/molecules/category-list/category-list'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`

const ActivityIndicatorContainer = styled(Wrapper)`
  justify-content: center;
  align-self: center;
`

const Header = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 116px;
  justify-content: flex-end;
`
const HeaderText = styled(Typography)`
  margin: 0 0 8px 16px;
`

type Props = {
  goToPaymentsCategory: (category: CategoryUI) => void
  data: CategoryUI[]
  isLoading: boolean
  refetch: () => void
  isRefetching: boolean
}

export const PaymentCategoryListPage = ({
  goToPaymentsCategory,
  data,
  isLoading,
  refetch,
  isRefetching,
}: Props) => {
  if (!data && isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" />
      </ActivityIndicatorContainer>
    )
  }
  return (
    <Wrapper>
      <Header>
        <HeaderText variant="title">Платежи</HeaderText>
      </Header>
      <CategoriesList
        data={data}
        onPress={goToPaymentsCategory}
        refetch={refetch}
        isLoading={isRefetching}
      />
    </Wrapper>
  )
}
