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

import { colors } from 'utils/theme'
import offlinePoster from 'static/assets/images/stream-offline.jpg'

const Video = styled.video`
  width: 100%;
  background: ${colors.black};
`

export const Player = ({ src, poster, type, className, autoPlay }) => (
  <Video controls poster={poster} className={className} autoPlay={autoPlay}>
    <source src={src} type={type} />
  </Video>
)
