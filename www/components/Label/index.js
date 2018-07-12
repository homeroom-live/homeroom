import styled from 'styled-components'

import { colors, fontSizes, fontWeights, spacing } from 'utils/theme'

const inputSizes = {
  xsmall: '64px',
  small: '128px',
  regular: '256px',
  medium: '384px',
  large: '512px',
  xlarge: '768px',
}

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.large};
  color: ${colors.grayDarker};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.small};
  letter-spacing: 1;
  width: ${props => (props.size ? inputSizes[props.size] : null)};
  &:focus {
    color: ${colors.primary};
  },

  // @media(max-width: 1023px): {
  //   fontSizes: 5vw
  // }
`
