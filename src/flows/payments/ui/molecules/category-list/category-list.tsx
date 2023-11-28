import { CategoryUI } from '@entities/payments/types'
import { Separator } from '@shared/ui/atoms/separator/separator'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { fetchCategoriesFx } from '@entities/payments/model/category-store'

import { TitledImageItem } from '../title-image-item/title-image-item'
import { useTheme } from '@shared/hooks'
import { useGetCategory } from '@flows/payments/payments-category-page/model'
import { mapPaymentToUi } from '@entities/payments/model/mappers/map-payment-to-ui'

const CategoryFlatList = styled(FlatList<CategoryUI>)`
  flex: 1;
`

type CategoriesListProps = {
  data: CategoryUI[]
  onPress: (category: CategoryUI) => void
}

export const CategoriesList = ({ onPress }: CategoriesListProps) => {
  const { data, isLoading } = useGetCategory()
  const categories = mapPaymentToUi({ category: data?.category ?? [] })
  const onRefresh = React.useCallback(() => {
    setTimeout(() => {
      fetchCategoriesFx()
    }, 2000)
  }, [])
  const theme = useTheme()

  return (
    <CategoryFlatList
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          tintColor={theme.palette.text.primary}
        />
      }
      data={categories}
      renderItem={({ item }) => (
        <TitledImageItem
          isCategoryImage={true}
          title={item.categoryName}
          imageUrl={item.categoryIcon}
          onPress={() => {
            onPress(item)
          }}
        />
      )}
      keyExtractor={(item) => item.categoryId}
      ItemSeparatorComponent={Separator}
    />
  )
}
