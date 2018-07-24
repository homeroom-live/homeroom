import styled from 'styled-components'

import { spacing } from 'utils/theme'

const inlineIcon = () => `
  margin-top: -4px;
  margin-right: ${spacing.small};
`

export const Icon = styled.img`
  transition: all 0.25s ease-out;
  ${props => (props.inline ? inlineIcon() : null)};
`
