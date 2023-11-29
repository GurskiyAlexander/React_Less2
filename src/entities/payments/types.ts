export type ServiceResponse = {
  service_id: string
  service_name: string
  service_icon: string
}

export type CategoryResponse = {
  category_id: string
  category_name: string
  category_icon: string
  services: ServiceResponse[]
}

export type CategoriesResponse = {
  category: CategoryResponse[]
}

export type ServiceUI = {
  serviceId: string
  serviceName: string
  serviceIcon: string
}

export type CategoryUI = {
  categoryId: string
  categoryName: string
  categoryIcon: string
  services: ServiceUI[]
}

export type ServiceInfo = {
  service_id: number
  cashback_percentage: number
  recipient_mask: string
  comment_mask?: string
}

export type RequestHistory = {
  card_id: number
  service_id: string
  size: number
  size_cashback?: number
  comment?: string
  period_from: string
  period_to: string
}

export type RequestStatus = {
  success: string
}
