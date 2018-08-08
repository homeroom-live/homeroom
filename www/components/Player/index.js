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
import styled from 'styled-components'

// Components

import { Video } from './Video'
import { PlayButton } from './PlayButton'
import { ControlBar } from './ControlBar'
import { Loading } from './Loading'

// Utils

import { fullscreen } from './utils'

// Styles

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`

export class Player extends React.Component {
  state = {
    playing: this.props.autoPlay || false,
    hovering: false,
    buffering: true,
    currentTime: 0,
  }

  componentDidMount() {
    if (!this.video) {
      return
    }

    const Hls = require('hls.js')
    this.hls = new Hls()

    this.hls.on(Hls.Events.MEDIA_ATTACHING, this.handleToggleBuffering(true))
    this.hls.on(Hls.Events.MEDIA_ATTACHED, this.handleToggleBuffering(false))

    this.hls.loadSource(this.props.src)
    this.hls.attachMedia(this.video)
    this.video.addEventListener('timeupdate', this.handleCurrentTimeUpdate)
    // const video = document.getElementById('video')
    // this.hls.on(Hls.Events.MANIFEST_PARSED, this.handlePlay)

    // else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
    //   video.src = this.props.src
    //   video.addEventListener('loadedmetadata', function() {
    //     video.play()
    //   })
    // }
  }

  componentWillUnmount() {
    this.video.removeEventListener('timeupdate', this.handleCurrentTimeUpdate)
  }

  handleError = (event, data) => {
    console.error('HLS ERROR')
    console.error(event, data)
  }

  handleToggleBuffering = buffering => () => {
    this.setState({
      buffering,
    })
  }

  handleCurrentTimeUpdate = e => {
    this.setState({ currentTime: this.video.currentTime })
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
          buffering={this.state.buffering}
          onClick={this.handleTogglePlay}
        />
        <Loading color="white" buffering={this.state.buffering} />
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
