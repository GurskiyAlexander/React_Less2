import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import { useState } from 'react'
import { useGetService } from './model'
import { usePostPayment } from './model'
import { ServicePage } from './service-page'

const maxCost = 20000
const phoneNumberCorrectLength = 18

type ServiceScreenProps = NativeStackScreenProps<StackParamList, 'service'>

export const ServicePageContainer = ({ route, navigation }: ServiceScreenProps) => {
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidCost, setIsValidCost] = useState(true)
  const [cost, setCost] = useState('')
  const [phone, setPhone] = useState('')
  const { mutate } = usePostPayment()
  const { data } = useGetService(route.params.service.serviceId)
  const openResultScreen = (isSuccess: boolean) => {
    navigation.navigate('paymentResult', {
      sum: Number(cost),
      isSuccess: isSuccess,
    })
  }

  const changedCost = (cost: string) => {
    setCost(cost)
  }

  const changedPhone = (phone: string) => {
    setPhone(phone)
  }

  const postValus = (correctData: boolean) => {
    if (correctData) {
      mutate(
        {
          card_id: 0,
          service_id: `${data?.service_id}`,
          size: Number(cost),
          period_from: '',
          period_to: '',
        },
        {
          onError: () => {
            openResultScreen(false)
          },
          onSuccess: () => {
            openResultScreen(true)
          },
        },
      )
    }
  }

  const validateValues = () => {
    const correctPhone = phone.length == phoneNumberCorrectLength
    const correctCost = Number(cost) > 1 && Number(cost) < maxCost
    setIsValidPhone(correctPhone)
    setIsValidCost(correctCost)
    postValus(correctPhone && correctCost)
  }

  return ServicePage({ changedPhone, changedCost, isValidPhone, isValidCost, cashBack: data?.cashback_percentage ?? 0, iconSource: route.params.service.serviceIcon, validateValues })
}
