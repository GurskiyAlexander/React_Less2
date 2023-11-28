import { createEvent, createStore } from 'effector'
import { SnackModel } from '../types'

export const updateSnackList = createEvent<SnackModel | undefined>()
export const $snackList = createStore<SnackModel[]>([])
$snackList.on(updateSnackList, (state, payload) => {
  if (!payload) {
    return state
  }
  if (!state.length) {
    return [payload]
  }
  state.forEach((snack, index) => {
    if (index === 0 && snack.message === payload.message) {
      state.shift()
      return [payload, ...state]
    }
    return snack.message === payload.message ? state : [...state, payload]
  })
})
