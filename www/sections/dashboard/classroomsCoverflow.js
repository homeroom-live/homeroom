import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { ClassCard } from 'components/ClassCard'
import { ClassroomHeader } from 'sections/dashboard/classroomHeader'

import iconHome from 'static/assets/icons/ui/home.svg'
import iconPlusCircleWhite from 'static/assets/icons/ui/plus-circle-white.svg'
import iconPlusCircleGray from 'static/assets/icons/ui/plus-circle-gray.svg'
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
              teacher {
                id
                name
                url
              }
              classesConnection {
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
const ClassroomHeaderText = styled(Text)`
  margin-left: ${spacing.xsmall};
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
`
const ClassroomShowMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.regular};
  text-decoration: none;
  color: ${colors.gray};
  ${shadow()};
  &:hover {
    color: ${colors.gray};
    text-decoration: none;
  }
`

const Classroom = ({ id, name, numberOfClasses, classes, teacher }) => (
  <ClassroomContainer>
    <ClassroomHeader
      id={id}
      name={name}
      numberOfClasses={numberOfClasses}
      teacher={teacher}
    />
    <div>
      {classes.map(({ node }) => (
        <ClassCard
          node={node}
          key={node.id}
          href={`/dashboard/classes/class/${node.id}`}
          teacher={teacher}
        />
      ))}
    </div>
    <ClassroomShowMore
      href={`/dashboard/classrooms/classroom/${id}`}
      size="small"
      color="gray"
      weight="bold"
    >
      <NewIcon src={iconPlusCircleGray} /> View All Classes
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
                <ClassroomHeaderText color="gray" weight="bold" margin="0">
                  {user.teachingClassroomsConnection.aggregate.count}
                </ClassroomHeaderText>
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
                    teacher={node.teacher}
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
