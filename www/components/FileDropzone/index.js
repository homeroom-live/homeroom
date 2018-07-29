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
  margin: 10px 0;
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
    this.props.onSubmit()
    this.props.onChange([])
  }, 500)

  /**
   * Reflect changes immediately.
   */
  handleChange = files => {
    this.props.onChange(files)
    this.handleSubmit()
  }

  render() {
    const { accept } = this.props

    return (
      <FilePickerContainer>
        <Dropzone
          onDrop={this.handleChange}
          accept={accept}
          multiple
          onClick={this.handleClick}
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
