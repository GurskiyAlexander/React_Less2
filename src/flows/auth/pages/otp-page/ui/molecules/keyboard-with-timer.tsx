import React from 'react'
import { styled } from '@shared/ui/theme'
import { CreateKeyboardButtonProps } from '../../model/type'
import { keyboardModels } from '../../model/keyboard-models'
import { DeleteButton } from './delete-button'
import { KeyboardButton } from './keyboard-button'
import { TimerButton } from './timer-button'

const Wrapper = styled.View`
  flex: 1;
`
const RowStack = styled.View`
  flex-direction: row;
`
type Props = {
  setCode: (code: string) => void
  code: string
  isClearCode: boolean
}

export const KeyboardWithTimer = ({ setCode, code, isClearCode }: Props) => {
  const createKeyboardButton = ({
    title,
    type,
    key,
  }: CreateKeyboardButtonProps) => {
    switch (type) {
      case 'delete':
        return (
          <DeleteButton
            key={key}
            action={() => {
              if (isClearCode) {
                return setCode('')
              }
              setCode(code.slice(0, -1))
            }}
          />
        )
      case 'number':
        return (
          <KeyboardButton
            key={key}
            title={title ?? ''}
            action={() => {
              if (isClearCode) {
                return setCode('')
              }
              setCode(code.length < 4 ? code + title : code)
            }}
          />
        )
      case 'timer':
        return <TimerButton key={key} />
    }
  }

  return (
    <Wrapper>
      {keyboardModels.map((items, index) => {
        return (
          <RowStack key={index}>
            {items.map((item, index) => {
              return createKeyboardButton({
                title: item.title,
                type: item.type,
                key: index,
              })
            })}
          </RowStack>
        )
      })}
    </Wrapper>
  )
}
