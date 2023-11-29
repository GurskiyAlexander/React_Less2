import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React from 'react'

const Wrapper = styled.View`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

const TitleView = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 5px;
`

type Props = {
  isSuccess: boolean
  sum: string
}

export const SumView = ({ isSuccess, sum }: Props) => {
  return (
    <Wrapper>
      <TitleView variant="body17Regular">
        {isSuccess ? 'Оплачено' : 'Платеж отклонен'}
      </TitleView>
      <Typography variant="largeTitle">{sum}₽</Typography>
    </Wrapper>
  )
}
