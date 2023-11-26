import { createEvent, createStore } from "effector";

export type SnackModel = {
    duration: number
    message: string
}
export const updateSnackList = createEvent<SnackModel | undefined>()
export const $snackList = createStore<SnackModel[]>([])
$snackList.on(updateSnackList, (state, payload) => {
    if (payload) {
        if (state.length > 0) {
            state.forEach((snack, index) => {
                if (index === 0 && snack.message === payload.message) {
                    state.shift()
                    return [payload, ...state]
                } else {
                    return snack.message === payload.message ? state : [...state, payload]
                }
            })
        } else {
            return [payload, ...state]
        } 
    } else {
        return state
    }
})