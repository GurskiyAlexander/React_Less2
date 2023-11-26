import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@app/app-navigation/types'
import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getService, postPaymentOperation } from '@shared/api/payments/model'
import {  ServiceUI } from '@entities/payments/types'


const maxCost = 20000
const phoneNumberCorrectLength = 18

type Props = {
    serviceInfo: ServiceUI
    phone: string
    cost: string 
    navigation: NativeStackNavigationProp<StackParamList, "service", undefined>
}

export const ServicePageContainer = ({ serviceInfo, phone, cost, navigation }: Props) => {
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [isValidCost, setIsValidCost] = useState(true)
    const { mutate } = useMutation({ mutationFn: postPaymentOperation })
    const { data } = useQuery({
        queryKey: ['service_info'],
        queryFn: () => getService(serviceInfo.serviceId),
    })
    
    const openResultScreen = (isSuccess: boolean) => {
        navigation.navigate('success', {
            sum: Number(cost),
            isSuccess: isSuccess,
        })
    }

    const validateValues = () => {
        const correctPhone = phone.length == phoneNumberCorrectLength
        const correctCost = Number(cost) > 1 && Number(cost) < maxCost
        setIsValidPhone(correctPhone)
        setIsValidCost(correctCost)
        if (correctCost && correctCost) {
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
    
    return { isValidPhone, isValidCost, validateValues, cashBack: data?.cashback_percentage ?? 0 }
}
