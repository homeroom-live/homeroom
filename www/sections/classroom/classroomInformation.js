import React, { Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// Components

import { Loading } from 'components/Loading'
import { STATUS } from 'utils/constants'

// GraphQL

const classroomQuery = gql`
  query ClassroomQuery($classroomId: ID!) {
    classroom(id: $classroomId) {
      id
      name
      description
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
          return (
            <Fragment>
              <header>
                <h2>{data.classroom.name}</h2>
                <p>{data.classroom.description}</p>
              </header>
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
            </Fragment>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
