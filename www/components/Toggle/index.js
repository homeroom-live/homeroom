import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'components/FlexRow'
import { Label } from 'components/Label'

import { colors, shadow, transition } from 'utils/theme'

const _Toggle = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  background: ${colors.secondary};
`
const ToggleContainer = styled(FlexRow)`
  ${shadow()};
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
  margin: 0;
  text-align: center;
  color: ${props => (props.checked ? colors.primary : colors.gray)} !important;
`

export class Toggle extends React.Component {
  state = {
    checked: this.props.checked || false,
  }

  render() {
    return (
      <ToggleLabel
        checked={this.state.checked}
        onClick={e => {
          e.preventDefault()
          this.setState({ checked: !this.state.checked })
        }}
        {...this.props}
      >
        {this.state.checked ? this.props.activeLabel : this.props.inactiveLabel}
        <ToggleContainer checked={this.state.checked}>
          <ToggleIndicator checked={this.state.checked} />
          <_Toggle
            checked={this.state.checked}
            onChange={this.props.onChange}
          />
        </ToggleContainer>
      </ToggleLabel>
    )
  }
}
