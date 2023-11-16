export type ServiceResponse = {
    service_id: string,
    service_name: string,
    service_icon: string
}

export type CategoryResponse = {
    category_id: string,
    category_name: string,
    category_icon: string,
    services: ServiceResponse[]
}

export type CategoriesResponse = {
    categories: CategoryResponse[]
}

export type ServiceUI = {
    serviceId: string,
    serviceName: string,
    serviceIcon: string
}

export type CategoryUI = {
    categoryId: string,
    categoryName: string,
    categoryIcon: string,
    services: ServiceUI[]
}