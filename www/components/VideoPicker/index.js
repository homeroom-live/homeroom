import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Dropzone } from 'components/Dropzone'

import { borderRadius, colors, spacing, opacity } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const VideoPickerContainer = styled(FlexCol)``
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
  handleDrop = files => {
    this.props.onChange(files[0])
  }

  handleRemove = e => {
    e.preventDefault()
    this.props.onChange()
  }

  render() {
    const { value } = this.props

    return (
      <VideoPickerContainer>
        {!value && (
          <Dropzone
            multiple={false}
            onDrop={this.handleDrop}
            accept="video/*"
            onClick={e => e.preventDefault()}
          >
            <PlaceholderIcon src={iconVideo} />
            <PlaceholderText size="small" weight="bold">
              Drop video or click here to upload
            </PlaceholderText>
          </Dropzone>
        )}

        {value && (
          <VideoContainer>
            <video
              controls
              crossOrigin="anonymous"
              width={'100%'}
              src={value.preview || value.url}
            />
            <XIcon src={iconXWhite} onClick={this.handleRemove} />
          </VideoContainer>
        )}
      </VideoPickerContainer>
    )
  }
}
