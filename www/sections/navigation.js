import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { STATUS } from 'utils/constants'
import { colors, spacing, fontSizes, fontWeights, opacity } from 'utils/theme'

import logoLight from 'static/assets/images/logos/logo-light.svg'
import iconHelpWhite from 'static/assets/icons/ui/help-white.svg'

// Components

import { FlexRow } from 'components/FlexRow'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { Dropdown, DropdownOption } from 'components/Dropdown'

const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 32px; // prevent Navbar from changing height on load
  padding: ${spacing.regular};
  background: ${({ transparent }) =>
    transparent ? 'transparent' : colors.black};
  border-bottom: ${({ transparent }) =>
    transparent ? 'none' : `4px solid ${colors.primary}`};
  z-index: 1;
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
const NavLink = color => styled(Link)`
  margin: 0 ${spacing.small};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${color};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${activeLinkStyles(color)};
  }
  ${({ active }) => (active ? activeLinkStyles(color) : null)};
`
const NavLinkWhite = NavLink(colors.white)
const NavLinkGreen = NavLink(colors.primary)
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
const LoadingPlaceholder = styled.span`
  display: block;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${colors.grayDarkest};
`

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

export const Navigation = ({ transparent, activePage }) => (
  <Navbar transparent={transparent}>
    <NavLeft css={{ alignItems: 'center', flex: 1 }}>
      <Link href="/" prefetch>
        <ImageLinkContainer>
          <Logo src={logoLight} />
        </ImageLinkContainer>
      </Link>
      <NavLinkWhite href="/explore" active={activePage === 'explore'}>
        Explore
      </NavLinkWhite>
      <NavLinkWhite href="/dashboard" active={activePage === 'dashboard'}>
        Teach
      </NavLinkWhite>
    </NavLeft>

    <NavRight>
      <Link href="mailto:team@homeroom.live">
        <ImageLinkContainer>
          <HelpIcon src={iconHelpWhite} />
        </ImageLinkContainer>
      </Link>
      <Query
        query={viewer}
        fetchPolicy="network-only"
        errorPolicy="ignore"
        notifyOnNetworkStatusChange
      >
        {({ networkStatus, data }) => {
          switch (networkStatus) {
            case STATUS.READY: {
              if (data.viewer) {
                return (
                  <Dropdown // image={data.viewer.user.picture.url}
                    image="https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg"
                  >
                    <DropdownLink href="/profile">
                      <DropdownOption>Profile</DropdownOption>
                    </DropdownLink>
                    <DropdownLink href="/dashboard">
                      <DropdownOption>Dashboard</DropdownOption>
                    </DropdownLink>
                    <DropdownLink href="/logout">
                      <DropdownOption>Logout</DropdownOption>
                    </DropdownLink>
                  </Dropdown>
                )
              } else {
                return <NavLinkGreen href="/signup">Get Started</NavLinkGreen>
              }
            }

            case STATUS.LOADING:
              return <LoadingPlaceholder />

            default: {
              return null
            }
          }
        }}
      </Query>
    </NavRight>
  </Navbar>
)
