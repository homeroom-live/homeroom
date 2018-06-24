import React from 'react'
import glamorous from 'glamorous'

import { colors } from '../../utils/colors'

const HedaingWrapper = glamorous.h2({
  color: colors.secondary,
})

export const Heading = ({ text }) => <HedaingWrapper>{text}</HedaingWrapper>
