import React from 'react'
import { useTheme } from '@shared/hooks'
import { IconSearch } from '@shared/ui/icons'
import { TemplateView } from '@shared/ui/molecules'
import { TitleImageItem } from '../ui/molecules'
import {
  WrapperKeyboardAvoiding,
  TextInputContainer,
  ServicesFlatList,
  SearchTextInput,
  FlexWrapper,
} from './ui/atoms'
import { ActivityIndicator } from 'react-native'
import { styled } from '@shared/ui/theme'
import { ServiceUI } from '@entities/payments/types'

type Props = {
  filteredServices: ServiceUI[]
  onChangeText: (text: string) => void
  isLoading: boolean
  onPress: (item: ServiceUI) => void
}

const ActivityIndicatorContainer = styled(FlexWrapper)`
  justify-content: center;
  align-self: center;
`

export const PaymentsCategoryPage = ({
  filteredServices,
  onChangeText,
  isLoading,
  onPress,
}: Props) => {
  const theme = useTheme()

  if (!filteredServices && isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" />
      </ActivityIndicatorContainer>
    )
  }

  if (!filteredServices?.length) {
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
            onChangeText={onChangeText}
          />
        </TextInputContainer>
        <ServicesFlatList
          data={filteredServices}
          renderItem={({ item }) => (
            <TitleImageItem
              isCategoryImage={false}
              title={item.serviceName}
              imageUrl={item.serviceIcon}
              onPress={() => onPress(item)}
            />
          )}
        />
      </FlexWrapper>
    </WrapperKeyboardAvoiding>
  )
}
