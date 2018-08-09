import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components/Icon'

import { borderRadius, spacing, opacity, colors } from 'utils/theme'

import iconVolumeOnWhite from 'static/assets/icons/ui/volume-on-white.svg'
import iconVolumeOffWhite from 'static/assets/icons/ui/volume-off-white.svg'

const VolumeContainer = styled.div`
  position: relative;
`
const VolumeIcon = styled(Icon)`
  height: 16px;
  padding: ${spacing.small};
  opacity: ${opacity};
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
const VolumeSliderContainer = styled.div`
  z-index: 120;
  position: absolute;
  top: -61px;
  left: -32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.small};
  background: ${colors.black};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  transform: rotate(270deg);
`
const VolumeSlider = styled.input``

export class Volume extends React.Component {
  state = {
    hovering: false,
    volume: this.props.video.volume,
  }

  handleToggleHover = hovering => e => {
    this.setState({
      hovering,
    })
  }

  handleToggleMute = e => {
    this.props.video.muted = !this.props.video.muted
    this.forceUpdate()
  }

  handleVolumeChange = e => {
    this.props.video.volume = e.target.value
    this.setState({ volume: e.target.value })
  }

  render() {
    return (
      <VolumeContainer
        onMouseEnter={this.handleToggleHover(true)}
        onMouseLeave={this.handleToggleHover(false)}
      >
        <VolumeIcon
          src={
            this.props.video.muted || this.props.video.volume === 0
              ? iconVolumeOffWhite
              : iconVolumeOnWhite
          }
          onClick={this.handleToggleMute}
        />
        {this.state.hovering && (
          <VolumeSliderContainer onMouseEnter={this.handleToggleHover(true)}>
            <VolumeSlider
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={this.state.volume}
              onChange={this.handleVolumeChange}
            />
          </VolumeSliderContainer>
        )}
      </VolumeContainer>
    )
  }
}
