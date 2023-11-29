import { CategoriesResponse, ServiceResponse } from '../../types'

export const mapPaymentToUi = ({ category }: CategoriesResponse) => {
  return category.map((item) => ({
    categoryId: item.category_id,
    categoryName: item.category_name,
    categoryIcon: item.category_icon,
    services: item.services.map((item) => ({
      serviceId: item.service_id,
      serviceName: item.service_name,
      serviceIcon: item.service_icon,
    })),
  }))
}

export const mapServicesToUi = (services: ServiceResponse[]) => {
  return services.map((item) => ({
    serviceId: item.service_id,
    serviceName: item.service_name,
    serviceIcon: item.service_icon,
  }))
}
