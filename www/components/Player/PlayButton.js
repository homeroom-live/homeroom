import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { HIDE } from './utils'
import { spacing, colors, borderRadius, opacity } from 'utils/theme'
import iconPlayWhite from 'static/assets/icons/ui/play-white.svg'

const getOpacity = ({ playing }) => {
  if (playing) {
    return HIDE
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
    opacity: 1;
  }
`
