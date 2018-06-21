import { Link } from 'next/link'
// import { LinkContainer as BsLinkContainer } from 'react-router-bootstrap'
import glamorous from 'glamorous'
import { darken } from 'polished'

import { colors } from '../../utils/colors'

const activeStyle = { color: darken(0.1, colors.primary) }

export const LinkStyles = {
  color: colors.primary,

  transition: 'all 0.2s ease-out',
  ':hover': activeStyle,
  ':focus': activeStyle,
  ':active': activeStyle,
}

// export const LinkInternal = glamorous(Link)(LinkStyles)
// export const LinkExternal = glamorous.a(LinkStyles)
// export const LinkContainer = glamorous(BsLinkContainer)(LinkStyles)
// export const LinkButton = glamorous.span(LinkStyles)
