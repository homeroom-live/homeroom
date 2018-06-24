import React from 'react'
import glamorous from 'glamorous'

import * as typography from '../../utils/typography'
import { colors } from '../../utils/colors'

const PriceWrapper = glamorous.span({
  color: colors.primary,
  fontSize: typography.fontSize.small,
})

export const Price = ({ children, value, ...props }) => (
  <PriceWrapper {...props}>
    {typeof value === 'number' ? `$${value}` : value}
  </PriceWrapper>
)
