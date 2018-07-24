import styled from 'styled-components'

import { colors } from 'utils/theme'

const sizes = {
  xsmall: '14px',
  small: '24px',
  regular: '32px',
  medium: '48px',
  large: '64px',
  xlarge: '96px',
  xxlarge: '128px',
  xxxlarge: '256px',
}

export const Thumbnail = styled.img`
  border-radius: 50%;
  height: ${props => sizes[props.size || 'regular'] || '100%'};
  width: ${props => sizes[props.size || 'regular'] || '100%'};
  max-height: ${props => sizes[props.size || 'regular'] || '100%'};
  max-width: ${props => sizes[props.size || 'regular'] || '100%'};
  background: ${colors.grayDarkest};
`
