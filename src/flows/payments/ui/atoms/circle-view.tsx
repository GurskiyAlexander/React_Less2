import { styled } from '@shared/ui/theme'

export const CircleView = styled.View<{ size: number }>`
  display: flex;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: rgba(112, 109, 118, 0.05);
  justify-content: center;
  align-items: center;
`
