import React, { Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// Components

import { Loading } from '../../components/Loading'

// GraphQL

const classQuery = gql`
  query ClassQuery($classId: ID!) {
    class(id: $classId) {
      id
      name
      description
      price
      picture {
        id
        url
      }
      schedule
      live
      duration
      video {
        id
        url
      }
      files {
        id
        name
        url
      }
      vod {
        id
        url
      }
      classroom {
        id
        name
      }
      messagesConnection {
        aggregate {
          count
        }
        edges {
          node {
            id
            text
            sender {
              id
              name
            }
          }
        }
      }
    }
  }
`

// Class Information

export const ClassInformation = withRouter(({ router }) => (
  <Query
    query={classQuery}
    variables={{ classId: router.query.classId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 1: {
          return <Loading />
        }
        case 7: {
          return (
            <Fragment>
              <header>
                <h2>{data.class.name}</h2>
                <div>
                  <h3>{data.class.classroom.name}</h3>
                  <Link
                    href={{
                      pathname: `/dashboard/classrooms/classroom/`,
                      query: {
                        classroomId: data.class.classroom.id,
                      },
                    }}
                    as={`/dashboard/classrooms/classroom/${
                      data.class.classroom.id
                    }`}
                    prefetch
                  >
                    <a>See classroom</a>
                  </Link>
                </div>
              </header>
              <main>
                <div>
                  <h4>Description</h4>
                  <p>{data.class.description}</p>
                </div>
                <div>
                  <h4>Price</h4>
                  <p>{data.class.price}</p>
                </div>
                <div>
                  <h4>Live</h4>
                  <p>
                    {data.class.live && 'Your classroom is LIVE!'}
                    {!data.class.live && 'Your classroom is offline...'}
                  </p>
                </div>
              </main>
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
