import { combine, createEffect, restore } from "effector";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cache } from "react-native-cache";
import { updateSnackList } from "@entities/snacks/model/snackbar-store";

import { CategoryUI } from "../types";
import { mapPaymentToUi } from "./mappers/map-payment-to-ui";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@shared/api/payments/model";

const cache = new Cache({
    namespace: "myapp",
    policy: {
        maxEntries: 1,
        stdTTL: 86400000
    },
    backend: AsyncStorage
});

const clearCache = () => {
    cache.remove('payments')
}

export const fetchCategoriesFx = createEffect(async (isClearCache: boolean = false) => {
    if (isClearCache) {
        clearCache()
    }
    const categoriesCache = await cache.get('category')
    if (categoriesCache) {
        try {
            return JSON.parse(categoriesCache)
        } catch {
            updateSnackList({ duration: 10000, message: 'Повторите попытку позже' })
            return
        }
    } else {
        try {
            const { data } = useQuery({ queryKey: ['category'], queryFn: getCategories })
            const category = mapPaymentToUi({ category: data?.category ?? [] })
            cache.set('category', JSON.stringify(category))
            return category
        } catch {
            updateSnackList({ duration: 10000, message: 'Повторите попытку позже' })
            return
        }
    }
})

const $categories = restore<CategoryUI[]>(fetchCategoriesFx.doneData, null)
export const $fetchCategories = combine({
    data: $categories,
    isLoading: fetchCategoriesFx.pending
});