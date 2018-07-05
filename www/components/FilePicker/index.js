import React from 'react'
import RawDropzone from 'react-dropzone'
import glamorous from 'glamorous'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { File } from 'components/File'

import { spacing } from 'utils/spacing'
import { theme } from 'utils/theme'
import { shadow } from 'utils/colors'
import iconFile from 'static/assets/icons/ui/file-plus.svg'

const Dropzone = glamorous(RawDropzone)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.medium,
  cursor: 'pointer',
  ...shadow,
  ...theme,
})

export class FilePicker extends React.Component {
  renderFile = file => (
    <File
      {...file}
      name={file.name}
      key={file.name}
      onRemoveClick={this.props.handleRemoveClick}
    />
  )

  render() {
    return (
      <FlexCol>
        <Dropzone
          onDrop={this.props.onChange}
          multiple={this.props.multiple}
          accept={this.props.accept}
          onClick={e => e.preventDefault()}
        >
          <Icon
            src={iconFile}
            css={{ padding: 0, marginBottom: spacing.small }}
          />
          <Text
            size="xsmall"
            color="grayDarker"
            weight="bold"
            css={{ margin: 0, textAlign: 'center' }}
          >
            Drop files or click here to upload
          </Text>
        </Dropzone>

        <div>{this.props.files && this.props.files.map(this.renderFile)}</div>
      </FlexCol>
    )
  }
}
