import React from 'react'
import styled from 'styled-components'

import offlinePoster from 'static/assets/images/stream-offline.jpg'

const Video = styled.video`
  width: 100%;
`

export const Player = ({ src, type, ...props }) => (
  <Video controls poster={src ? null : offlinePoster} {...props}>
    <source src={src} type={type} />
  </Video>
)
