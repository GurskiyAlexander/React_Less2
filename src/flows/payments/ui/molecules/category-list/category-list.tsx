import { CategoryUI } from '@entities/payments/types'
import { Separator } from '@shared/ui/atoms/separator/separator'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { TitleImageItem } from '../title-image-item/title-image-item'
import { useTheme } from '@shared/hooks'

const CategoryFlatList = styled(FlatList<CategoryUI>)`
  flex: 1;
`

type CategoriesListProps = {
  data: CategoryUI[]
  onPress: (category: CategoryUI) => void
  refetch: () => void
  isLoading: boolean
}

export const CategoriesList = ({
  data,
  onPress,
  refetch,
  isLoading,
}: CategoriesListProps) => {
  const theme = useTheme()

  return (
    <CategoryFlatList
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refetch}
          tintColor={theme.palette.text.primary}
        />
      }
      data={data}
      renderItem={({ item }) => (
        <TitleImageItem
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
