import React from 'react'
import DropzoneComponent from 'react-dropzone'
import styled from 'styled-components'

import { Status } from 'components/Status'

import { spacing, colors, borderRadius, transition } from 'utils/theme'

const Container = styled.div`
  position: relative;
`
const _Dropzone = styled(DropzoneComponent)`
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

export const Dropzone = ({ status, ...props }) => (
  <Container>
    <_Dropzone {...props} />
    {status && <Status status={status} />}
  </Container>
)
