import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Thumbnail } from 'components/Thumbnail'
import { Dropzone } from 'components/Dropzone'

import { borderRadius, colors, spacing, opacity } from 'utils/theme'
import iconCameraGray from 'static/assets/icons/ui/camera-gray.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const ImagePickerContainer = styled(FlexCol)`
  text-transform: initial;
`
const ImageContainer = styled.div`
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

export class ImagePicker extends React.Component {
  getImageSrc = () => {
    const { value } = this.props
    // From browser
    if (value.length) {
      return value[0].preview
    } else {
      return value.url
    }
  }

  render() {
    return (
      <ImagePickerContainer>
        {!this.props.value && (
          <Dropzone
            multiple={false}
            onDrop={this.props.onChange}
            accept="image/*"
            onClick={e => e.preventDefault()}
          >
            <PlaceholderIcon src={iconCameraGray} />
            <PlaceholderText size="small" color="gray" weight="bold">
              Drop image or click here to upload
            </PlaceholderText>
          </Dropzone>
        )}

        {this.props.value && (
          <ImageContainer>
            <Thumbnail size="xxxlarge" src={this.getImageSrc()} />
            <XIcon src={iconXWhite} onClick={this.props.onRemove} />
          </ImageContainer>
        )}
      </ImagePickerContainer>
    )
  }
}
