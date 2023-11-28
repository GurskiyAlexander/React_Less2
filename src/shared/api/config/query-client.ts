import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { QueryClient } from '@tanstack/react-query'

const dataStorageTime = 86400000

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: dataStorageTime,
      gcTime: dataStorageTime,
      retry: false,
    },
  },
})

export const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
})
