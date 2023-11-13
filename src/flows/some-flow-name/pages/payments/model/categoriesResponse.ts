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

export const PaymentParser = ({ categories }: CategoriesResponse) => {
    return categories.map(item => ({
        categoryId: item.category_id,
        categoryName: item.category_name,
        categoryIcon: item.category_icon,
        services: item.services.map(item => ({
            serviceId: item.service_id,
            serviceName: item.service_name,
            serviceIcon: item.service_icon
        }))
    }
    ))
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