import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'components/FlexRow'
import { Label } from 'components/Label'

import { colors, transition } from 'utils/theme'

const _Toggle = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  background: ${colors.secondary};
`
const ToggleContainer = styled(FlexRow)`
  position: relative;
  border: none;
  border-radius: 500px;
  background: ${props => (props.checked ? colors.primary : colors.gray)};
  height: 36px;
  width: 80px;
  cursor: pointer;
`
const ToggleIndicator = styled.span`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: white;
  transition: ${transition};
  transform: ${props =>
    props.checked ? 'translateX(48px)' : 'translateX(4px)'};
`
const ToggleLabel = styled(Label)`
  width: initial;
  margin: 0;
  text-align: center;
  color: ${props => (props.checked ? colors.primary : colors.gray)} !important;
`

export const Toggle = ({
  value,
  activeLabel,
  inactiveLabel,
  onChange,
  onBlur,
  ...props
}) => (
  <ToggleLabel checked={value} onClick={onChange} {...props}>
    {value ? activeLabel : inactiveLabel}
    <ToggleContainer checked={value}>
      <ToggleIndicator checked={value} />
      <_Toggle checked={value} onChange={onChange} onBlur={onBlur} />
    </ToggleContainer>
  </ToggleLabel>
)
