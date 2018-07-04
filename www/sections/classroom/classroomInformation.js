import React, { Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
// import { Thumbnail } from 'components/Thumbnail'
import { Loading } from 'components/Loading'
import { STATUS } from 'utils/constants'
import { shadow } from 'utils/colors'

// GraphQL

const classroomQuery = gql`
  query ClassroomQuery($classroomId: ID!) {
    classroom(id: $classroomId) {
      id
      name
      description
      teacher {
        id
        name
        url
        picture {
          id
          url
        }
      }
      classesConnection {
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
`

const ClassroomHeader = styled(FlexRow)`
  ${shadow()};
`

// Classroom Information

export const ClassroomInformation = withRouter(({ router }) => (
  <Query
    query={classroomQuery}
    variables={{ classroomId: router.query.classroomId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case STATUS.LOADING: {
          return <Loading />
        }
        case STATUS.READY: {
          console.log(data)
          return (
            <FlexCol className="container">
              <ClassroomHeader>
                {/* 
                <Thumbnail
                  src={data.classroom.teacher.picture.url}
                  size="medium"
                />
                */}
                <h2>{data.classroom.name}</h2>
                <p>{data.classroom.description}</p>
              </ClassroomHeader>
              <div>
                <h4>
                  Classes: {data.classroom.classesConnection.aggregate.count}
                </h4>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.classroom.classesConnection.edges.map(({ node }) => (
                      <tr key={node.id}>
                        <td>{node.name}</td>
                        <td>
                          <Link
                            href={{
                              pathname: `/dashboard/classes/class/`,
                              query: {
                                classId: node.id,
                              },
                            }}
                            as={`/dashboard/classes/class/${node.id}`}
                            prefetch
                          >
                            <a>See class</a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FlexCol>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
