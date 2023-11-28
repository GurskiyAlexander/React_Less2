import { combine, createEffect, restore } from "effector";
import { updateSnackList } from "@features/snack/snackbar-store";
import { CategoryUI } from "../types";
import { mapPaymentToUi } from "./mappers/map-payment-to-ui";
import { useQuery } from "@tanstack/react-query";
import { getPayment } from "@shared/api/payments/model";
import { CATEGORY_QUERY_KEYS } from "@flows/payments/payments-category-page/model/query-keys";

export const fetchCategoriesFx = createEffect(async () => {
    try {
        const { data } = useQuery({
            queryKey: CATEGORY_QUERY_KEYS.categoryGet(),
            queryFn: getPayment,
        })
        const category = mapPaymentToUi({ category: data?.category ?? [] })
        return category
    } catch {
        updateSnackList({ duration: 10000, message: 'Повторите попытку позже' })
        return []
    }
})

const $categories = restore<CategoryUI[]>(fetchCategoriesFx.doneData, null)
export const $fetchCategories = combine({
    data: $categories,
    isLoading: fetchCategoriesFx.pending
});