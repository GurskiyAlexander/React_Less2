import { StackParamList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { WithTitleButton } from '@shared/ui/molecules'
import { IconSuccessAuth } from '@shared/ui/icons/icon-success-auth'
import { setIsSuccessLogin } from '@entities/auth/model/store'

type AuthSuccessPageProps = NativeStackScreenProps<StackParamList, 'authResult'>

const Wrapper = styled(SafeAreaView)`
  flex:1
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
  margin-top: 112px
  align-items: center;
`
export const AuthResultPage = ({ navigation }: AuthSuccessPageProps) => {
  const handleContinue = () => {
    navigation.navigate('main')
    setIsSuccessLogin
  }

  return (
    <Wrapper>
      <WrapperIcon>
        <IconSuccessAuth />
      </WrapperIcon>
      <Title variant="subtitle">Все готово</Title>
      <Subtitle variant="body15Regular">
        Теперь вы можете использовать мобильное приложение Kode bank
      </Subtitle>
      <Spacer />
      <WithTitleButton onPress={handleContinue} title="Продолжить" />
    </Wrapper>
  )
}
