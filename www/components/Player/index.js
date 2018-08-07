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

import { borderRadius } from 'utils/theme'

// Styles

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`

export class Player extends React.Component {
  componentDidMount() {
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

  state = {
    playing: this.props.autoPlay || false,
    hovering: false,
  }

  handleToggleHover = e => {
    this.setState({
      hovering: !this.state.hovering,
    })
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
    console.log(document.fullscreen)
    if (document.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    } else {
      if (this.container.requestFullscreen) {
        this.container.requestFullscreen()
      } else if (this.container.mozRequestFullScreen) {
        this.container.mozRequestFullScreen()
      } else if (this.container.msRequestFullScreen) {
        this.container.msRequestFullScreen()
      } else if (this.container.webkitRequestFullscreen) {
        this.container.webkitRequestFullscreen()
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
        onMouseEnter={this.handleToggleHover}
        onMouseLeave={this.handleToggleHover}
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
          active={!this.state.playing}
          hover={this.state.hovering}
          onClick={this.handleTogglePlay}
        />
        <ControlBar
          active={!this.state.playing}
          hover={this.state.hovering}
          onTogglePlay={this.handleTogglePlay}
          onToggleFullscreen={this.handleToggleFullscreen}
        />
      </Container>
    )
  }
}
