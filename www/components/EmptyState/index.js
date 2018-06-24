import React from 'react'

import { FlexCol } from '../FlexCol'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { spacing } from '../../utils/spacing'
import { shadow } from '../../utils/colors'

const containerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.medium,
  ...shadow,
}

export const EmptyState = ({ icon, text, css, props }) => (
  <FlexCol {...props} css={{ ...containerStyles, ...css }}>
    <Icon src={icon} css={{ padding: 0, marginBottom: spacing.small }} />
    <Text
      size="xsmall"
      color="grayDarker"
      weight="bold"
      css={{ margin: 0, textAlign: 'center' }}
    >
      {text}
    </Text>
  </FlexCol>
)
