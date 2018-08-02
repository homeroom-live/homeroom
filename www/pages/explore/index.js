import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { NetworkStatus } from 'apollo-client'

// Components

import { Navbar } from 'components/Navbar'
import { WelcomeHero } from 'components/WelcomeHero'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Footer } from 'components/Footer'
import { fragments } from 'components/LessonCard'
import { Lessons } from 'components/Lessons'
import { Classrooms } from 'components/Classrooms'

// Icons

import iconVideo from 'static/assets/icons/ui/video.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconGraphBar from 'static/assets/icons/ui/graph-bar.svg'

// Utils

import { spacing, colors, opacity } from 'utils/theme'

// Elements

const SideNavigationCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 250px !important;
  height: 100vh;
  padding: ${spacing.medium} ${spacing.regular};
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLightest};
  box-shadow: 15px 0 30px 0 rgba(66, 75, 84, 0.1);
  box-sizing: border-box;
`
const SideNavigationButton = styled(Button)`
  justify-content: flex-start;
`
const SideNavigationLabel = styled(SideNavigationButton)`
  margin-top: ${spacing.large};
  &:hover {
    opacity: ${opacity};
    background: none;
    cursor: initial;
  }
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
      status
    }
  }
`

const liveLessonsQuery = gql`
  query Viewer($cursor: String) {
    viewer {
      explore {
        liveLessonsConnection(first: 8, after: $cursor) {
          pageInfo {
            endCursor
          }
          edges {
            node {
              ...LessonCard
            }
          }
        }
      }
    }
  }
  ${fragments.card}
`

const hottestLessonsQuery = gql`
  query Viewer($cursor: String) {
    viewer {
      explore {
        hottestLessonsConnection(first: 8, after: $cursor) {
          pageInfo {
            endCursor
          }
          edges {
            node {
              ...LessonCard
            }
          }
        }
      }
    }
  }
  ${fragments.card}
`

const featuredClassroomsQuery = gql`
  query Viewer {
    viewer {
      explore {
        featuredClassroomsConnection(first: 5) {
          edges {
            node {
              id
              name
              username
              picture {
                id
                url
              }
              live {
                id
              }
            }
          }
        }
      }
    }
  }
`

// Explore

class ExplorePage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  scrollToId = id => e => {
    e.preventDefault()
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <>
        <Navbar activePage="" />
        <Query
          query={viewerQuery}
          errorPolicy="ignore"
          notifyOnNetworkStatusChange
        >
          {({ networkStatus, data }) => {
            switch (networkStatus) {
              case NetworkStatus.ready: {
                if (!data.viewer.user) {
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
              onClick={this.scrollToId('#liveLessons')}
            >
              Live
            </SideNavigationButton>
            <SideNavigationButton
              color="tertiary"
              src={iconGraphBar}
              onClick={this.scrollToId('#popularLessons')}
            >
              Popular
            </SideNavigationButton>

            <SideNavigationLabel color="tertiary" src={iconHome}>
              Featured
            </SideNavigationLabel>
            <Query query={featuredClassroomsQuery} notifyOnNetworkStatusChange>
              {({ networkStatus, data, fetchMore }) => (
                <Classrooms
                  networkStatus={networkStatus}
                  data={data.viewer.explore.featuredClassroomsConnection.edges}
                />
              )}
            </Query>

            <TeachLink href="/teach">
              <TeachButton color="primary">Start Teaching</TeachButton>
            </TeachLink>
          </SideNavigationCol>

          <HeroCol>
            <Query query={liveLessonsQuery} notifyOnNetworkStatusChange>
              {({ networkStatus, data, fetchMore }) => (
                <Lessons
                  id="liveLessons"
                  icon={iconVideo}
                  label="Live Lessons"
                  networkStatus={networkStatus}
                  data={data.viewer.explore.liveLessonsConnection.edges}
                  fetchMore={fetchMore}
                />
              )}
            </Query>
            <Query query={hottestLessonsQuery} notifyOnNetworkStatusChange>
              {({ networkStatus, data, fetchMore }) => (
                <Lessons
                  id="popularLessons"
                  icon={iconGraphBar}
                  label="Popular Lessons"
                  networkStatus={networkStatus}
                  data={data.viewer.explore.hottestLessonsConnection.edges}
                  fetchMore={fetchMore}
                />
              )}
            </Query>
          </HeroCol>
        </ContainerRow>
        <Footer />
      </>
    )
  }
}

export default ExplorePage
