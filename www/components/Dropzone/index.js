import RawDropzone from 'react-dropzone'
import styled from 'styled-components'

import { spacing, colors, borderRadius, transition } from 'utils/theme'

export const Dropzone = styled(RawDropzone)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
  text-transform: initial;
  cursor: pointer;
  border: 2px dashed ${colors.secondary};
  border-radius: ${borderRadius};
  transition: ${transition};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
