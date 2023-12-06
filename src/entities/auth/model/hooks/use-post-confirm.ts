import { ConfirmBody, GuestToken } from '@entities/auth/types'
import { postConfirm } from '@shared/api/auth/model'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

type UseQueryResult = {
  mutate: UseMutateFunction<GuestToken, Error, ConfirmBody, unknown>
  isPending: boolean
}

export const usePostConfirm = () => {
  const { mutate, isPending }: UseQueryResult = useMutation({
    mutationFn: postConfirm,
  })
  return { mutate, isPending }
}
