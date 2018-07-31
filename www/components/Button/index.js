import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'
import { TextStyle } from 'components/TextStyle'

import iconXCircleRed from 'static/assets/icons/ui/x-circle-red.svg'

import {
  colors,
  spacing,
  fontWeights,
  fontSizes,
  fontFamily,
  borderRadius,
  transition,
  opacity,
} from 'utils/theme'

const ButtonIcon = styled(Icon)`
  height: 18px;
  margin-top: -2px;
  margin-right: ${spacing.small};
`

const loadingStyles = () => `
  opacity: 1;
  cursor: progress;
`

const errorStyles = () => `
  opacity: 1;
  background: ${colors.white};
  border-color: ${colors.danger};
  &:hover {
    border-color: ${colors.danger};
    background: ${colors.grayLightest};
  }
`

const themes = {
  primary: () => `
    color: ${colors.white};
      background: ${colors.primary};
      border-color: ${colors.primary};
      &:hover {
        border-color: ${darken(0.1, colors.primary)};
        background: ${darken(0.1, colors.primary)};
        box-shadow: ${colors.shadowActive};
        transform: translateY(-2px);
      }
  `,
  secondary: () => `
    color: ${colors.primary};
    background: transparent;
    border-color: transparent;
    &:hover {
      color: ${colors.white}
      border-color: ${darken(0.1, colors.primary)};
      background: ${darken(0.1, colors.primary)};
      box-shadow: ${colors.shadowActive};
      transform: translateY(-2px);
    }
  `,
  tertiary: () => `
    color: ${colors.secondary};
    background: transparent;
    border-color: transparent;
    opacity: ${opacity};
    &:hover {
      color: ${colors.secondary};
      border-color: transparent;
      background: ${colors.grayLightest};
      opacity: 1;
    }
    &:focus {
      opacity: 1;
    }
  `,
  danger: () => `
    color: ${colors.white};
    background: ${colors.danger};
    border-color: ${colors.danger};
    &:hover {
      border-color: ${darken(0.1, colors.danger)};
      background: ${darken(0.1, colors.danger)},
    }
  `,
}

const _Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 7px ${spacing.regular};
  outline: none;
  border-radius: ${borderRadius};
  border: 1px solid transparent;
  color: ${colors.secondary};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamily};
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};
  ${props => (props.color ? themes[props.color]() : themes.primary())};
  ${props => (props.status && props.status.loading ? loadingStyles() : null)};
  ${props => (props.status && props.status.error ? errorStyles() : null)};
`

const Status = ({ status, color, children }) => {
  if (status.error) {
    return (
      <React.Fragment>
        <ButtonIcon src={iconXCircleRed} />
        <TextStyle color="danger" weight="bold" size="small">
          Error! Try again
        </TextStyle>
      </React.Fragment>
    )
  } else if (status.loading) {
    return <Loading color={color} height="16px" />
  } else {
    return children
  }
}

export const Button = ({
  className,
  src,
  children,
  color,
  loading,
  status,
  ...props
}) => (
  <_Button className={className} status={status} color={color} {...props}>
    {src && <ButtonIcon src={src} />}
    {status ? (
      <Status status={status} color={color}>
        {children}
      </Status>
    ) : (
      children
    )}
  </_Button>
)
