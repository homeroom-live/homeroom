import NextLink from 'next/link'
import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from 'utils/colors'
import { fontSize, fontWeight } from 'utils/typography'

const StyledLink = styled.a`
  color: ${colors.primary};
  font-size: ${props => fontSize[props.size || 'regular']};
  font-weight: ${props => fontWeight[props.weight || 'regular']};

  transition: all 0.2s ease-out;
  &:hover,
  &:focus,
  &:active {
    color: ${darken(0.1, colors.primary)};
  }
`

export const Link = ({ href, children, ...props }) => (
  <NextLink prefetch href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
)
