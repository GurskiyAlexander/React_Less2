import { CategoryUI } from '@flows/payments/types'
import { Separator } from '@shared/ui/atoms/separator/separator'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { FlatList } from 'react-native'

import { TitledImageItem } from '../title-image-item/title-image-item'

const CategoryFlatList = styled(FlatList<CategoryUI>)`
  flex: 1;
`

type CategoriesListProps = {
  data: CategoryUI[]
  onPress: (category: CategoryUI) => void
}

export const CategoriesList = ({ data, onPress }: CategoriesListProps) => {
  return (
    <CategoryFlatList
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
