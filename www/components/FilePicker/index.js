import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { File } from 'components/File'
import { Dropzone } from 'components/Dropzone'

import { spacing } from 'utils/theme'
import iconFile from 'static/assets/icons/ui/file-plus.svg'

const FilePickerContainer = styled(FlexCol)``
const PlaceholderIcon = styled(Icon)`
  margin-bottom: ${spacing.small};
`
const PlaceholderText = styled(Text)`
  margin: 0;
  text-align: center;
`

export class FilePicker extends React.Component {
  renderFile = file => (
    <File
      {...file}
      name={file.name}
      key={file.name}
      onRemove={this.props.onRemove}
    />
  )

  render() {
    return (
      <FilePickerContainer>
        <Dropzone
          onDrop={this.props.onChange}
          multiple={this.props.multiple}
          accept={this.props.accept}
          onClick={e => e.preventDefault()}
        >
          <PlaceholderIcon src={iconFile} />
          <PlaceholderText size="small" weight="bold">
            Drop files or click here to upload
          </PlaceholderText>
        </Dropzone>

        <div>{this.props.value && this.props.value.map(this.renderFile)}</div>
      </FilePickerContainer>
    )
  }
}
