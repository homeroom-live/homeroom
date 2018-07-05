import glamorous from 'glamorous'

import { colors } from 'utils/colors'
import { fontSize, fontWeight } from 'utils/typography'
import { spacing } from 'utils/spacing'

export const Label = glamorous.label({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing.regular,
  marginBottom: spacing.regular,
  color: colors.grayDarker,
  fontWeight: fontWeight.bold,
  fontSize: fontSize.xsmall,
  textTransform: 'uppercase',
  letterSpacing: '1',

  ':focus': {
    color: colors.primary,
  },

  // '@media(max-width: 1023px)': {
  //   fontSize: '5vw'
  // }
})
