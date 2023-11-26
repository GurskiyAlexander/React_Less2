import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import { useState } from 'react'
import { styled } from '@shared/ui/theme'
import { useHeaderHeight } from '@react-navigation/elements'
import { Keyboard, TouchableOpacity, View } from 'react-native'

import { CostView, PhoneInput, CardView, Button } from './ui'
import { ServicePageContainer } from './service-page.container'

const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const SpacerView = styled.View`
  flex: 1;
`

const Wrapper = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.palette.background.primary};
`

type PaymentScreenProps = NativeStackScreenProps<StackParamList, 'service'>

export const ServicePage = ({ route, navigation }: PaymentScreenProps) => {
  const [phone, setPhone] = useState('')
  const [cost, setCost] = useState('')
  const headerHeight = useHeaderHeight()
  const { isValidPhone, isValidCost, validateValues, cashBack } =
    ServicePageContainer({
      serviceInfo: route.params.service,
      phone: phone,
      cost: cost,
      navigation: navigation,
    })

  return (
    <SafeAreaWrapper>
      <Wrapper keyboardVerticalOffset={headerHeight} enabled>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <View>
            <CardView />
            <PhoneInput
              imageSource={{ uri: route.params.service.serviceIcon }}
              onValueChanged={setPhone}
              isValid={isValidPhone}
              placeholder="Номер телефона"
            />
            <CostView
              onValueChanged={setCost}
              isValid={isValidCost}
              cashback={cashBack}
            />
          </View>
        </TouchableOpacity>
      </Wrapper>
      <SpacerView />
      <Button title="Продолжить" onPress={validateValues} />
    </SafeAreaWrapper>
  )
}
