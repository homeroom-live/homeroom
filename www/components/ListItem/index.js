import glamorous from 'glamorous'

import { FlexRow } from '../FlexRow'

import { colors, shadow } from '../../utils/colors'
import { spacing } from '../../utils/spacing'

export const ListItem = glamorous(FlexRow)({
  position: 'relative',
  padding: spacing.regular,
  marginBottom: spacing.small,
  background: colors.white,
  cursor: 'pointer',
  ...shadow,
})
