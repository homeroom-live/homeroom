import RawDropzone from 'react-dropzone'
import styled from 'styled-components'

import { spacing, colors, borderRadius, transition } from 'utils/theme'

export const Dropzone = styled(RawDropzone)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
  cursor: pointer;
  border: 2px dashed ${colors.grayLighter};
  border-radius: ${borderRadius};
  transition: ${transition};
  &:hover,
  &:focus {
    border-color: ${colors.secondary};
  }
`
