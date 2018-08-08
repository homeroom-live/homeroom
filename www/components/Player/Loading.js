import styled from 'styled-components'

import { Loading as _Loading } from 'components/Loading'
import { spacing, colors, borderRadius, opacity } from 'utils/theme'

export const Loading = styled(_Loading).attrs({
  color: 'tertiary',
  height: '24px',
})`
  z-index: 2147483647;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: ${spacing.regular} ${spacing.medium};
  border-radius: ${borderRadius};
  background: ${colors.black};
  opacity: ${opacity};
  display: ${props => (!props.buffering ? 'none' : 'initial')};
`
