import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { styled } from '@shared/ui/theme'
import { StackParamList } from '@app/app-navigation/types'
import { Typography } from '@shared/ui/atoms'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'

import { CategoryUI } from '../../../entities/payments/types'
import { CategoriesList } from '../ui/molecules/category-list/category-list'
import { useStore } from 'effector-react'
import {
  $fetchCategories,
  fetchCategoriesFx,
} from '@entities/payments/model/category-store'

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

const PaymentsHeader = () => {
  return (
    <Header>
      <HeaderText variant="title">Платежи</HeaderText>
    </Header>
  )
}

type PaymentCategoryListPageProps = NativeStackScreenProps<
  StackParamList,
  'payments'
>

export const PaymentCategoryListPage = ({
  navigation,
}: PaymentCategoryListPageProps) => {
  const { data, isLoading } = useStore($fetchCategories)

  useEffect(() => {
    fetchCategoriesFx()
  }, [])

  const goToPaymentsCategory = (category: CategoryUI) => {
    navigation.navigate('paymentsCategory', {
      title: category.categoryName,
      id: category.categoryId,
    })
  }

  return (
    <Wrapper>
      <PaymentsHeader />
      {!data && isLoading ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" />
        </ActivityIndicatorContainer>
      ) : (
        <CategoriesList data={data!} onPress={goToPaymentsCategory} />
      )}
    </Wrapper>
  )
}
