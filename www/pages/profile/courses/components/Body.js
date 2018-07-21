import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Link } from 'components/Link'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { ClassCardLarge } from 'components/ClassCard'

import iconFile from 'static/assets/icons/ui/file.svg'
import { colors, spacing, outline, shadow } from 'utils/theme'

const classroomsQuery = gql`
  query Classrooms {
    viewer {
      user {
        id
        teachingClassroomsConnection {
          aggregate {
            count
          }
          edges {
            node {
              id
              name
              teachersConnection {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              LessonsConnection(last: 3) {
                aggregate {
                  count
                }
                edges {
                  node {
                    id
                    name
                    thumbnail {
                      url
                    }
                  }
                }
              }
              studentsConnection {
                aggregate {
                  count
                }
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const ClassroomsCol = styled(FlexCol)`
  margin: ${spacing.medium} ${spacing.medium} ${spacing.xxxlarge};
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
const LessonCardLarge = styled(ClassCardLarge)`
  max-width: 33.33333333333333333%;
`

const Course = ({ node }) => (
  <CourseContainer>
    <StickyHeader src={iconFile} value={node.name}>
      <DeleteButton color="tertiary">Delete Course</DeleteButton>
    </StickyHeader>
    <LessonsRow>
      {node.lessons.map(lesson => (
        <LessonCardLarge
          node={lesson}
          key={lesson.id}
          href={`/profile/lessons/lesson/${lesson.id}`}
        />
      ))}
    </LessonsRow>
    <ShowMoreButton color="tertiary">Show More</ShowMoreButton>
  </CourseContainer>
)

/*
  <Query query={classroomsQuery} notifyOnNetworkStatusChange>
  {({ networkStatus, data }) => {
    switch (networkStatus) {
      case 7: {
        const user = data.viewer.user

        return (
        */
export const Body = ({ data }) => (
  <ClassroomsCol>
    {data.courses.map(node => <Course key={node.id} node={node} />)}
  </ClassroomsCol>
)

//         }
//         default: {
//           return null
//         }
//       }
//     }}
//   </Query>
// )
