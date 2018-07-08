import styled from 'styled-components'

import { fontSizes, fontWeights, colors } from 'utils/theme'

export const TextStyle = styled.span`
  color: ${props => (props.color ? colors[props.color] : null)};
  font-size: ${props => (props.size ? fontSizes[props.size] : null)};
  font-weight: ${props => (props.weight ? fontWeights[props.weight] : null)};
  margin: ${props => props.margin};
`
