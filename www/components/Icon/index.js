import glamorous from 'glamorous'

import { spacing } from '../../utils/spacing'

export const Icon = glamorous.img({
  height: '100%',
  padding: spacing.small,
  transition: 'all 0.25s ease-out',

  ':hover': {
    cursor: 'pointer',
  },
})
