import React from 'react'
import styled from 'styled-components'

import { Progress } from './Progress'
import { Volume } from './Volume'
import { Icon } from 'components/Icon'

import { spacing, colors, opacity, transition } from 'utils/theme'
import { HIDE } from 'components/Player/utils'

import iconPlayWhite from 'static/assets/icons/ui/play-white.svg'
import iconPauseWhite from 'static/assets/icons/ui/pause-white.svg'
import iconExpandWhite from 'static/assets/icons/ui/expand-white.svg'

const getOpacity = ({ playing, hovering }) => {
  if (hovering) {
    return opacity
  } else {
    return HIDE
  }
}

const BarIcon = styled(Icon)`
  height: 16px;
  padding: ${spacing.small};
  opacity: ${opacity};
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
const RightButtons = styled.div`
  display: flex;
  margin-left: auto;
`
const LeftButtons = styled.div`
  display: flex;
  margin-right: auto;
`

// SmallPlayButton

const SmallPlayButton = styled(BarIcon)``

const FullscreenButton = styled(BarIcon)`
  align-self: flex-end;
`

// ControlBar

const Container = styled.div`
  z-index: 2147483647;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${spacing.xsmall};
  background: ${colors.black};
  opacity: ${props => getOpacity(props)};
  transition: ${transition};
  &:hover {
    opacity: 1;
  }
`

export class ControlBar extends React.Component {
  render() {
    const {
      video,
      playing,
      hovering,
      onTogglePlay,
      onToggleFullscreen,
    } = this.props

    if (!video) {
      return null
    }

    return (
      <Container playing={playing} hovering={hovering}>
        <LeftButtons>
          <SmallPlayButton
            src={playing ? iconPauseWhite : iconPlayWhite}
            onClick={onTogglePlay}
          />
          <Volume video={video} />
          <Progress video={video} />
        </LeftButtons>
        <RightButtons>
          <FullscreenButton
            src={iconExpandWhite}
            onClick={onToggleFullscreen}
          />
        </RightButtons>
      </Container>
    )
  }
}
