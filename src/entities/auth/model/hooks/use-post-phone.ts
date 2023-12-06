import { OTPResponse } from '@entities/auth/types'
import { postPhone } from '@shared/api/auth/model'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

type UseQueryResult = {
  mutate: UseMutateFunction<OTPResponse, Error, string, unknown>
  isPending: boolean
}

export const usePostPhone = () => {
  const { mutate, isPending }: UseQueryResult = useMutation({
    mutationFn: postPhone,
  })
  return { mutate, isPending }
}
