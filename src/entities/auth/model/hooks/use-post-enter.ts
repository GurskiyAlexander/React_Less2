import { EnterBody, EnterResponse } from '@entities/auth/types'
import { postEnter } from '@shared/api/auth/model'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

type UseQueryResult = {
  mutate: UseMutateFunction<EnterResponse, Error, EnterBody, unknown>
  isPending: boolean
}

export const usePostEnter = () => {
  const { mutate, isPending }: UseQueryResult = useMutation({
    mutationFn: postEnter,
  })
  return { mutate, isPending }
}
