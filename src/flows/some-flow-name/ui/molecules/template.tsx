import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { PrimaryButton } from '@shared/ui/molecules'
import { TouchableWithoutFeedback } from 'react-native'

type Action = {
  isHidden: boolean
  actionHandler: () => void
  title: string
}

type PropsCenterTitle = {
  title: string
  action?: Action
}

type PropsTitledImageItem = {
  isCategoryImage: boolean
  title: string
  imageUrl: string
  onPress: () => void
}

export const FlexView = styled.View`
  flex: 1;
`

const TemplateContainer = styled(FlexView)`
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.primary};
`

const Title = styled(Typography)`
  justify-content: center;
  align-items: center;
  margin: 30px;
`

export const TemplateView = ({ title, action }: PropsCenterTitle) => {
  return (
    <TemplateContainer>
      <Title variant="largeTitle">{title}</Title>
      {action ? (
        <PrimaryButton style={{ width: '90%' }} onPress={action.actionHandler}>
          {action.title}
        </PrimaryButton>
      ) : null}
    </TemplateContainer>
  )
}

const HorizontalContainer = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex-direction: row;
  align-items: center;
  padding: 14px;
`

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
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 20px;
`

const LeftPaddingText = styled(Typography)`
  padding-left: 16px;
`

export const Separator = styled.View`
  border-radius: 0.5px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  height: 1px;
  margin: 0px 9px 0px 72px;
`

export const TitledImageItem = ({
  isCategoryImage,
  title,
  imageUrl,
  onPress,
}: PropsTitledImageItem) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <HorizontalContainer>
        <ImageContainer>
          {isCategoryImage ? (
            <CategoriesImage source={{ uri: imageUrl }} />
          ) : (
            <PaymentImage source={{ uri: imageUrl }} />
          )}
        </ImageContainer>
        <LeftPaddingText variant="body15Regular">{title}</LeftPaddingText>
      </HorizontalContainer>
    </TouchableWithoutFeedback>
  )
}
