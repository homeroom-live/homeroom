import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Dropzone } from 'components/Dropzone'

import { borderRadius, colors, spacing, opacity, transition } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const VideoPickerContainer = styled(FlexCol)`
  text-transform: initial;
  transition: ${transition};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
const VideoContainer = styled.div`
  position: relative;
  border-radius: ${borderRadius};
`
const PlaceholderIcon = styled(Icon)`
  margin-bottom: ${spacing.small};
`
const PlaceholderText = styled(Text)`
  margin: 0;
  text-align: center;
`
const XIcon = styled(Icon)`
  position: absolute;
  top: ${spacing.regular};
  right: ${spacing.regular};
  border-radius: 20px;
  background: ${colors.secondary};
  height: 20px;
  opacity: ${opacity};
  ':hover': {
    opacity: 1;
  }
`

export class VideoPicker extends React.Component {
  getVideoSrc = () => {
    const { value } = this.props
    // From API...
    if (value.length) {
      return value[0].preview
    }
    // From database
    else {
      return value.url
    }
  }

  render() {
    return (
      <VideoPickerContainer size={this.props.size}>
        {!this.props.value && (
          <Dropzone
            multiple={false}
            onDrop={this.props.onChange}
            accept="video/*"
            onClick={e => e.preventDefault()}
          >
            <PlaceholderIcon src={iconVideo} />
            <PlaceholderText size="small" weight="bold">
              Drop video or click here to upload
            </PlaceholderText>
          </Dropzone>
        )}

        {this.props.value && (
          <VideoContainer>
            <video controls width={'100%'} src={this.getVideoSrc()} />
            <XIcon
              src={iconXWhite}
              onClick={() => this.props.onRemove(this.props.value.id || '')}
            />
          </VideoContainer>
        )}
      </VideoPickerContainer>
    )
  }
}
