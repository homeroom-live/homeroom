import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'components/FlexRow'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

import { spacing, outline, colors } from 'utils/theme'

const inlineStyles = () => `
  border: none;
  border-bottom: 1px solid ${colors.grayLighter};
  border-radius: 0;
`

const Header = styled(FlexRow)`
  align-items: center;
  padding: ${spacing.regular};
  ${outline()};
  ${props => (props.inline ? inlineStyles() : null)};
`
const HeaderText = styled(Text)`
  margin: 0;
  margin-right: ${spacing.xsmall};
`

export const IconHeader = ({ src, value, children, ...props }) => (
  <Header {...props}>
    <Icon src={src} inline />
    <HeaderText weight="bold">{value}</HeaderText>
    {children}
  </Header>
)
