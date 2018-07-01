import React from 'react'
import Dropzone from 'react-dropzone'
import glamorous from 'glamorous'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Thumbnail } from 'components/Thumbnail'

import { colors, shadow } from 'utils/colors'
import { spacing } from 'utils/spacing'

import iconCameraGray from 'static/assets/icons/ui/camera-gray.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const DropzoneWrapper = glamorous(Dropzone)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.medium,
  cursor: 'pointer',
  ...shadow,
})

const ImageContainer = glamorous.div({
  maxWidth: '174px', // xlarge thumbnail + 30px padding
  padding: spacing.regular,
  position: 'relative',
  ...shadow,
  transform: 'none !important',
})

const iconStyles = {
  padding: 0,
  position: 'absolute',
  top: spacing.medium,
  right: spacing.medium,
  borderRadius: '20px',
  background: colors.secondary,
  height: '20px',
  opacity: 0.75,
  ':hover': {
    opacity: 1,
  },
}

export class ImagePicker extends React.Component {
  getImageSrc = () => {
    const { value } = this.props
    // From browser
    if (value.preview) {
      return value.preview
    } else {
      return value.url
    }
  }

  render() {
    return (
      <FlexCol>
        {!this.props.image && (
          <DropzoneWrapper
            multiple={false}
            onDrop={this.props.onChange}
            accept="image/*"
            onClick={e => e.preventDefault()}
          >
            <Icon
              src={iconCameraGray}
              css={{ padding: 0, marginBottom: spacing.small }}
            />
            <Text
              size="xsmall"
              color="grayDarker"
              weight="bold"
              css={{ margin: 0, textAlign: 'center' }}
            >
              Drop image or click here to upload
            </Text>
          </DropzoneWrapper>
        )}

        {this.props.image && (
          <ImageContainer>
            <Thumbnail
              size={this.props.size || 'xlarge'}
              src={this.getImageSrc()}
            />
            <Icon
              src={iconXWhite}
              css={iconStyles}
              onClick={this.props.handleRemoveClick(this.props.value.id)}
            />
          </ImageContainer>
        )}
      </FlexCol>
    )
  }
}
