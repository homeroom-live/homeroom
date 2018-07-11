import styled from 'styled-components'

import { colors, fontSizes, fontFamily, spacing, transition } from 'utils/theme'

export const Input = styled.input`
  padding: ${spacing.xsmall} 0;
  color: ${colors.secondary};
  font-size: ${fontSizes.regular};
  font-family: ${fontFamily};
  outline: none;
  border: none;
  border-bottom: 2px solid ${colors.grayLighter};
  transition: ${transition};
  &:hover,
  &:focus {
    border-bottom: 2px solid ${colors.secondary};
  }
  &::placeholder {
    color: ${colors.gray};
  }
`
