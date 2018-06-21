import React from 'react'
import glamorous from 'glamorous'
import Linkify from 'react-linkify'

import { LinkStyles } from '../Link'

import { colors } from '../../utils/colors'
import { spacing } from '../../utils/spacing'
import * as typography from '../../utils/typography'

const P = glamorous.p(
  {
    color: colors.secondary,
    transition: 'all 0.25s ease-out',
    lineHeight: 1.4,
    whiteSpace: 'pre-wrap',
  },
  ({ color }) => ({
    color: colors[color || colors.secondary],
  }),
  ({ size }) => ({
    fontSize: typography.fontSize[size || 'regular'],
  }),
  ({ weight }) => ({
    fontWeight: typography.fontWeight[weight || 'regular'],
  }),
  ({ margin }) => ({
    margin: margin || `0 0 ${spacing.xsmall}`,
  }),
  ({ width }) => ({
    width: width === 'article' ? '510px' : '100%',
  }),
)

export const Text = props => (
  <Linkify
    properties={{
      target: '_blank',
      style: LinkStyles,
    }}
  >
    <P {...props}>{props.children}</P>
  </Linkify>
)
