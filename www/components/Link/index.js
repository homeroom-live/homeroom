import NextLink from 'next/link'
import styled from 'styled-components'
import { darken } from 'polished'

import { colors, fontSizes, fontWeights, transition } from 'utils/theme'

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-size: ${props => fontSizes[props.size || 'regular']};
  font-weight: ${props => fontWeights[props.weight || 'regular']};

  transition: ${transition};
  &:hover {
    text-decoration: underline;
    color: ${darken(0.1, colors.primary)};
  }
`

export const Link = ({ href, children, ...props }) => (
  <NextLink prefetch href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
)
