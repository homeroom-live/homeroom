import styled from 'styled-components'

import { colors, fontSizes, fontWeights } from 'utils/theme'

export const Header = styled.h2`
  color: ${colors.secondary};
  font-size: ${props => (props.size ? fontSizes[props.size] : fontSizes.large)};
  font-weight: ${props =>
    props.weight ? fontWeights[props.weight] : fontWeights.bold};
  margin: ${props => props.margin || `0`};
`
