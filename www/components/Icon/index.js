import styled from 'styled-components'

import { spacing } from 'utils/spacing'

export const Icon = styled.img`
  height: 100%;
  padding: ${spacing.small};
  transition: all 0.25s ease-out;

  &:hover {
    cursor: pointer;
  }
`
