import { CreateKeyboardButtonProps } from './type'

export const keyboardModels: CreateKeyboardButtonProps[][] = [
  [
    { title: '1', type: 'number' },
    { title: '2', type: 'number' },
    { title: '3', type: 'number' },
  ],
  [
    { title: '4', type: 'number' },
    { title: '5', type: 'number' },
    { title: '6', type: 'number' },
  ],
  [
    { title: '7', type: 'number' },
    { title: '8', type: 'number' },
    { title: '9', type: 'number' },
  ],
  [{ type: 'timer' }, { title: '0', type: 'number' }, { type: 'delete' }],
]
