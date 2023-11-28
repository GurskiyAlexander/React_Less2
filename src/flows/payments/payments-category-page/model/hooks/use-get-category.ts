import { CategoriesResponse } from '@entities/payments/types'
import { getPayment } from '@shared/api/payments/model'
import { useQuery } from '@tanstack/react-query'
import { CATEGORY_QUERY_KEYS } from '../query-keys'

type UseQueryResult = {
  data: CategoriesResponse | undefined
  isLoading: boolean
  isError: boolean
}

export const useGetCategory = () => {
  const query: UseQueryResult = useQuery({
    queryKey: CATEGORY_QUERY_KEYS.categoryGet(),
    queryFn: getPayment,
  })

  return query
}
