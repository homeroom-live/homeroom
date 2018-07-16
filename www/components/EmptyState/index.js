import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'

import { spacing } from 'utils/theme'

const EmptyStateContainer = styled(FlexCol)`
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
`
const EmptyStateIcon = styled(Icon)`
  margin-bottom: ${spacing.small};
`
const EmptyStateText = styled(Text)`
  margin: 0;
  text-align: center;
`

export const EmptyState = ({ src, value, css, className }) => (
  <EmptyStateContainer className={className}>
    <EmptyStateIcon src={src} />
    <EmptyStateText color="grayDarker" weight="bold">
      {value}
    </EmptyStateText>
  </EmptyStateContainer>
)
