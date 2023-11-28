import { IconCheck, IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'
import React from 'react'

import { CircleView } from '../../atoms/circle-view'
import { ResultCircleView } from '../../atoms/result-circle-view'

type Props = {
  isSuccess: boolean
}
export const CircleInfoView = ({ isSuccess }: Props) => {
  const theme = useTheme()
  return (
    <CircleView size={150}>
      <CircleView size={112}>
        <ResultCircleView isSuccess={isSuccess}>
          {isSuccess ? (
            <IconCheck size={40} color={theme.palette.text.primary} />
          ) : (
            <IconClose size={40} color={theme.palette.text.primary} />
          )}
        </ResultCircleView>
      </CircleView>
    </CircleView>
  )
}
