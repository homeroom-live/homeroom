import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'

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

const loading = {
  primary: () => `
    opacity: 1;
    background: ${colors.primary} !important;
  `,
  secondary: () => `
    opacity: 1;
    background: ${colors.primary} !important;
  `,
  tertiary: () => `
    opacity: 1;
    background: ${colors.secondary} !important;
  `,
  danger: () => `
    opacity: 1;
    background: ${colors.danger} !important;
  `,
}

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
      border: 2px solid ${colors.secondary};
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
  ${props => (props.loading ? loading[props.color || 'primary']() : null)};
`

export const Button = ({ src, children, loading, ...props }) => (
  <_Button loading={loading} {...props}>
    {src && <ButtonIcon src={src} />}
    {loading ? <Loading height="16px" /> : children}
  </_Button>
)
