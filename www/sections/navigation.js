import React from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Navbar, NavbarBrand } from 'reactstrap'

// Components

import { FlexRow } from '../components/FlexRow'
import { Logo } from '../components/Logo'
import { Icon } from '../components/Icon'
// import { UserDropdown } from '../components/UserDropdown'

import { colors } from '../utils/colors'
import { spacing } from '../utils/spacing'

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

// Queries

const viewer = gql`
  query {
    viewer {
      user {
        picture {
          url
        }
      }
    }
  }
`

// Navigation

export const Navigation = ({ transparent }) => (
  <Query query={viewer} skip>
    {({ loading, data, error }) => (
      <Navbar
        style={transparent ? navbarStyles.transparent : navbarStyles.default}
      >
        <FlexRow css={{ alignItems: 'center', flex: 1 }}>
          <Link href="/">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </Link>

          <Link to="/browse">Browse</Link>

          {!loading && data.viewer && <Link href="/dashboard">Dashboard</Link>}
        </FlexRow>
        <FlexRow css={{ flex: 0, alignItems: 'center' }}>
          <Link href="mailto:team@homeroom.live">
            <Icon src={iconHelpWhite} css={iconStyles} />
          </Link>

          {/* {!loading && data.viewer && <UserDropdown user={data.viewer.user} />} */}

          {!loading && !data.viewer && <Link href="/">Login</Link>}
        </FlexRow>
      </Navbar>
    )}
  </Query>
)
