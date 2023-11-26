import { ServiceUI } from "@entities/payments/types";

export type StackParamList = {
    payments: undefined,
    paymentsCategory: {
        title: string,
        id: string
    }
    service: {
        title: string,
        service: ServiceUI
    },
    success: {
        sum: number,
        isSuccess: boolean
    }
}