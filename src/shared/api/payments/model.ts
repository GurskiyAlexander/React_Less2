import {
  CategoriesResponse,
  RequestHistory,
  RequestStatus,
  ServiceInfo,
} from '@entities/payments/types'
import axios from 'axios'

import { api } from '../config/api'

export const getCategories = async () => {
  const response = await axios.get<CategoriesResponse>(
    'https://github.com/kode-frontend/files/raw/main/categories.json',
  )
  
  return response.data
}

export const getPayment = async () => {
  const response = await api.get<CategoriesResponse>('/api/core/payment/list')
  return response.data
}

export const getService = async (serviceId: string) => {
  const response = await api.get<ServiceInfo>(`/api/core/payment/${serviceId}`)
  return response.data
}

export const postPaymentOperation = async (
  body: RequestHistory,
): Promise<RequestStatus> => {
  const response = await api.post('/api/core/history', body)
  return response.data
}
