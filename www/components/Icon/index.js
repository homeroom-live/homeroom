import styled from 'styled-components'

import { spacing } from 'utils/theme'

const inlineIcon = () => `
  margin-top: -4px;
  margin-right: ${spacing.small};
`

export const Icon = styled.img`
  height: 100%;
  transition: all 0.25s ease-out;

  &:hover {
    cursor: pointer;
  }
  ${props => (props.inline ? inlineIcon() : null)};
`
