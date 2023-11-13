import { ServiceUI } from "@flows/some-flow-name/pages/payments/model/categoriesResponse";

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