import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import { Status } from 'components/Status'

import {
  colors,
  fontSizes,
  fontFamily,
  spacing,
  transition,
  borderRadius,
} from 'utils/theme'

const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
`
const _Textarea = styled(TextareaAutosize)`
  width: 100%;
  padding: ${spacing.small};
  color: ${colors.secondary};
  font-size: ${fontSizes.regular};
  font-family: ${fontFamily};
  white-space: pre-wrap;
  outline: none;
  border: 2px solid ${colors.grayLighter};
  border-radius: ${borderRadius};
  transition: ${transition};
  resize: vertical;
  box-sizing: border-box;
  &:hover,
  &:focus {
    border: 2px solid ${colors.secondary};
  }
  &::placeholder {
    color: ${colors.gray};
  }
`

export const Textarea = ({ status, ...props }) => (
  <TextareaContainer>
    <_Textarea {...props} />
    {status && <Status status={status} />}
  </TextareaContainer>
)
