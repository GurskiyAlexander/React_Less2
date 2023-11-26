import { CategoryUI } from '@entities/payments/types'
import { Separator } from '@shared/ui/atoms/separator/separator'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { fetchCategoriesFx } from '@entities/payments/model/category-store'

import { TitledImageItem } from '../title-image-item/title-image-item'

const CategoryFlatList = styled(FlatList<CategoryUI>)`
  flex: 1;
`

type CategoriesListProps = {
  data: CategoryUI[]
  onPress: (category: CategoryUI) => void
}

export const CategoriesList = ({ data, onPress }: CategoriesListProps) => {
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      fetchCategoriesFx(true)
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <CategoryFlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={data}
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
