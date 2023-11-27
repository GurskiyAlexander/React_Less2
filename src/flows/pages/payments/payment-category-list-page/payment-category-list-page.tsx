import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { styled } from '@shared/ui/theme'
import { StackParamList } from '@app/app-navigation/types'
import axios from 'axios'
import { Typography } from '@shared/ui/atoms'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'

import { CategoryUI } from '../../../../entities/payments/types'
import { mapPaymentToUi } from '../../../../entities/payments/model/mappers/map-payment-to-ui'
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
  const [categories, setCategories] = useState<CategoryUI[]>()

  const fetchPayments = async () => {
    const response = await axios.get(
      'https://github.com/kode-frontend/files/raw/main/categories.json',
    )
    const data = response.data
    const payments = mapPaymentToUi({ categories: data.category })
    setCategories(payments)
  }

  useEffect(() => {
    fetchPayments()
  }, [])

  const goToPaymentsCategory = (category: CategoryUI) => {
    navigation.navigate('paymentsCategory', {
      title: category.categoryName,
      services: category.services,
    })
  }

  return (
    <Wrapper>
      <PaymentsHeader />
      {!categories ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" />
        </ActivityIndicatorContainer>
      ) : (
        <CategoriesList data={categories} onPress={goToPaymentsCategory} />
      )}
    </Wrapper>
  )
}
