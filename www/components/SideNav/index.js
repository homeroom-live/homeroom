import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import getConfig from 'next/config'
import styled from 'styled-components'
import { lighten } from 'polished'
import { NetworkStatus } from 'apollo-client'

// Components

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'
import { Link } from 'components/Link'
import { Container } from 'components/Container'

// Icons

import iconUser from 'static/assets/icons/ui/user.svg'
import iconCurrencyDollar from 'static/assets/icons/ui/currency-dollar.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// Utils

import { spacing, colors, opacity, HEIGHT_MINUS_NAVBAR } from 'utils/theme'

// GraphQL

const stripeAccountUrl = gql`
  query Viewer {
    viewer {
      status
      user {
        id
      }
    }
  }
`

// Elements

const SideNavContainer = styled(FlexCol)`
  min-height: ${HEIGHT_MINUS_NAVBAR};
  width: 250px;
  max-width: 250px;
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLighter};
  box-shadow: 15px 0 30px 0 rgba(66, 75, 84, 0.1);
  z-index: 5;
`
// background: ${colors.grayDarkest};
const SideNavSticky = styled(FlexCol)`
  position: sticky;
  top: 0;
  padding: ${spacing.medium} 0;
`
const activeSideNavLinkStyles = `
  color: ${colors.secondary};
  text-decoration: none;
  opacity: 1;
  background: ${colors.grayLighter};
  `
// color: ${colors.white};
// background: ${lighten(0.1, colors.grayDarkest)};
const disabledSideNavLinkStyles = `
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
  color: ${colors.secondary};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${activeSideNavLinkStyles};
  }
  ${({ active }) => (active ? activeSideNavLinkStyles : null)};
  ${({ disabled }) => (disabled ? disabledSideNavLinkStyles : null)};
`
const SideNavIcon = styled(Icon)`
  margin-right: ${spacing.small};
  margin-top: -2px;
`

const { publicRuntimeConfig } = getConfig()

// SideNav

export const SideNav = ({ children, activeSection }) => (
  <Container fluid direction="row">
    <Query query={stripeAccountUrl} notifyOnNetworkStatusChange>
      {({ networkStatus, data }) => {
        switch (networkStatus) {
          case NetworkStatus.loading: {
            return <Loading />
          }
          case NetworkStatus.ready: {
            return (
              <SideNavContainer>
                <SideNavSticky>
                  <SideNavLink
                    size="small"
                    weight="bold"
                    href="/profile"
                    active={activeSection === ''}
                  >
                    <SideNavIcon src={iconUser} />
                    Profile
                  </SideNavLink>
                  <SideNavLink
                    size="small"
                    weight="bold"
                    href="/profile/lessons"
                    active={activeSection === 'lessons'}
                  >
                    <SideNavIcon src={iconVideo} />
                    Lessons
                  </SideNavLink>
                  {/*
                    <SideNavLink
                    size="small"
                    weight="bold"
                    href="/profile/courses"
                    active={activeSection === 'courses'}
                  >
                    <SideNavIcon src={iconFile} />
                    Courses
                  </SideNavLink>
                  */}
                  {data.viewer.status === 'READY' && (
                    <SideNavLink
                      size="small"
                      weight="bold"
                      href={
                        data.viewer.user && data.viewer.user.stripeId
                          ? data.viewer.user.stripeId
                          : publicRuntimeConfig.stripeSignupURL
                      }
                      active={activeSection === 'stripe'}
                    >
                      <SideNavIcon src={iconCurrencyDollar} />
                      Stripe Account
                    </SideNavLink>
                  )}
                </SideNavSticky>
              </SideNavContainer>
            )
          }
          default: {
            return null
          }
        }
      }}
    </Query>

    {children}
  </Container>
)
