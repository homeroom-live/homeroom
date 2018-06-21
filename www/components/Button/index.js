import glamorous from 'glamorous'
import { darken } from 'polished'

import { button, borderRadius } from '../../utils/spacing'
import * as typography from '../../utils/typography'
import { colors, shadow } from '../../utils/colors'

const styles = {
  default: {},

  primary: {
    color: colors.white,
    background: colors.primary,
    borderColor: colors.primary,
    ':hover': {
      borderColor: darken(0.1, colors.primary),
      background: darken(0.1, colors.primary),
    },
  },

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

export const Button = glamorous.button(
  {
    outline: 'none',
    padding: button,
    fontWeight: typography.fontWeight.bold,
    borderRadius: borderRadius,
    position: 'relative',
    transition: 'all 0.25s ease-in',
    border: '1px solid transparent',
    color: colors.secondary,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ...shadow,
  },
  ({ theme }) => ({
    ...styles[theme || 'default'],
  }),
)
