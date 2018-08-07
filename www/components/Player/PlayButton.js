import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { spacing, colors, borderRadius, opacity } from 'utils/theme'
import iconPlayWhite from 'static/assets/icons/ui/play-white.svg'

const getOpacity = ({ active, hover }) => {
  if (!active) {
    return 0
  } else if (hover) {
    return 1
  } else {
    return opacity
  }
}

export const PlayButton = styled(Icon).attrs({
  src: iconPlayWhite,
  alt: 'Play',
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
  opacity: ${props => getOpacity(props)};
  &:hover {
    cursor: pointer;
  }
`
