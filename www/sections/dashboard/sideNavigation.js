import React, { Fragment } from 'react'
import getConfig from 'next/config'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { lighten } from 'polished'

// Components

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'
import { Link } from 'components/Link'
import { Container } from 'components/Container'
// import StatTitle from 'components/StatTitle'

// Icons

import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconHomeWhite from 'static/assets/icons/ui/home-white.svg'
import iconCurrencyDollarWhite from 'static/assets/icons/ui/currency-dollar-white.svg'

// Styles

import { spacing, colors, opacity, HEIGHT_MINUS_NAVBAR } from 'utils/theme'

// Queries

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

const SideNav = styled(FlexCol)`
  min-height: ${HEIGHT_MINUS_NAVBAR};
  width: 250px;
  padding: ${spacing.medium} 0;
  background: ${colors.grayDarkest};
`
const activeSideNavLinkStyles = () => `
  opacity: 1;
  color: ${colors.white};
  background: ${lighten(0.1, colors.grayDarkest)};
  text-decoration: none;
`
const SideNavLink = styled(Link)`
  display: flex;
  padding: ${spacing.regular} ${spacing.medium};
  color: ${colors.white};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${activeSideNavLinkStyles()};
  }
  ${({ active }) => (active ? activeSideNavLinkStyles() : null)};
`
const SideNavIcon = styled(Icon)`
  margin-right: ${spacing.small};
  margin-top: -2px;
`

export const SideNavigation = ({ children, activeSection }) => (
  <Container fluid direction="row">
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
                  active={activeSection === ''}
                >
                  <SideNavIcon src={iconHomeWhite} />
                  Classrooms
                </SideNavLink>
                <SideNavLink
                  size="small"
                  weight="bold"
                  href="/dashboard"
                  active={activeSection === 'stream'}
                >
                  <SideNavIcon src={iconVideoWhite} />
                  Live
                </SideNavLink>
                <SideNavLink
                  size="small"
                  weight="bold"
                  href={
                    data.viewer.user.stripeURL
                      ? data.viewer.user.stripeURL
                      : publicRuntimeConfig.stripeSignupURL
                  }
                  active={activeSection === 'stripe'}
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
    <Fragment>{children}</Fragment>
  </Container>
)
