import React from 'react'
import RawDropzone from 'react-dropzone'
import glamorous from 'glamorous'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

import { colors, shadow } from 'utils/colors'
import { spacing } from 'utils/spacing'
import iconVideoGray from 'static/assets/icons/ui/video-gray.svg'
import iconXWhite from 'static/assets/icons/ui/x-circle-white.svg'

const Dropzone = glamorous(RawDropzone)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.medium,
  cursor: 'pointer',
  ...shadow,
})

const VideoContainer = glamorous.div({
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

export class VideoPicker extends React.Component {
  getVideoSrc = () => {
    const { video } = this.props
    // From API...
    if (video.length) {
      return video[0].preview
    }
    // From database
    else {
      return video.url
    }
  }

  render() {
    return (
      <FlexCol>
        {!this.props.video && (
          <Dropzone
            multiple={false}
            onDrop={this.props.onChange}
            accept={this.props.accept}
            onClick={e => e.preventDefault()}
          >
            <Icon
              src={iconVideoGray}
              css={{ padding: 0, marginBottom: spacing.small }}
            />
            <Text
              size="xsmall"
              color="grayDarker"
              weight="bold"
              css={{ margin: 0, textAlign: 'center' }}
            >
              Drop video or click here to upload
            </Text>
          </Dropzone>
        )}

        {this.props.video && (
          <VideoContainer>
            <video controls width={'100%'} src={this.getVideoSrc()} />
            <Icon
              src={iconXWhite}
              css={iconStyles}
              onClick={this.props.handleRemoveClick(this.props.video.id || '')}
            />
          </VideoContainer>
        )}
      </FlexCol>
    )
  }
}
