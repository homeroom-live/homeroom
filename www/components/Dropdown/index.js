import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import {
  spacing,
  fontSizes,
  fontWeights,
  colors,
  transition,
  opacity,
  borderRadius,
} from 'utils/theme'

export const DropdownContainer = styled.div`
  position: relative;
`
const DropdownOptions = styled.ul`
  position: absolute;
  right: 0;
  min-width: 192px;
  padding: 0;
  margin-top: ${spacing.small};
  outline: none;
  border-radius: ${borderRadius};
  background: ${colors.white};
  box-shadow: ${colors.shadowActive};
  list-style: none;
`
export const DropdownOption = styled.li`
  padding: ${spacing.regular};
  background: ${colors.white};
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: ${transition};
  &:hover,
  &:focus,
  &:active {
    background: ${colors.grayLightest};
  }
`
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  transition: ${transition};
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : opacity)};
  &:hover {
    opacity: 1;
  }
`
const ToggleIcon = styled(Icon)`
  margin-right: ${spacing.small};
`
const ToggleLabel = styled.p`
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  margin: 0;
`
const DropdownToggle = ({ label, icon, active, onClick }) => (
  <ToggleContainer onClick={onClick} active={active}>
    {icon && <ToggleIcon src={icon} />}
    {label && <ToggleLabel>{label}</ToggleLabel>}
  </ToggleContainer>
)

class _Dropdown extends React.Component {
  state = {
    open: true,
  }

  handleClickOutside = e => {
    this.setState({ open: false })
  }

  handleClickInside = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { label, icon, children } = this.props
    return (
      <DropdownContainer>
        <DropdownToggle
          label={label}
          icon={icon}
          active={this.state.open}
          onClick={this.handleClickInside}
        />
        {this.state.open && <DropdownOptions>{children}</DropdownOptions>}
      </DropdownContainer>
    )
  }
}

export const Dropdown = onClickOutside(_Dropdown)
