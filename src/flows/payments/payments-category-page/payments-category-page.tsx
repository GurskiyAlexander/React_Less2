import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { StackParamList } from '@app/app-navigation/types'
import { IconSearch } from '@shared/ui/icons'
import { TemplateView } from '@shared/ui/molecules'
import { TitledImageItem } from '@flows/payments/ui/molecules/title-image-item/title-image-item'

import {
  WrapperKeyboardAvoiding,
  TextInputContainer,
  ServicesFlatList,
  SearchTextInput,
  FlexWrapper,
} from './ui/atoms'
import { PaymentsCategoryPageContainer } from './payments-category-page.container'
import { ActivityIndicator } from 'react-native'
import { styled } from '@shared/ui/theme'

type PaymentsCategoryProps = NativeStackScreenProps<
  StackParamList,
  'paymentsCategory'
>

const ActivityIndicatorContainer = styled(FlexWrapper)`
  justify-content: center;
  align-self: center;
`

export const PaymentsCategoryPage = ({
  route,
  navigation,
}: PaymentsCategoryProps) => {
  const theme = useTheme()
  const { filteredServices, onChangeText, isLoading } =
    PaymentsCategoryPageContainer({ id: route.params.id })

  return (
    <WrapperKeyboardAvoiding>
      {!filteredServices && isLoading ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" />
        </ActivityIndicatorContainer>
      ) : filteredServices?.length === 0 ? (
        <TemplateView title="На данный момент доступных способов оплаты нет" />
      ) : (
        <FlexWrapper>
          <TextInputContainer>
            <IconSearch size={24} />
            <SearchTextInput
              autoCapitalize="none"
              placeholder="Поиск"
              placeholderTextColor={theme.palette.text.tertiary}
              clearButtonMode="always"
              onChangeText={onChangeText}
            />
          </TextInputContainer>
          <ServicesFlatList
            data={filteredServices}
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
          />
        </FlexWrapper>
      )}
    </WrapperKeyboardAvoiding>
  )

  // if ((isLoading, !filteredServices)) {
  //   return (
  //     <TemplateView title="На данный момент доступных способов оплаты нет" />
  //   )
  // }
}
