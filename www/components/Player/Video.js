import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Utils

import { colors } from 'utils/theme'

// Styles

const _Video = styled.video`
  width: 100%;
  height: 100%;
  background: ${colors.black};
  cursor: pointer;
`

export class Video extends React.Component {
  static propTypes = { id: PropTypes.string.isRequired }

  render() {
    const {
      id,
      poster,
      preload,
      src,
      autoPlay,
      muted,
      crossOrigin,
      innerRef,
      onClick,
    } = this.props
    return (
      <_Video
        id={id}
        src={src}
        poster={poster}
        preload={preload}
        autoPlay={autoPlay}
        muted={muted}
        crossOrigin={crossOrigin}
        innerRef={innerRef}
        onClick={onClick}
      >
        {this.props.children}
      </_Video>
    )
  }
}
