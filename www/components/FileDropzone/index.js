import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Dropzone } from 'components/Dropzone'

import { spacing } from 'utils/theme'
import iconFile from 'static/assets/icons/ui/file-plus.svg'

const FilePickerContainer = styled(FlexCol)`
  margin-bottom: ${spacing.regular};
`
const PlaceholderIcon = styled(Icon)`
  margin-bottom: ${spacing.small};
`
const PlaceholderText = styled(Text)`
  margin: 0;
  text-align: center;
`

// FileDropzone

export class FileDropzone extends React.Component {
  handleClick = e => {
    e.preventDefault()
  }

  /**
   * Submit and reset after 500ms.
   */
  handleSubmit = debounce(() => {
    if (this.props.onSubmit) {
      this.props.onSubmit()
      this.props.onChange([])
    }
  }, 500)

  /**
   * Reflect changes immediately.
   */
  handleChange = files => {
    this.props.onChange(files)
    this.handleSubmit()
  }

  render() {
    const { accept, status } = this.props

    return (
      <FilePickerContainer>
        <Dropzone
          multiple
          accept={accept}
          onDrop={this.handleChange}
          onClick={this.handleClick}
          status={status}
        >
          <PlaceholderIcon src={iconFile} />
          <PlaceholderText size="small" weight="bold">
            Drop files or click here to upload
          </PlaceholderText>
        </Dropzone>
      </FilePickerContainer>
    )
  }
}
