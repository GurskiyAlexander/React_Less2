import { CategoriesResponse } from '@entities/payments/types'
import { getPayment } from '@shared/api/payments/model'
import { useQuery } from '@tanstack/react-query'
import { SERVICE_QUERY_KEYS } from '../query-keys'

type UseQueryResult = {
  data: CategoriesResponse | undefined
  isLoading: boolean
  isError: boolean
  refetch: () => void
  isRefetching: boolean
}

export const useGetPayments = () => {
  const query: UseQueryResult = useQuery({
    queryKey: SERVICE_QUERY_KEYS.paymentsGet(),
    queryFn: getPayment,
  })

  return query
}
