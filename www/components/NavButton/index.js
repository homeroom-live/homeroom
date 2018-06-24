import glamorous from 'glamorous'

import { theme } from '../../utils/theme'
import { colors, shadow } from '../../utils/colors'
import * as typography from '../../utils/typography'
import { spacing, button, borderRadius } from '../../utils/spacing'

export const activeStyle = {
  zIndex: 1,
  color: colors.secondary,
  textDecoration: 'none',
  opacity: 1,
  ...shadow,
}

const disabledStyle = {
  boxShadow: 'none !important',
  transform: 'initial !important',
  opacity: '0.7 !important',
}

export const activeDarkStyle = {
  zIndex: 1,
  color: colors.white,
  background: colors.primary,
  borderColor: colors.primary,
  textDecoration: 'none',
  opacity: 1,
}

const themes = {
  dark: {
    color: colors.white,
    paddingTop: spacing.regular,
    paddingBottom: spacing.regular,
    background: colors.grayDarkest,
    borderRadius: '0 !important',

    ':hover': activeDarkStyle,
    ':focus': activeDarkStyle,
  },
}

export const NavButton = glamorous.a(
  {
    display: 'flex',
    alignItems: 'center',
    background: colors.white,
    padding: button,
    color: colors.secondary,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
    borderRadius: borderRadius,
    border: '1px solid transparent',
    position: 'relative',
    transition: theme.transition,
    opacity: 0.7,

    ':hover': activeStyle,
    ':focus': activeStyle,
  },
  ({ theme }) => themes[theme],
  ({ disabled }) => {
    return !disabled
      ? {}
      : {
          cursor: 'not-allowed',
          ':hover': disabledStyle,
          ':active': disabledStyle,
          ':focus': disabledStyle,
        }
  },
)

NavButton.defaultProps = { activeStyle: activeStyle }
