import styled from 'styled-components'

import {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  transition,
} from 'utils/theme'

const inputSizes = {
  xsmall: '64px',
  small: '130px',
  regular: '256px',
  medium: '384px',
  large: '512px',
  xlarge: '768px',
}

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: ${props => (props.size ? inputSizes[props.size] : '100%')};
  margin-bottom: ${spacing.medium};
  color: ${colors.grayDarker};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.small};
  letter-spacing: 1;
  transition: ${transition};
  &:focus-within,
  &:hover {
    color: ${colors.secondary};
  }
`
