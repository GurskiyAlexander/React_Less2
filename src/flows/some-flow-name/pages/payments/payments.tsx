/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, FlatListProps } from 'react-native'
import { styled } from '@shared/ui/theme'
import { StackParamList } from '@app/app-navigation/models'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { Typography } from '@shared/ui/atoms'
import axios from 'axios'
import {
  FlexView,
  Separator,
  TitledImageItem,
} from '@flows/some-flow-name/ui/molecules'

import { CategoryUI, PaymentParser } from './model/categoriesResponse'

const CategoryFlatList = styled(
  FlatList as new (props: FlatListProps<CategoryUI>) => FlatList<CategoryUI>,
)`
  flex: 1;
`
const Wrapper = styled(FlexView)`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`

const Header = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 116px;
  justify-content: flex-end;
`
const HeaderText = styled(Typography)`
  margin: 0px 0px 8px 16px;
`

const ActivityIndicatorContainer = styled(Wrapper)`
  justify-content: center;
  align-self: center;
`

type PaymentsHeaderProps = {
  title: string
}

type CategoriesListProps = {
  data: CategoryUI[]
  onPress: (category: CategoryUI) => void
}

export const PaymentsHeader = ({ title }: PaymentsHeaderProps) => {
  return (
    <Header>
      <HeaderText variant="title">{title}</HeaderText>
    </Header>
  )
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

export const PaymentsFlow = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
  const [categories, setCategories] = useState<CategoryUI[]>()

  const fetchPayments = async () => {
    const response = await axios.get(
      'https://github.com/kode-frontend/files/raw/main/categories.json',
    )
    const data = response.data
    const payments = PaymentParser({ categories: data.category })
    setCategories(payments)
    return payments
  }

  useEffect(() => {
    fetchPayments()
  }, [])

  const onPressCategory = (category: CategoryUI) => {
    navigation.navigate('paymentsCategory', {
      title: category.categoryName,
      services: category.services,
    })
  }

  return (
    <Wrapper>
      <PaymentsHeader {...{ title: 'Платежи' }} />
      {!categories ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" />
        </ActivityIndicatorContainer>
      ) : (
        <CategoriesList {...{ data: categories, onPress: onPressCategory }} />
      )}
    </Wrapper>
  )
}
