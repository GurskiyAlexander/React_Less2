import { ServiceUI } from "@entities/payments/types";

export type StackParamList = {
    payments: undefined,
    paymentsCategory: {
        title: string,
        services: ServiceUI[]
    }
    service: {
        title: string,
        service: ServiceUI
    },
}