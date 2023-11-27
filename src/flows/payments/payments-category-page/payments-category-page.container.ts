import { mapPaymentToUi } from "@entities/payments/model/mappers/map-payment-to-ui"
import { ServiceUI } from "@entities/payments/types"
import { updateSnackList } from "@entities/snacks/model/snackbar-store"
import { getPayment } from "@shared/api/payments/model"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useState } from "react"

type Props = {
    id: string
}

export const PaymentsCategoryPageContainer = ({ id }: Props) => {
    const [query, setQuery] = useState('')
    const [services, setServices] = useState<ServiceUI[]>()

    const { data, isLoading, isError } = useQuery({ queryKey: ['category'], queryFn: getPayment })
    const filteredServices = useMemo(() => {
        const filteredData = services?.filter((item) =>
            item.serviceName.toLowerCase().includes(query.toLowerCase()),
        )
        return filteredData
    }, [query, services])

    useEffect(() => {
        if (data) {
            setServices(mapPaymentToUi({ category: data?.category }).find(item => item.categoryId == id)?.services ?? [])
        } else if (isError) {
            updateSnackList({message: "Что-то пошло не так", duration: 10000})
        }
    }, [data, query, isError, id])

    const onChangeText = (text: string) => {
        setQuery(text)
    }
    
    return { filteredServices, onChangeText, isLoading }
}