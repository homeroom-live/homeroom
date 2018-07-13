import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Dropzone } from 'components/Dropzone'

import { borderRadius, colors, spacing, opacity } from 'utils/theme'
import iconCamera from 'static/assets/icons/ui/camera.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const ImagePickerContainer = styled(FlexCol)``
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
  width: 20px;
  opacity: ${opacity};
  ':hover': {
    opacity: 1;
  }
`
const PreviewImage = styled.img`
  width: 100%;
`

export class ImagePicker extends React.Component {
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
      <ImagePickerContainer>
        {!value && (
          <Dropzone
            multiple={false}
            onDrop={this.handleDrop}
            accept="image/*"
            onClick={e => e.preventDefault()}
          >
            <PlaceholderIcon src={iconCamera} />
            <PlaceholderText size="small" weight="bold">
              Drop image or click here to upload
            </PlaceholderText>
          </Dropzone>
        )}

        {value && (
          <ImageContainer>
            <PreviewImage src={value.preview || value.url} />
            <XIcon src={iconXWhite} onClick={this.handleRemove} />
          </ImageContainer>
        )}
      </ImagePickerContainer>
    )
  }
}
