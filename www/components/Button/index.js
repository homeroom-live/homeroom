import styled from 'styled-components'
import { darken } from 'polished'

import {
  colors,
  shadow,
  fontWeights,
  fontSizes,
  borderRadius,
  transition,
} from 'utils/theme'

const themes = {
  primary: () => `
    color: ${colors.white};
      background: ${colors.primary};
      border-color: ${colors.primary};
      &:hover {
        border-color: ${darken(0.1, colors.primary)},
        background: ${darken(0.1, colors.primary)},
      }
  `,
  // primary: {
  //   color: colors.white,
  //   background: colors.primary,
  //   borderColor: colors.primary,
  //   ':hover': {
  //     borderColor: darken(0.1, colors.primary),
  //     background: darken(0.1, colors.primary),
  //   },
  // },

  secondary: {
    color: colors.primary,
    background: 'transparent',
    borderColor: 'transparent',
    ':hover': {
      color: colors.white,
      borderColor: darken(0.1, colors.primary),
      background: darken(0.1, colors.primary),
    },
  },

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

export const Button = styled.button`
  position: relative;
  padding: 8px 24px;
  outline: none;
  border-radius: ${borderRadius};
  border: 1px solid transparent;
  color: ${colors.secondary};
  font-weight: ${fontWeights.bold};
  white-space: nowrap;
  cursor: pointer;
  transition: ${transition};
  ${props => (props.color ? themes[props.color]() : themes.primary())};
`
