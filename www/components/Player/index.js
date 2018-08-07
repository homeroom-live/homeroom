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
import Hls from 'hls.js'

import { colors } from 'utils/theme'
import offlinePoster from 'static/assets/images/stream-offline.jpg'

const Video = styled.video`
  width: 100%;
  background: ${colors.black};
`

export class Player extends React.Component {
  componentDidMount() {
    const video = document.getElementById('video')
    if (video && Hls.isSupported()) {
      var hls = new Hls()
      hls.loadSource(this.props.src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play()
      })
    } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = this.props.src
      video.addEventListener('loadedmetadata', function() {
        video.play()
      })
    }
  }

  render() {
    const { src, poster, type, className, autoPlay } = this.props
    return (
      <Video
        id="video"
        controls
        poster={poster}
        className={className}
        autoPlay={autoPlay}
        type={type}
      />
    )
  }
}
