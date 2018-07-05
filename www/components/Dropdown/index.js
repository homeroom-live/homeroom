import React from 'react'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { Thumbnail } from 'components/Thumbnail'
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
  min-width: 160px;
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
  color: ${colors.secondary};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  background: ${colors.white};
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: ${transition};
  opacity: ${opacity};
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    background: ${colors.grayLighter};
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
  margin-right: ${props => (props.margin ? spacing.small : 0)};
`
const ToggleImage = styled(Thumbnail)`
  margin-right: ${props => (props.margin ? spacing.small : 0)};
`
const ToggleLabel = styled.p`
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  margin: 0;
`
const DropdownToggle = ({ label, icon, image, active, onClick }) => (
  <ToggleContainer onClick={onClick} active={active}>
    {image && <ToggleImage src={image} margin={icon || label} />}
    {icon && <ToggleIcon src={icon} margin={label} />}
    {label && <ToggleLabel>{label}</ToggleLabel>}
  </ToggleContainer>
)

class _Dropdown extends React.Component {
  state = {
    open: false,
  }

  handleClickOutside = e => {
    this.setState({ open: false })
  }

  handleClickInside = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { label, icon, image, children } = this.props
    return (
      <DropdownContainer>
        <DropdownToggle
          label={label}
          icon={icon}
          image={image}
          active={this.state.open}
          onClick={this.handleClickInside}
        />
        {this.state.open && <DropdownOptions>{children}</DropdownOptions>}
      </DropdownContainer>
    )
  }
}

export const Dropdown = onClickOutside(_Dropdown)
