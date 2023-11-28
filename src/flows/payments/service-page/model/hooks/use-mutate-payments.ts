import { RequestHistory, RequestStatus } from "@entities/payments/types";
import { postPaymentOperation } from "@shared/api/payments/model";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";

type UseQueryResult = {
  mutate: UseMutateFunction<RequestStatus, Error, RequestHistory, unknown>
}

export const usePostPayment = () => {
    const mutate: UseQueryResult = useMutation({ mutationFn: postPaymentOperation })
    return mutate
}


