import { CategoriesResponse } from "../types"

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