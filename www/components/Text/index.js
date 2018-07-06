import React from 'react'
import styled from 'styled-components'
import Linkify from 'react-linkify'

import { StyledLink } from 'components/Link'

import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  transition,
} from 'utils/theme'

const P = styled.p`
  line-height: 1.3;
  white-space: pre-wrap;
  transition: ${transition};
  color: ${props => (props.color ? colors[props.color] : colors.secondary)};
  font-size: ${props =>
    props.size ? fontSizes[props.size] : fontSizes.regular};
  font-weight: ${props =>
    props.weight ? fontWeights[props.weight] : fontWeights.regular};
  margin: ${props => props.margin || `0 0 ${spacing.xsmall}`};
  width: 100%;
`

const StyledLinkify = StyledLink.withComponent(Linkify)

export const Text = ({ children, ...props }) => (
  <StyledLinkify target="_blank" {...props}>
    <P {...props}>{children}</P>
  </StyledLinkify>
)
