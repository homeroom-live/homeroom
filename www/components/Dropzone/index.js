import RawDropzone from 'react-dropzone'
import styled from 'styled-components'

import { spacing, colors, borderRadius } from 'utils/theme'

export const Dropzone = styled(RawDropzone)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
  cursor: pointer;
  border: 2px dashed ${colors.secondary};
  border-radius: ${borderRadius};
`
