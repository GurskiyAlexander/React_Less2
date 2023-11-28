import React from 'react'
import { styled } from '@shared/ui/theme'
import { useHeaderHeight } from '@react-navigation/elements'
import { Keyboard, TouchableOpacity, View } from 'react-native'
import { WithTitleButton } from '@shared/ui/molecules'
import { CostView, PhoneInput, CardView } from './ui'

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

type Props = {
  changedPhone: (phone: string) => void
  changedCost: (cost: string) => void
  isValidPhone: boolean
  isValidCost: boolean
  cashBack: number
  iconSource: string
  validateValues: () => void
}

export const ServicePage = ({
  changedPhone,
  changedCost,
  isValidPhone,
  isValidCost,
  cashBack,
  iconSource,
  validateValues,
}: Props) => {
  const headerHeight = useHeaderHeight()

  return (
    <SafeAreaWrapper>
      <Wrapper keyboardVerticalOffset={headerHeight} enabled>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <View>
            <CardView />
            <PhoneInput
              imageSource={{ uri: iconSource }}
              onValueChanged={changedPhone}
              isValid={isValidPhone}
              placeholder="Номер телефона"
            />
            <CostView
              onValueChanged={changedCost}
              isValid={isValidCost}
              cashback={cashBack}
            />
          </View>
        </TouchableOpacity>
      </Wrapper>
      <SpacerView />
      <WithTitleButton title="Продолжить" onPress={validateValues} />
    </SafeAreaWrapper>
  )
}
