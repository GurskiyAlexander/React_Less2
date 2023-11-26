import { CategoriesResponse } from "../../types"

export const mapPaymentToUi = ({ category }: CategoriesResponse) => {
    return category.map(item => ({
        categoryId: item.category_id,
        categoryName: item.category_name,
        services: item.services.map(item => ({
            serviceId: item.service_id,
            serviceName: item.service_name,
            serviceIcon: item.service_icon
        }))
    }
    ))
}