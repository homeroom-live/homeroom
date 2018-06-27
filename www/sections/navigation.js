import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Navbar, NavbarBrand } from 'reactstrap'
import glamorous from 'glamorous'

// Components

import { FlexRow } from '../components/FlexRow'
import { Logo } from '../components/Logo'
import { Icon } from '../components/Icon'
import { UserDropdown } from '../components/UserDropdown'

import { colors } from '../utils/colors'
import { spacing } from '../utils/spacing'
import { fontSize, fontWeight } from '../utils/typography'

import iconHelpWhite from '../static/assets/icons/ui/help-white.svg'

const navbarStyles = {
  default: {
    flexWrap: 'nowrap',
    padding: spacing.regular,
    background: colors.black,
    borderBottom: `4px solid ${colors.primary}`,
  },
  transparent: {
    flexWrap: 'nowrap',
    padding: spacing.regular,
    zIndex: 1,
  },
}

const iconStyles = {
  marginRight: spacing.small,
  opacity: 0.7,
  ':hover': {
    opacity: 1,
  },

  '@media(max-width: 992px)': {
    padding: 0,
    marginTop: '6px',
  },
}

const linkActiveStyles = {
  color: colors.white,
  opacity: 1,
  textDecoration: 'none',
}

const NavbarLink = glamorous.a(
  {
    margin: `0 ${spacing.small}`,
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold,
    color: colors.white,
    opacity: 0.75,
    ':hover': linkActiveStyles,
    ':focus': linkActiveStyles,
  },
  ({ href, pathname }) => (href === pathname ? linkActiveStyles : {}),
)

// Queries

const viewer = gql`
  query {
    viewer {
      user {
        id
        picture {
          url
        }
      }
    }
  }
`

// Navigation

const NavigationComponent = ({ transparent, router }) => (
  <Navbar style={transparent ? navbarStyles.transparent : navbarStyles.default}>
    <FlexRow css={{ alignItems: 'center', flex: 1 }}>
      <Link href="/" prefetch passHref>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </Link>
      <Link href="/explore" passHref>
        <NavbarLink pathname={router.pathname}>Explore</NavbarLink>
      </Link>
    </FlexRow>
    <FlexRow css={{ flex: 0, alignItems: 'center' }}>
      <Link href="mailto:team@homeroom.live">
        <a>
          <Icon src={iconHelpWhite} css={iconStyles} />
        </a>
      </Link>

      <Query
        query={viewer}
        fetchPolicy="network-only"
        errorPolicy="ignore"
        notifyOnNetworkStatusChange
      >
        {({ networkStatus, data }) => {
          switch (networkStatus) {
            case 7: {
              if (data.viewer) {
                return <UserDropdown user={data.viewer.user} />
              } else {
                return (
                  <Link href="/signup">
                    <a>Login</a>
                  </Link>
                )
              }
            }
            default: {
              return null
            }
          }
        }}
      </Query>
    </FlexRow>
  </Navbar>
)

export const Navigation = withRouter(NavigationComponent)
