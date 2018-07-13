import styled from 'styled-components'

import {
  colors,
  fontSizes,
  fontFamily,
  spacing,
  transition,
  borderRadius,
} from 'utils/theme'

export const Textarea = styled.textarea`
  padding: ${spacing.small};
  color: ${colors.secondary};
  font-size: ${fontSizes.regular};
  font-family: ${fontFamily};
  outline: none;
  border: 2px solid ${colors.grayLighter};
  border-radius: ${borderRadius};
  transition: ${transition};
  resize: vertical;
  box-sizing: border-box;
  &:hover,
  &:focus {
    border: 2px solid ${colors.secondary};
  }
  &::placeholder {
    color: ${colors.gray};
  }
`
