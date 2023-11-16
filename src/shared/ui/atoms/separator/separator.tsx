import { styled } from '@shared/ui/theme'

export const Separator = styled.View`
  border-radius: 0.5px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  height: 1px;
  margin: 0 9px 0 72px;
`
