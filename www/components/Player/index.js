/*
 * 
 * API / example / inspiration:
 * https://github.com/video-react/video-react
 * 
 * Design: 
 * Vimeo meets YouTube meets Homeroom
 * 
 */

import React from 'react'
// import Hls from 'hls.js'
import styled from 'styled-components'

// Components

import { Video } from './Video'
import { PlayButton } from './PlayButton'
import { ControlBar } from './ControlBar'

// Utils

import { fullscreen } from './utils'
import { borderRadius } from 'utils/theme'

// Styles

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`

export class Player extends React.Component {
  componentDidMount() {
    if (this.video) {
      this.video.addEventListener('timeupdate', e => {
        this.setState({
          currentTime: this.video.currentTime,
        })
      })
    }
    // const video = document.getElementById('video')
    // if (video && Hls.isSupported()) {
    //   var hls = new Hls()
    //   hls.loadSource(this.props.src)
    //   hls.attachMedia(video)
    //   hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //     video.play()
    //   })
    // } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
    //   video.src = this.props.src
    //   video.addEventListener('loadedmetadata', function() {
    //     video.play()
    //   })
    // }
  }

  componentWillUnmount() {
    this.video.removeEventListener('timeupdate')
  }

  state = {
    playing: this.props.autoPlay || false,
    hovering: false,
    currentTime: 0,
  }

  handleHoverStart = e => {
    this.setState({ hovering: true })
  }

  handleHoverEnd = e => {
    this.setState({ hovering: false })
  }

  handlePlay = () => {
    this.setState({ playing: true })
    this.video.play()
  }

  handlePause = () => {
    this.setState({ playing: false })
    this.video.pause()
  }

  handleTogglePlay = e => {
    if (this.video.paused) {
      this.handlePlay()
    } else {
      this.handlePause()
    }
  }

  handleToggleFullscreen = e => {
    if (fullscreen.enabled) {
      if (fullscreen.isFullscreen) {
        fullscreen.exit()
      } else {
        fullscreen.start(this.container)
      }
    }
  }

  render() {
    const { src, poster, type, className, autoPlay } = this.props
    return (
      <Container
        innerRef={el => {
          this.container = el
        }}
        onMouseEnter={this.handleHoverStart}
        onMouseLeave={this.handleHoverEnd}
      >
        <Video
          controls
          id="video"
          type={type}
          poster={poster}
          src={src}
          autoPlay={autoPlay}
          className={className}
          innerRef={el => {
            this.video = el
          }}
          onClick={this.handleTogglePlay}
        />
        <PlayButton
          playing={this.state.playing}
          onClick={this.handleTogglePlay}
        />
        <ControlBar
          video={this.video}
          currentTime={this.state.currentTime}
          playing={this.state.playing}
          hovering={this.state.hovering}
          onTogglePlay={this.handleTogglePlay}
          onToggleFullscreen={this.handleToggleFullscreen}
        />
      </Container>
    )
  }
}
