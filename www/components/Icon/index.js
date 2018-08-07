import styled from 'styled-components'

import { spacing, transition } from 'utils/theme'

const inlineIcon = () => `
  margin-top: -4px;
  margin-right: ${spacing.small};
`

export const Icon = styled.img`
  height: ${props => props.height || 'initial'};
  transition: ${transition};
  ${props => (props.inline ? inlineIcon() : null)};
`
