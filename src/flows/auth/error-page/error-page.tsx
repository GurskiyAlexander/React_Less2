import { Typography } from '@shared/ui/atoms'
import { WithTitleButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'
import React from 'react'
import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IconErrorFile } from '@shared/ui/icons/icon-error-file'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`
const ContentWrapper = styled.View`
  align-self: center;
  align-items: center;
  margin-top: 112px
  gap: 16px;
  padding: 0 40px;
`
const Spacer = styled.View`
  flex: 1;
`

type Props = NativeStackScreenProps<StackParamList, 'error'>

export const ErrorPage = ({ navigation }: Props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <IconErrorFile />
        <Typography variant="subtitle">Внимание</Typography>
        <Typography variant="body15Regular" align="center">
          Сервер временно недоступен. Пожалуйста, повторите попытку позднее
        </Typography>
      </ContentWrapper>
      <Spacer />
      <WithTitleButton title="Повторить" onPress={() => navigation.goBack()} />
    </Wrapper>
  )
}
