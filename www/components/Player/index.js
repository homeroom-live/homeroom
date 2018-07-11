import React from 'react'
import styled from 'styled-components'

import offlinePoster from 'static/assets/images/stream-offline.jpg'

const Video = styled.video`
  width: 100%;
`

export const Player = ({ src, type }) => (
  <Video controls poster={offlinePoster}>
    <source src={src} type={type} />
  </Video>
)
