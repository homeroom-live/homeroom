import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { NetworkStatus } from 'apollo-client'

// Utils

import { colors, spacing, fontSizes, fontWeights, opacity } from 'utils/theme'
import logoDark from 'static/assets/images/logos/logo-dark.svg'
import iconHelp from 'static/assets/icons/ui/help.svg'

// Components

import { FlexRow } from 'components/FlexRow'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { Dropdown, DropdownOption } from 'components/Dropdown'

const NavbarContainer = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 32px; // prevent Navbar from changing height on load
  padding: ${spacing.regular};
  background: ${({ transparent }) =>
    transparent ? 'transparent' : colors.white};
  border-bottom: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${colors.grayLighter}`};
  box-shadow: ${({ transparent }) =>
    transparent ? 'none' : colors.shadowBottomSmall};
  z-index: 15;
`
const NavLeft = styled(FlexRow)`
  flex: 1;
  align-items: center;
  height: 100%;
`
const Logo = styled.img`
  height: 24px;
  margin-right: ${spacing.regular};
`
const ImageLinkContainer = styled.span`
  display: flex;
`
const activeLinkStyles = color => `
  color: ${color};
  opacity: 1;
  text-decoration: none;
`
const NavLink = styled(Link)`
  margin: 0 ${spacing.small};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${props => props.color || colors.primary};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${props => activeLinkStyles(props.color || colors.primary)};
  }
  ${props =>
    props.active ? activeLinkStyles(props.color || colors.primary) : null};
`
const NavRight = styled(FlexRow)`
  flex: 0;
  align-items: center;
  height: 100%;
`
const HelpIcon = styled(Icon)`
  margin-right: ${spacing.regular};
  opacity: ${opacity};
  padding: 0;
  &:hover {
    opacity: 1;
  }
`
const DropdownLink = styled(Link)`
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`

// Queries

const viewerQuery = gql`
  query Viewer {
    viewer {
      user {
        id
        picture {
          id
          url
        }
      }
      status
    }
  }
`

// Navbar

export const Navbar = ({ transparent, activePage }) => (
  <NavbarContainer transparent={transparent}>
    <NavLeft>
      <Link href="/" prefetch>
        <ImageLinkContainer>
          <Logo src={logoDark} />
        </ImageLinkContainer>
      </Link>
      <NavLink color={colors.secondary} href="/" active={activePage === ''}>
        Explore
      </NavLink>
      <NavLink
        color={colors.secondary}
        href="/profile"
        active={activePage === 'profile'}
      >
        Profile
      </NavLink>
    </NavLeft>

    <NavRight>
      <Link href="mailto:team@homeroom.live">
        <ImageLinkContainer>
          <HelpIcon src={iconHelp} />
        </ImageLinkContainer>
      </Link>
      <Query
        query={viewerQuery}
        fetchPolicy="cache-and-network"
        errorPolicy="ignore"
        notifyOnNetworkStatusChange
      >
        {({ networkStatus, data }) => {
          switch (networkStatus) {
            case NetworkStatus.ready: {
              switch (data.viewer.status) {
                case 'REQUIRES_SETUP': {
                  return (
                    <NavLink color={colors.primary} href="/auth/setup">
                      Finish Profile
                    </NavLink>
                  )
                }

                case 'READY': {
                  return (
                    <Dropdown
                      image={
                        data.viewer.user.picture
                          ? data.viewer.user.picture.url
                          : ''
                      }
                    >
                      <DropdownLink href="/profile">
                        <DropdownOption>Profile</DropdownOption>
                      </DropdownLink>
                      <DropdownLink href="/auth/logout">
                        <DropdownOption>Logout</DropdownOption>
                      </DropdownLink>
                    </Dropdown>
                  )
                }

                case 'NO_VIEWER':
                default: {
                  return (
                    <NavLink color={colors.primary} href="/auth/signup">
                      Sign up & Login
                    </NavLink>
                  )
                }
              }
            }

            default: {
              return null
            }
          }
        }}
      </Query>
    </NavRight>
  </NavbarContainer>
)
