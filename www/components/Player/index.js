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

import offlinePoster from 'static/assets/images/stream-offline.jpg'

const Video = styled.video`
  width: 100%;
`

export const Player = ({ src, type, className, autoPlay }) => (
  <Video
    controls
    poster={src ? null : offlinePoster}
    className={className}
    autoPlay={autoPlay}
  >
    ¡
    <source src={src} type={type} />
  </Video>
)
