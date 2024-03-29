import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { FlexRow } from 'components/FlexRow'
import { Status } from 'components/Status'

import {
  colors,
  fontSizes,
  fontFamily,
  spacing,
  transition,
  borderRadius,
  opacity,
} from 'utils/theme'

const InputContainer = styled(FlexRow)`
  position: relative;
  padding: ${spacing.small};
  color: ${colors.secondary};
  outline: none;
  border: 2px solid ${colors.grayLighter};
  border-radius: ${borderRadius};
  transition: ${transition};
  box-sizing: border-box;
  opacity: ${opacity};
  &:hover,
  &:focus-within {
    opacity: 1;
    border: 2px solid ${colors.secondary};
  }
`
const _Input = styled.input`
  width: 100%;
  margin-top: 2px;
  padding: 0;
  font-size: ${fontSizes.regular};
  font-family: ${fontFamily};
  text-align: left;
  outline: none;
  border: none;
  transition: ${transition};
  &::placeholder {
    color: ${colors.gray};
  }
`
const InputIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  margin-right: ${spacing.small};
`

export const Input = ({ icon, status, ...props }) => (
  <InputContainer>
    {icon && <InputIcon src={icon} />}
    <_Input {...props} />
    {status && <Status status={status} />}
  </InputContainer>
)
