import { ServiceInfo } from '@entities/payments/types'
import { getService } from '@shared/api/payments/model'
import { useQuery } from '@tanstack/react-query'
import { SERVICE_QUERY_KEYS } from '../query-keys'

type UseQueryResult = {
  data: ServiceInfo | undefined
}

export const useGetService = (serviceID: string) => {
  const query: UseQueryResult = useQuery({
    queryKey: SERVICE_QUERY_KEYS.serviceGet(),
    queryFn: () => getService(serviceID),
  })
  return query
}
