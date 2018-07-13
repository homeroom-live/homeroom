import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from 'components/Icon'

import {
  colors,
  spacing,
  fontWeights,
  fontSizes,
  fontFamily,
  borderRadius,
  transition,
} from 'utils/theme'

const ButtonIcon = styled(Icon)`
  height: 18px;
  margin-top: -2px;
  margin-right: ${spacing.small};
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

  danger: {
    color: colors.white,
    background: colors.danger,
    borderColor: colors.danger,
    ':hover': {
      borderColor: darken(0.1, colors.danger),
      background: darken(0.1, colors.danger),
    },
  },

  cancel: {
    color: colors.grayDarker,
    background: 'transparent',
    borderColor: 'transparent',
    ':hover': {
      color: colors.white,
      borderColor: darken(0.1, colors.grayDarker),
      background: darken(0.1, colors.grayDarker),
    },
  },
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
`

export const Button = ({ src, children, ...props }) => (
  <_Button {...props}>
    {src && <ButtonIcon src={src} />}
    {children}
  </_Button>
)
