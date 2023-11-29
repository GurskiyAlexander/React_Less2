import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React, { useEffect } from 'react'
import { CategoryUI } from '../../../entities/payments/types'
import { PaymentCategoryListPage } from './payment-category-list-page'
import { mapPaymentToUi } from '@entities/payments/model/mappers/map-payment-to-ui'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { useGetCategory } from '../../../entities/payments/model'

type PaymentCategoryListPageProps = NativeStackScreenProps<
  StackParamList,
  'payments'
>

export const PaymentCategoryListPageContainer = ({
  navigation,
}: PaymentCategoryListPageProps) => {
  const { data, isLoading, isError, refetch, isRefetching } = useGetCategory()
  const categories = mapPaymentToUi({ category: data?.category ?? [] })

  useEffect(() => {
    if (isError) {
      updateSnackList({ duration: 10000, message: 'Повторите попытку позже' })
    }
  }, [isError])

  const goToPaymentsCategory = (category: CategoryUI) => {
    navigation.navigate('paymentsCategory', {
      title: category.categoryName,
      id: category.categoryId,
    })
  }

  return (
    <PaymentCategoryListPage
      goToPaymentsCategory={goToPaymentsCategory}
      data={categories}
      isLoading={isLoading}
      refetch={refetch}
      isRefetching={isRefetching}
    />
  )
}
