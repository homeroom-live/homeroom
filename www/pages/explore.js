import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'

// Components

import { Navbar } from 'components/Navbar'
import { WelcomeHero } from 'components/WelcomeHero'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Footer } from 'components/Footer'

import { Lessons } from 'components/Lessons'

// Icons

import iconVideo from 'static/assets/icons/ui/video.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconGraphBar from 'static/assets/icons/ui/graph-bar.svg'

// Utils

import { spacing, colors } from 'utils/theme'
import { NetworkStatus } from '../node_modules/apollo-client'

// Elements

const SideNavigationCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 250px !important;
  height: 100vh;
  padding: ${spacing.medium};
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLightest};
  box-shadow: 15px 0 30px 0 rgba(66, 75, 84, 0.1);
  box-sizing: border-box;
`
const SideNavigationButton = styled(Button)`
  justify-content: flex-start;
`
const TeachLink = styled(Link)`
  margin-top: auto;
`
const TeachButton = styled(Button)`
  width: 100%;
`

const ContainerRow = styled(FlexRow)`
  align-items: flex-start;
  scroll-behavior: smooth;
`
const HeroCol = styled(FlexCol)`
  max-width: 1024px;
  margin: ${spacing.medium} auto;
  padding: 0 ${spacing.medium};
  scroll-behavior: smooth;
`

// GraphQL

const viewerQuery = gql`
  query Viewer {
    viewer {
      user {
        id
      }
      requiresSetup
    }
  }
`

// Explore

class ExplorePage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  scrollToId = () => {}

  render() {
    return (
      <>
        <Navbar activePage="explore" />
        <Query
          query={viewerQuery}
          errorPolicy="ignore"
          notifyOnNetworkStatusChange
        >
          {({ networkStatus, data }) => {
            switch (networkStatus) {
              case NetworkStatus.ready: {
                if (!data.viewer) {
                  return <WelcomeHero />
                } else {
                  return null
                }
              }
              default: {
                return <WelcomeHero />
              }
            }
          }}
        </Query>
        <ContainerRow>
          <SideNavigationCol>
            <SideNavigationButton
              color="tertiary"
              src={iconVideo}
              onClick={() => this.scrollToId('#liveLessons')}
            >
              Live
            </SideNavigationButton>
            <SideNavigationButton
              color="tertiary"
              src={iconGraphBar}
              onClick={() => this.scrollToId('#popularLessons')}
            >
              Popular
            </SideNavigationButton>
            <SideNavigationButton
              color="tertiary"
              src={iconHome}
              onClick={() => this.scrollToId('#subscribedLessons')}
            >
              Subscribed
            </SideNavigationButton>
            <TeachLink href="/teach">
              <TeachButton color="primary">Start Teaching</TeachButton>
            </TeachLink>
          </SideNavigationCol>
          <HeroCol>
            <Lessons
              id="liveLessons"
              icon={iconVideo}
              label="Live Lessons"
              query={''}
            />
            <Lessons
              id="popularLessons"
              icon={iconGraphBar}
              label="Popular Lessons"
              query={''}
            />
            <Lessons
              id="subscribedLessons"
              icon={iconHome}
              label="Subscribed Lessons"
              query={''}
            />
          </HeroCol>
        </ContainerRow>
        <Footer />
      </>
    )
  }
}

export default ExplorePage
