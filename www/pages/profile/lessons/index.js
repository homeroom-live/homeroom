import React, { Fragment } from 'react'
import { NetworkStatus } from 'apollo-client'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Components

import { Navbar } from 'components/Navbar'
import { SideNav } from 'components/SideNav'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import * as LessonCard from 'components/LessonCard'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { EmptyState } from 'components/EmptyState'
import { Footer } from 'components/Footer'
import { LoadingIllustration } from 'components/Loading'

// Icons

import iconVideoGray from 'static/assets/icons/ui/video-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Utils

import { colors, spacing, outline, borderRadius } from 'utils/theme'

// GraphQL

const viewerLessonsQuery = gql`
  query ViewerLessons($cursor: String) {
    viewer {
      user {
        id
        lessonsConnection(first: 6, after: $cursor)
          @connection(key: "lessonsConnection") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              ...LessonCard
            }
          }
          aggregate {
            count
          }
        }
      }
    }
  }
  ${LessonCard.fragments.card}
`

// Elements

const Container = styled.section`
  width: 100%;
  padding: ${spacing.medium};
  margin-bottom: ${spacing.medium};
`
const SectionCol = styled(FlexCol)`
  ${outline()};
`
const LessonCardLarge = styled(LessonCard.LessonCardLarge)`
  max-width: 33.333333333333333%;
`
const SectionRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const ShowMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid ${colors.grayLighter};
`
const NewLessonLink = styled(Link)`
  margin-left: auto;
`
const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 4;
  background: ${colors.white};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`

// Lessons

class LessonsPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  handleFetchMore = (fetchMore, cursor) => e => {
    e.preventDefault()

    fetchMore({
      variables: { cursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousEdges = previousResult.viewer.user.lessonsConnection.edges
        const newEdges = fetchMoreResult.viewer.user.lessonsConnection.edges
        const pageInfo = fetchMoreResult.viewer.user.lessonsConnection.pageInfo
        const aggregate =
          fetchMoreResult.viewer.user.lessonsConnection.aggregate

        const newLessonsConnection = {
          ...previousResult.viewer.user.lessonsConnection,
          pageInfo,
          edges: [...previousEdges, ...newEdges],
          aggregate,
        }

        const newUser = {
          ...previousResult.viewer.user,
          lessonsConnection: newLessonsConnection,
        }

        return newEdges.length
          ? {
              ...previousResult.viewer,
              user: newUser,
            }
          : previousResult
      },
    })
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav activeSection="lessons">
          <Container>
            <SectionCol>
              <StickyHeader src={iconVideo} value="Lessons">
                <NewLessonLink href="/profile/lessons/new">
                  <Button color="primary">New Lesson</Button>
                </NewLessonLink>
              </StickyHeader>
              <SectionRow>
                <Query query={viewerLessonsQuery} notifyOnNetworkStatusChange>
                  {({ networkStatus, data, fetchMore }) => {
                    switch (networkStatus) {
                      case NetworkStatus.loading: {
                        return <LoadingIllustration />
                      }

                      case NetworkStatus.fetchMore:
                      case NetworkStatus.ready: {
                        const lessons = data.viewer.user.lessonsConnection

                        if (lessons.aggregate.count === 0) {
                          return (
                            <EmptyState
                              src={iconVideoGray}
                              value="There aren’t any lessons right now!"
                            />
                          )
                        } else {
                          return (
                            <Fragment>
                              {lessons.edges.map(({ node }) => (
                                <LessonCardLarge key={node.id} node={node} />
                              ))}
                              <ShowMoreButton
                                onClick={this.handleFetchMore(
                                  fetchMore,
                                  lessons.pageInfo.endCursor,
                                )}
                                color="tertiary"
                              >
                                Show More
                              </ShowMoreButton>
                            </Fragment>
                          )
                        }
                      }

                      default: {
                        return null
                      }
                    }
                  }}
                </Query>
              </SectionRow>
            </SectionCol>
          </Container>
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(LessonsPage, { setup: true })
