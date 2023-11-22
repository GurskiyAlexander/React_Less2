import { styled } from '@shared/ui/theme'
import { FlatList } from 'react-native'
import { ServiceUI } from '@entities/payments/types'

export const FlexWrapper = styled.View`
  flex: 1
  background-color: ${({ theme }) => theme.palette.background.primary};
`
export const TextInputContainer = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-color: #333;
  margin: 16px 10px 16px;
  flex-direction: row;
  padding: 10px 5px;
`

export const SearchTextInput = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  flex-grow: 1;
  flex: 1;
`
export const ServicesFlatList = styled(FlatList<ServiceUI>)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
export const WrapperKeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
