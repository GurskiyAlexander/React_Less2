import { mapPaymentToUi } from '@entities/payments/model/mappers/map-payment-to-ui'
import { ServiceUI } from '@entities/payments/types'
import { updateSnackList } from '@features/snack/snackbar-store'
import { useEffect, useState } from 'react'
import { useGetCategory } from './model'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import { PaymentsCategoryPage } from './payments-category-page'

type PaymentsCategoryProps = NativeStackScreenProps<
  StackParamList,
  'paymentsCategory'
>

export const PaymentsCategoryPageContainer = ({
  route,
  navigation,
}: PaymentsCategoryProps) => {
  const [query, setQuery] = useState('')
  const { data, isLoading, isError } = useGetCategory()
  const services = mapPaymentToUi({ category: data!.category }).find((item) => item.categoryId == route.params.id)?.services ?? []
  const filteredServices = () => {
    const filteredData = services.filter((item) =>
      item.serviceName.toLowerCase().includes(query.toLowerCase()),
    )
    return filteredData
  }

  const onPress = (item: ServiceUI) => {
    navigation.navigate('service', {
      service: item,
      title: item.serviceName,
    })
  }

  useEffect(() => {
    if (isError) {
      updateSnackList({ message: 'Что-то пошло не так', duration: 10000 })
    }
  }, [data, query, isError, route.params.id])

  const onChangeText = (text: string) => {
    setQuery(text)
  }

  return PaymentsCategoryPage({filteredServices, onChangeText, isLoading, onPress})
}


