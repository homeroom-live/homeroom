import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Text } from 'components/Text'

import {
  formatTime,
  getPointerPosition,
  findElPosition,
} from 'components/Player/utils'
import { borderRadius, spacing, opacity, colors } from 'utils/theme'

// ================================================================================================
// ProgressBar
// ================================================================================================

const _ProgressBar = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  height: 5px;
  width: 100%;
  background: ${colors.secondary};
  cursor: pointer;
`
const Bar = styled.div`
  position: absolute;
  height: 5px;
  width: ${props => props.width || 0};
  background: ${props => props.color};
`
const HoverBar = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
`
const {
  Provider: ParentProvider,
  Consumer: ChildConsumer,
} = React.createContext()

class ProgressBar extends React.Component {
  state = {
    hovering: false,
    mouseTime: {
      time: null,
      position: 0,
    },
  }

  handleMouseMove = e => {
    const newTime =
      getPointerPosition(this.progressBar, e).x * this.props.video.duration
    const position = e.pageX - findElPosition(this.progressBar).left
    this.setState({
      hovering: true,
      mouseTime: {
        time: newTime,
        position,
      },
    })
  }

  handleMouseLeave = e => {
    this.setState({ hovering: false })
  }

  handleClick = e => {
    this.props.video.currentTime = this.state.mouseTime.time
  }

  render() {
    return (
      <ParentProvider
        value={{
          hovering: this.state.hovering,
          mouseTime: this.state.mouseTime,
        }}
      >
        <_ProgressBar
          innerRef={el => {
            this.progressBar = el
          }}
          onClick={this.handleClick}
          onMouseMove={this.handleMouseMove}
          onMouseEnter={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <HoverBar />
          {this.props.children}
        </_ProgressBar>
      </ParentProvider>
    )
  }
}

// ================================================================================================
// BufferedBar
// ================================================================================================

const toPercentage = (time, end) => {
  const percent = time / end || 0 // no NaN
  return `${(percent >= 1 ? 1 : percent) * 100}%`
}
const BufferedBar = ({ buffered, duration }) => {
  if (!buffered || !buffered.length) {
    return null
  }

  let bufferedEnd = buffered.end(buffered.length - 1)

  if (bufferedEnd > duration) {
    bufferedEnd = duration
  }

  let width = toPercentage(bufferedEnd, duration)
  return <Bar color={colors.gray} width={width} />
}

// ================================================================================================
// PlayedBar
// ================================================================================================

const _PlayedBar = styled(Bar).attrs({
  color: darken(0.1, colors.primary),
})`
  z-index: 100;
`
const PlayedBar = ({ currentTime, duration }) => (
  <_PlayedBar width={`${Math.floor((currentTime / duration) * 100)}%`} />
)

// ================================================================================================
// TimePopover
// ================================================================================================

const TimePopoverContainer = styled.div`
  position: absolute;
  top: -42px;
  left: ${props => (props.mouseTime ? props.mouseTime.position : 0) - 15}px;
  padding: ${spacing.xsmall};
  border-radius: ${borderRadius};
  background: ${colors.black};
  opacity: ${props => (!props.hovering ? 0 : 1)};
  transition: opacity 0.2s ease-in;
`
const TimePopover = ({ hovering, mouseTime, duration }) => (
  <TimePopoverContainer hovering={hovering} mouseTime={mouseTime}>
    <Text size="small" color="white" weight="bold" margin="0">
      {formatTime(mouseTime.time, duration)}
    </Text>
  </TimePopoverContainer>
)

// ================================================================================================
// ProgressText
// ================================================================================================

const ProgressText = styled(Text)`
  margin: 0;
  margin-right: ${spacing.regular};
  opacity: ${opacity};
  &:hover {
    cursor: default;
    opacity: 1;
  }
`

// ================================================================================================
// Progress
// ================================================================================================

export const Progress = ({ video }) => (
  <div>
    <ProgressText size="small" weight="bold" color="white">{`${formatTime(
      video.currentTime,
      video.duration,
    )} / ${formatTime(video.duration)}`}</ProgressText>
    <ProgressBar video={video}>
      <PlayedBar currentTime={video.currentTime} duration={video.duration} />
      <BufferedBar buffered={video.buffered} duration={video.duration} />
      <ChildConsumer>{props => <TimePopover {...props} />}</ChildConsumer>
    </ProgressBar>
  </div>
)
