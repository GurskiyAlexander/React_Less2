import { CategoriesResponse } from '@entities/payments/types'
import { getCategories } from '@shared/api/payments/model'
import { useQuery } from '@tanstack/react-query'

import { SERVICE_QUERY_KEYS } from '../query-keys'

type UseQueryResult = {
  data: CategoriesResponse | undefined
  isLoading: boolean
  isError: boolean
  refetch: () => void
}

export const useGetCategory = () => {
  const query: UseQueryResult = useQuery({
    queryKey: SERVICE_QUERY_KEYS.categoryGet(),
    queryFn: getCategories,
  })
  return query
}
