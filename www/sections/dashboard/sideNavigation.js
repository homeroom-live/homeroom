import React from 'react'
import getConfig from 'next/config'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { lighten } from 'polished'

// Components

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { NavButton, activeDarkStyle } from 'components/NavButton'
import { Loading } from 'components/Loading'
import { Link } from 'components/Link'
import { Container } from 'components/Container'
// import StatTitle from 'components/StatTitle'

// Icons

import iconVideo from 'static/assets/icons/ui/video-light.svg'
import iconFile from 'static/assets/icons/ui/file-light.svg'
import iconHelp from 'static/assets/icons/ui/help-white.svg'
import iconCurrencyDollarWhite from 'static/assets/icons/ui/currency-dollar-white.svg'

// Styles

import {
  spacing,
  colors,
  fontSizes,
  fontWeights,
  opacity,
  HEIGHT_MINUS_NAVBAR,
} from 'utils/theme'
// import { colors } from 'utils/colors'

const styles = {
  height: '100%',
  minHeight: HEIGHT_MINUS_NAVBAR,
  marginRight: 'auto',
  paddingTop: spacing.medium,
  background: colors.grayDarkest,
}

const iconStyles = {
  padding: 0,
  paddingRight: spacing.small,
}

// Queryies

const stripeAccountUrl = gql`
  query {
    viewer {
      user {
        id
        stripeURL
      }
    }
  }
`

// Config

const { publicRuntimeConfig } = getConfig()

// Navigation

const NavigationItem = ({ label, icon, href, identifier, activePage }) => (
  <Link href={href} passHref>
    <NavButton
      theme="dark"
      activeStyle={activeDarkStyle}
      className={identifier === activePage ? 'active' : ''}
    >
      <Icon src={icon} css={iconStyles} />
      {label}
    </NavButton>
  </Link>
)

// const activeSideNavLinkStyles = `

// `
// min-height: ${HEIGHT_MINUS_NAVBAR};
const SideNav = styled(FlexCol)`
  height: ${HEIGHT_MINUS_NAVBAR};
  width: 250px;
  padding: ${spacing.medium} 0;
  background: ${colors.grayDarkest};
`
const activeSideNavLinkStyles = () => `
  opacity: 1;
    color: ${colors.white};
    background: ${lighten(0.1, colors.grayDarkest)};
`
const SideNavLink = styled(Link)`
  display: flex;
  padding: ${spacing.regular} ${spacing.medium};
  color: ${colors.white};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover,
  &:focus {
    ${activeSideNavLinkStyles()};
  }
  ${({ active }) => (active ? activeSideNavLinkStyles() : null)};
`
const SideNavIcon = styled(Icon)`
  margin-right: ${spacing.small};
  margin-top: -2px;
`

export const SideNavigation = ({ children, activePage }) => (
  <Container fluid>
    <Query query={stripeAccountUrl} notifyOnNetworkStatusChange>
      {({ networkStatus, data }) => {
        switch (networkStatus) {
          case 1: {
            return <Loading />
          }
          case 7: {
            return (
              <SideNav>
                <SideNavLink
                  size="small"
                  weight="bold"
                  href="/dashboard"
                  active={activePage === 'classrooms'}
                >
                  <SideNavIcon src={iconFile} />
                  Classrooms
                </SideNavLink>
                <SideNavLink
                  size="small"
                  weight="bold"
                  href="/dashboard"
                  active={activePage === 'stream'}
                >
                  <SideNavIcon src={iconVideo} />
                  Streaming
                </SideNavLink>
                <SideNavLink
                  size="small"
                  weight="bold"
                  href={
                    data.viewer.user.stripeURL
                      ? data.viewer.user.stripeURL
                      : publicRuntimeConfig.stripeSignupURL
                  }
                  active={activePage === 'stripe'}
                >
                  <SideNavIcon src={iconCurrencyDollarWhite} />
                  Stripe Account
                </SideNavLink>
              </SideNav>
            )
          }
          default: {
            return null
          }
        }
      }}
    </Query>
    <FlexCol>{children}</FlexCol>
  </Container>
)
