/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { StackParamList } from '@app/app-navigation/models'
import { IconSearch } from '@shared/ui/icons'
import {
  FlexView,
  Separator,
  TemplateView,
  TitledImageItem,
} from '@flows/some-flow-name/ui/molecules'

import { ServiceUI } from '../payments/model/categoriesResponse'

type PaymentsCategoryProps = NativeStackScreenProps<
  StackParamList,
  'paymentsCategory'
>

const FlexWrapper = styled(FlexView)`
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const TextInputContainer = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-color: #333;
  margin: 16px 10px 16px;
  flex-direction: row;
  padding: 10px 5px;
`

const SearchTextInput = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  flex-grow: 1;
  flex: 1;
`
const ServicesFlatList = styled(
  FlatList as new (props: FlatListProps<ServiceUI>) => FlatList<ServiceUI>,
)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const WrapperKeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

export const PaymentsCategory = ({
  route,
  navigation,
}: PaymentsCategoryProps) => {
  const data = route.params.services
  const theme = useTheme()
  const [services, setServices] = useState<ServiceUI[]>()
  useEffect(() => {
    setServices(data)
  }, [])

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      setServices(services)
    }
    const filteredData = data.filter((item) =>
      item.serviceName.toLowerCase().includes(text.toLowerCase()),
    )
    setServices(filteredData)
  }

  return (
    <WrapperKeyboardAvoiding>
      {data.length > 0 ? (
        <FlexWrapper>
          <TextInputContainer>
            {IconSearch({ size: 24 })}
            <SearchTextInput
              autoCapitalize="none"
              placeholder="Поиск"
              placeholderTextColor={theme.palette.text.tertiary}
              clearButtonMode="always"
              onChangeText={(text) => handleSearch(text)}
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
      ) : (
        <TemplateView title="На данный момент доступных способов оплаты нет" />
      )}
    </WrapperKeyboardAvoiding>
  )
}
