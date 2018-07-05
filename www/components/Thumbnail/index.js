import styled from 'styled-components'

const sizes = {
  xsmall: '14px',
  small: '24px',
  regular: '32px',
  medium: '48px',
  large: '72px',
  xlarge: '96px',
  xxlarge: '144px',
}

export const Thumbnail = styled.img`
  border-radius: 50%;
  height: ${props => sizes[props.size || 'regular']};
  max-height: ${props => sizes[props.size || 'regular']};
  max-width: ${props => sizes[props.size || 'regular']};
`
