import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import { useState } from 'react'
import { styled } from '@shared/ui/theme'
import { useHeaderHeight } from '@react-navigation/elements'
import { Alert, Keyboard, TouchableOpacity, View } from 'react-native'

import { CostView, PhoneInput, CardView, Button } from '../components'

const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Wrapper = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.palette.background.primary};
`

type PaymentScreenProps = NativeStackScreenProps<StackParamList, 'service'>

const maxCost = 20000
const phoneNumberCorrectLength = 18

export const ServicePage = ({ route }: PaymentScreenProps) => {
  const [phone, setPhone] = useState('')
  const [cost, setCost] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidCost, setIsValidCost] = useState(true)
  const headerHeight = useHeaderHeight()

  const validateValues = () => {
    setIsValidPhone(phone.length == phoneNumberCorrectLength)
    setIsValidCost(Number(cost) > 1 && Number(cost) < maxCost)
    Alert.alert(
      phone.length == phoneNumberCorrectLength &&
        Number(cost) > 1 &&
        Number(cost) < maxCost
        ? 'Успех'
        : 'Проверьте введенные данные',
      undefined,
      [{ text: 'OK' }],
    )
  }

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
            <CostView onValueChanged={setCost} isValid={isValidCost} />
          </View>
        </TouchableOpacity>
      </Wrapper>
      <Button title="Продолжить" onPress={validateValues} />
    </SafeAreaWrapper>
  )
}
