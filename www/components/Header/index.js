import styled from 'styled-components'

import { colors } from 'utils/colors'
import { fontSize, fontWeight } from 'utils/typography'

export const Header = styled.h2`
  color: ${colors.secondary};
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.bold};
  margin: ${props => props.margin};
`
