import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
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

// FileDropzone

export const FileDropzone = ({ accept, onChange }) => (
  <FilePickerContainer>
    <Dropzone onDrop={onChange} accept={accept} multiple>
      <PlaceholderIcon src={iconFile} />
      <PlaceholderText size="small" weight="bold">
        Drop files or click here to upload
      </PlaceholderText>
    </Dropzone>
  </FilePickerContainer>
)
