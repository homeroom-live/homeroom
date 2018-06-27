import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components

import { Container, Row, Col } from 'reactstrap'
import { FlexCol } from '../../components/FlexCol'
import { Icon } from '../../components/Icon'
import { NavButton, activeDarkStyle } from '../../components/NavButton'
import { Loading } from '../../components/Loading'
// import StatTitle from 'components/StatTitle'

// Icons

import iconVideo from '../../static/assets/icons/ui/video-light.svg'
import iconFile from '../../static/assets/icons/ui/file-light.svg'
import iconHelp from '../../static/assets/icons/ui/help-white.svg'
import iconCurrencyDollarWhite from '../../static/assets/icons/ui/currency-dollar-white.svg'

// Styles

import { spacing, HEIGHT_MINUS_NAVBAR } from '../../utils/spacing'
import { colors } from '../../utils/colors'

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

export const SideNavigation = ({ children, activePage }) => (
  <Container fluid style={{ width: '100%', padding: 0, margin: 0 }}>
    <Row style={{ display: 'flex' }}>
      <Col sm={{ size: 12 }} md={{ size: 3 }} lg={{ size: 2 }}>
        <FlexCol css={styles}>
          <Query query={stripeAccountUrl} notifyOnNetworkStatusChange>
            {({ networkStatus, data }) => {
              switch (networkStatus) {
                case 1: {
                  return <Loading />
                }
                case 7: {
                  return (
                    <>
                      <NavigationItem
                        label="My Classes"
                        icon={iconFile}
                        href="/dashboard"
                        identifier="class"
                        activePage={activePage}
                      />
                      <NavigationItem
                        label="Classrooms"
                        icon={iconVideo}
                        href="/dashboard/classrooms"
                        identifier="classroom"
                        activePage={activePage}
                      />
                      <NavigationItem
                        label="Stripe Account"
                        icon={iconCurrencyDollarWhite}
                        href={
                          data.viewer.user.stripeURL
                            ? data.viewer.user.stripeURL
                            : publicRuntimeConfig.stripeSignupURL
                        }
                        identifier="stripe"
                        activePage={activePage}
                      />
                      <NavigationItem
                        label="How to Stream"
                        icon={iconHelp}
                        href="/dashboard/howtostream"
                        identifier="howtostream"
                        activePage={activePage}
                      />
                    </>
                  )
                }
                default: {
                  return null
                }
              }
            }}
          </Query>
        </FlexCol>
      </Col>
      <Col sm={{ size: 12 }} md={{ size: 9 }} lg={{ size: 10 }}>
        {children}
      </Col>
    </Row>
  </Container>
)
