import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { ClassCardMedium } from 'components/ClassCard'
import { ClassroomHeader } from 'sections/dashboard/classroomHeader'

import iconHome from 'static/assets/icons/ui/home.svg'
import iconPlusCircleWhite from 'static/assets/icons/ui/plus-circle-white.svg'
import { colors, spacing, outline, shadow } from 'utils/theme'

// GraphQL

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
              classesConnection(last: 3) {
                aggregate {
                  count
                }
                edges {
                  node {
                    id
                    name
                    picture {
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

// Components

const ClassroomsCol = styled(FlexCol)`
  margin: ${spacing.medium} ${spacing.medium} ${spacing.xxxlarge};
`
const ClassroomsHeader = styled(IconHeader)`
  display: flex;
  align-items: center;
  padding: ${spacing.regular};
  ${outline()};
`
const NewLink = styled(Link)`
  margin-left: auto;
`
const NewIcon = styled(Icon)`
  margin-top: -2px;
  margin-right: ${spacing.xsmall};
`

const ClassroomContainer = styled(FlexCol)`
  margin: ${spacing.regular} 0 ${spacing.xlarge};
  ${outline()};
`
const ClassroomShowMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.regular};
  text-decoration: none;
  color: ${colors.gray};
  ${shadow()};
  border: none;
  border-top: 1px solid ${colors.grayLighter};
  &:hover {
    color: ${colors.gray};
    text-decoration: none;
  }
`
const ClassesRow = styled(FlexRow)`
  flex-wrap: wrap;
`

const Classroom = ({ id, name, numberOfClasses, classes, teachers }) => (
  <ClassroomContainer>
    <ClassroomHeader
      id={id}
      name={name}
      numberOfClasses={numberOfClasses}
      teachers={teachers}
    />
    <ClassesRow>
      {classes.map(({ node }) => (
        <ClassCardMedium
          node={node}
          key={node.id}
          href={`/dashboard/classes/class/${node.id}`}
          teachers={teachers}
        />
      ))}
    </ClassesRow>
    <ClassroomShowMore
      href={`/dashboard/classrooms/classroom/${id}`}
      size="small"
      color="gray"
      weight="bold"
    >
      View All Classes
    </ClassroomShowMore>
  </ClassroomContainer>
)

export const ClassroomsCoverflow = () => (
  <Query query={classroomsQuery} notifyOnNetworkStatusChange>
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 7: {
          const user = data.viewer.user

          return (
            <ClassroomsCol>
              <ClassroomsHeader src={iconHome} value="Classrooms">
                <Text color="gray" weight="bold" margin="0">
                  {user.teachingClassroomsConnection.aggregate.count}
                </Text>
                <NewLink href="/dashboard/classrooms/new">
                  <Button color="primary" src={iconPlusCircleWhite}>
                    New classroom
                  </Button>
                </NewLink>
              </ClassroomsHeader>

              <main>
                {user.teachingClassroomsConnection.edges.map(({ node }) => (
                  <Classroom
                    key={node.id}
                    id={node.id}
                    name={node.name}
                    numberOfClasses={node.classesConnection.aggregate.count}
                    classes={node.classesConnection.edges}
                    teachers={node.teachersConnection.edges}
                  />
                ))}
              </main>
            </ClassroomsCol>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
)
