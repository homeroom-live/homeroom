import React, { Fragment } from 'react'
import getConfig from 'next/config'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { lighten } from 'polished'

import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'
import { Link } from 'components/Link'
import { Container } from 'components/Container'
import { TextStyle } from 'components/TextStyle'

import iconGraphBarWhite from 'static/assets/icons/ui/graph-bar-white.svg'
import iconUserWhite from 'static/assets/icons/ui/user-white.svg'
import iconCurrencyDollarWhite from 'static/assets/icons/ui/currency-dollar-white.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconFileWhite from 'static/assets/icons/ui/file.svg'

import { spacing, colors, opacity, HEIGHT_MINUS_NAVBAR } from 'utils/theme'

const { publicRuntimeConfig } = getConfig()
const stripeAccountUrl = gql`
  query {
    viewer {
      user {
        id
      }
    }
  }
`

const SideNavContainer = styled(FlexCol)`
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

export const SideNav = ({ children, activeSection, data }) => (
  <Container fluid direction="row">
    {/*
            <Query query={stripeAccountUrl} notifyOnNetworkStatusChange>
      {({ networkStatus, data }) => {
        switch (networkStatus) {
          case 1: {
            return <Loading />
          }
        case 7: { 
    return (
      */}
    <SideNavContainer>
      <SideNavSticky>
        <SideNavLink
          size="small"
          weight="bold"
          href="/profile"
          active={activeSection === ''}
        >
          <SideNavIcon src={iconUserWhite} />
          Profile
        </SideNavLink>
        <SideNavLink
          size="small"
          weight="bold"
          href="/lessons"
          active={activeSection === 'lessons'}
        >
          <SideNavIcon src={iconVideoWhite} />
          Lessons
        </SideNavLink>
        <SideNavLink
          size="small"
          weight="bold"
          href="/courses"
          active={activeSection === 'courses'}
        >
          <SideNavIcon src={iconFileWhite} />
          Courses
        </SideNavLink>
        <SideNavLink
          size="small"
          weight="bold"
          href={
            data.viewer.user.stripeId
              ? data.viewer.user.stripeId
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
    </SideNavContainer>
    {/*
    }
          default: {
            return null
          }
        }
      }}
    </Query>
  */}
    <Fragment>{children}</Fragment>
  </Container>
)
