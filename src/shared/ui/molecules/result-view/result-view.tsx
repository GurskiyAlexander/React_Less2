import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from '@shared/ui/theme'
import { WithTitleButton } from '../with-title-button/with-title-button'

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const Title = styled(Typography)`
  margin: 32px 16px 16px;
  text-align: center;
`
const Subtitle = styled(Typography)`
  margin: 0px 16px;
  text-align: center;
`
const Spacer = styled.View`
  flex: 1;
`
const WrapperIcon = styled.View`
  margin-top: 112px;
  align-items: center;
`
type Props = {
  image: React.ReactNode
  title: string
  subTitle: string
  actionButtonTitle: string
  action: () => void
}

export const ResultView = ({
  image,
  title,
  subTitle,
  actionButtonTitle,
  action,
}: Props) => {
  return (
    <Wrapper>
      <WrapperIcon>{image}</WrapperIcon>
      <Title variant="subtitle">{title}</Title>
      <Subtitle variant="body15Regular">{subTitle}</Subtitle>
      <Spacer />
      <WithTitleButton onPress={action} title={actionButtonTitle} />
    </Wrapper>
  )
}
