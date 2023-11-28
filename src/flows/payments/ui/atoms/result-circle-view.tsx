import { styled } from '@shared/ui/theme'

export const ResultCircleView = styled.View<{ isSuccess: boolean }>`
  display: flex;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: ${({ theme, isSuccess }) =>
    isSuccess ? theme.palette.indicator.done : theme.palette.indicator.error};
  justify-content: center;
  align-items: center;
`
