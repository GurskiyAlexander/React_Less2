import { mapServicesToUi } from '@entities/payments/model/mappers/map-payment-to-ui'
import { ServiceUI } from '@entities/payments/types'
import { updateSnackList } from '@features/snack/model/snackbar-store'
import { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import React from 'react'

import { useGetPayments } from '../model'
import { PaymentsCategoryPage } from './payments-category-page'

type Props = NativeStackScreenProps<StackParamList, 'paymentsCategory'>

export const PaymentsCategoryPageContainer = ({ route, navigation }: Props) => {
  const [query, setQuery] = useState('')
  const { data, isLoading, isError } = useGetPayments()
  const category = data?.category.find(
    (item) => item.category_id == route.params.id,
  )
  const services = mapServicesToUi(category?.services ?? [])
  const filteredServices = services.filter((item) =>
    item.serviceName.toLowerCase().includes(query.toLowerCase()),
  )
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
  }, [isError])

  const onChangeText = (text: string) => {
    setQuery(text)
  }

  return (
    <PaymentsCategoryPage
      filteredServices={filteredServices}
      onChangeText={onChangeText}
      isLoading={isLoading}
      onPress={onPress}
    />
  )
}
