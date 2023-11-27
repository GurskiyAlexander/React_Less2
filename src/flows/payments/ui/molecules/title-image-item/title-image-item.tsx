import React from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

const ImageContainer = styled.View`
  background-color: ${({ theme }) => theme.palette.content.secondary};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
`
const CategoriesImage = styled.Image`
  width: 24px;
  height: 24px;
`
const PaymentImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

const LeftPaddingText = styled(Typography)`
  padding-left: 16px;
`

const TouchableOpacityContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex-direction: row;
  align-items: center;
  padding: 16px;
`

type PropsTitledImageItem = {
  isCategoryImage: boolean
  title: string
  imageUrl: string
  onPress: () => void
}

export const TitledImageItem = ({
  isCategoryImage,
  title,
  imageUrl,
  onPress,
}: PropsTitledImageItem) => {
  return (
    <TouchableOpacityContainer onPress={onPress}>
      <ImageContainer>
        {isCategoryImage ? (
          <CategoriesImage source={{ uri: imageUrl }} />
        ) : (
          <PaymentImage source={{ uri: imageUrl }} />
        )}
      </ImageContainer>
      <LeftPaddingText variant="body15Regular">{title}</LeftPaddingText>
    </TouchableOpacityContainer>
  )
}
