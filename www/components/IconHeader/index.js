import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'components/FlexRow'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

import { spacing, colors } from 'utils/theme'

const Header = styled(FlexRow)`
  align-items: center;
  padding: ${spacing.regular};
  border-bottom: 1px solid ${colors.grayLighter};
`
const HeaderText = styled(Text)`
  margin: 0;
  margin-right: ${spacing.xsmall};
`

export const IconHeader = ({ src, value, children, className }) => (
  <Header className={className}>
    <Icon src={src} inline />
    <HeaderText weight="bold" margin="0">
      {value}
    </HeaderText>
    {children}
  </Header>
)
