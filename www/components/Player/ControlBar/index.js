import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { spacing, colors, borderRadius, opacity, transition } from 'utils/theme'

import iconPlayWhite from 'static/assets/icons/ui/play-white.svg'
import iconPauseWhite from 'static/assets/icons/ui/pause-white.svg'
import iconExpandWhite from 'static/assets/icons/ui/expand-white.svg'

const getOpacity = ({ active, hover }) => {
  if (hover) {
    return 1
  } else if (!active) {
    return 0
  } else {
    return opacity
  }
}

const BarIcon = styled(Icon)`
  height: 16px;
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

const SmallPlayButton = styled(BarIcon)`
  margin-right: ${spacing.regular};
`

const FullscreenButton = styled(BarIcon)`
  align-self: flex-end;
  margin-left: ${spacing.regular};
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
  padding: ${spacing.small} ${spacing.regular};
  background: ${colors.black};
  opacity: ${props => getOpacity(props)};
  transition: ${transition};
  &:hover {
    opacity: 1;
  }
`

export class ControlBar extends React.Component {
  handleToggleFullscreen = e => {
    this.props.video.toggleFullscreen()
  }

  render() {
    const { active, hover, onTogglePlay, onToggleFullscreen } = this.props

    return (
      <Container active={active} hover={hover}>
        <LeftButtons>
          <SmallPlayButton
            src={active ? iconPlayWhite : iconPauseWhite}
            onClick={onTogglePlay}
          />
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
