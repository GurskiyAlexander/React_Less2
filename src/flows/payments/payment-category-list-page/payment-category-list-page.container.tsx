import { useEffect } from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'

import { CategoryUI } from '../../../entities/payments/types'
import { useStore } from 'effector-react'
import {
  $fetchCategories,
  fetchCategoriesFx,
} from '@entities/payments/model/category-store'
import { PaymentCategoryListPage } from '@flows/index'

type PaymentCategoryListPageProps = NativeStackScreenProps<
  StackParamList,
  'payments'
>

export const PaymentCategoryListPageContainer = ({
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

  return PaymentCategoryListPage({ goToPaymentsCategory, data, isLoading })
}
