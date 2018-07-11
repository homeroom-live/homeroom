import React from 'react'
import RawDropzone from 'react-dropzone'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

import { borderRadius, transition, colors, spacing, opacity } from 'utils/theme'
import iconVideoGray from 'static/assets/icons/ui/video-gray.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const VideoPickerContainer = styled(FlexCol)`
  text-transform: initial;
`
const Dropzone = styled(RawDropzone)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
  cursor: pointer;
  border: 2px dashed ${colors.grayLighter};
  border-radius: ${borderRadius};
  transition: ${transition};
  &:hover,
  &:focus {
    border-color: ${colors.secondary};
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
    console.log(value[0].preview)
    if (value.length) {
      return value[0].preview
    }
    // From database
    else {
      return value.url
    }
  }

  render() {
    console.log(this.props)
    return (
      <VideoPickerContainer size={this.props.size}>
        {!this.props.value && (
          <Dropzone
            multiple={false}
            onDrop={this.props.onChange}
            accept="video/*"
            onClick={e => e.preventDefault()}
          >
            <PlaceholderIcon src={iconVideoGray} />
            <PlaceholderText size="small" color="grayDarker" weight="bold">
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
