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
import { TextStyle } from 'components/TextStyle'

// Icons

import iconGraphBarWhite from 'static/assets/icons/ui/graph-bar-white.svg'
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
  background: ${colors.grayDarkest};
`
const SideNavSticky = styled(FlexCol)`
  position: sticky;
  top: 0;
  padding: ${spacing.medium} 0;
`
const activeSideNavLinkStyles = () => `
  opacity: 1;
  color: ${colors.white};
  background: ${lighten(0.1, colors.grayDarkest)};
  text-decoration: none;
`
const disabledSideNavLinkStyles = () => `
  opacity: 0.5;
  text-decoration: none;
  cursor: not-allowed;
  &:hover {
    opacity: 0.5;
    background: none;
  }
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
  ${({ disabled }) => (disabled ? disabledSideNavLinkStyles() : null)};
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
                <SideNavSticky>
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
                  <SideNavLink
                    size="small"
                    weight="bold"
                    href="/dashboard"
                    active={false}
                    disabled
                  >
                    <SideNavIcon src={iconGraphBarWhite} />
                    <FlexCol>
                      <TextStyle size="xxsmall">Coming Soon</TextStyle>
                      Insights
                    </FlexCol>
                  </SideNavLink>
                </SideNavSticky>
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
