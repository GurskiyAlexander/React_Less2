import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { StackParamList } from '@app/app-navigation/types'
import { IconSearch } from '@shared/ui/icons'
import { TemplateView, Separator } from '@shared/ui/atoms'
import { TitledImageItem } from '@flows/pages/payments/ui/molecules/title-image-item/title-image-item'

import {
  WrapperKeyboardAvoiding,
  TextInputContainer,
  ServicesFlatList,
  SearchTextInput,
  FlexWrapper,
} from './ui/atoms'
import { ServiceUI } from '../../../../entities/payments/types'

type PaymentsCategoryProps = NativeStackScreenProps<
  StackParamList,
  'paymentsCategory'
>

export const PaymentsCategoryPage = ({
  route,
  navigation,
}: PaymentsCategoryProps) => {
  const data = route.params.services
  const theme = useTheme()
  const [services, setServices] = useState<ServiceUI[]>()
  useEffect(() => {
    setServices(data)
  }, [data])

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      setServices(services)
    }
    const filteredData = data.filter((item) =>
      item.serviceName.toLowerCase().includes(text.toLowerCase()),
    )
    setServices(filteredData)
  }

  if (!data.length) {
    return (
      <TemplateView title="На данный момент доступных способов оплаты нет" />
    )
  }

  return (
    <WrapperKeyboardAvoiding>
      <FlexWrapper>
        <TextInputContainer>
          <IconSearch size={24} />
          <SearchTextInput
            autoCapitalize="none"
            placeholder="Поиск"
            placeholderTextColor={theme.palette.text.tertiary}
            clearButtonMode="always"
            onChangeText={() => handleSearch}
          />
        </TextInputContainer>
        <ServicesFlatList
          data={services}
          renderItem={({ item }) => (
            <TitledImageItem
              isCategoryImage={false}
              title={item.serviceName}
              imageUrl={item.serviceIcon}
              onPress={() => {
                navigation.navigate('service', {
                  service: item,
                  title: item.serviceName,
                })
              }}
            />
          )}
          keyExtractor={(item) => item.serviceId}
          ItemSeparatorComponent={Separator}
        />
      </FlexWrapper>
    </WrapperKeyboardAvoiding>
  )
}
