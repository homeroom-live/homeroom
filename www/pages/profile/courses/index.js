import React, { Fragment } from 'react'
import { NetworkStatus } from 'apollo-client'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Components

import { Navbar } from 'components/Navbar'
import { SideNav } from 'components/SideNav'
import { Button } from 'components/Button'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Footer } from 'components/Footer'
import { TextStyle } from 'components/TextStyle'
import * as LessonCard from 'components/LessonCard'
import { IconHeader } from 'components/IconHeader'

// Icons

import iconFile from 'static/assets/icons/ui/file.svg'
import iconHome from 'static/assets/icons/ui/home.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Utils

import { colors, spacing, outline } from 'utils/theme'

// GraphQL

const viewerCoursesQuery = gql`
  query ViewerCoursesQuery {
    viewer {
      user {
        id
        coursesConnection {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
            }
          }
          aggregate {
            count
          }
        }
      }
    }
  }
`

// Elements

const ClassroomsCol = styled(FlexCol)`
  margin: ${spacing.medium} ${spacing.medium} ${spacing.xxxlarge};
`
const CoursesHeader = styled(IconHeader)`
  margin-bottom: ${spacing.medium};
  border: 1px solid ${colors.grayLighter};
`
const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 4;
  background: ${colors.white};
`
const DeleteButton = styled(Button)`
  margin-left: auto;
`
const CourseContainer = styled(FlexCol)`
  ${outline()};
  margin-bottom: ${spacing.large};
`
const ShowMoreButton = styled(Button)`
  width: 100%;
  border-top: 1px solid ${colors.grayLighter};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`
const LessonsRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const LessonCardLarge = styled(LessonCard.LessonCard)`
  max-width: 33.33333333333333333%;
`

// Courses

class CoursesPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav activeSection="courses">
          <ClassroomsCol>
            <Query query={viewerCoursesQuery} notifyOnNetworkStatusChange>
              {({ networkStatus, data }) => {
                switch (networkStatus) {
                  case NetworkStatus.ready: {
                    const courses = data.viewer.user.coursesConnection.edges

                    return (
                      <Fragment>
                        <CoursesHeader src={iconHome} value="Courses">
                          <TextStyle color="gray" weight="bold">
                            {data.viewer.user.coursesConnection.aggregate.count}
                          </TextStyle>
                        </CoursesHeader>
                        {courses.map(({ node }) => (
                          <CourseContainer key={node.id}>
                            <StickyHeader src={iconFile} value={node.name}>
                              <DeleteButton color="tertiary">
                                Delete Course
                              </DeleteButton>
                            </StickyHeader>
                            <LessonsRow>
                              {node.lessons.map(lesson => (
                                <LessonCardLarge
                                  node={lesson}
                                  key={lesson.id}
                                  href={`/profile/lessons/${lesson.id}`}
                                />
                              ))}
                            </LessonsRow>
                            <ShowMoreButton color="tertiary">
                              Show More
                            </ShowMoreButton>
                          </CourseContainer>
                        ))}
                      </Fragment>
                    )
                  }

                  default: {
                    return null
                  }
                }
              }}
            </Query>
          </ClassroomsCol>
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(CoursesPage, { setup: true })
