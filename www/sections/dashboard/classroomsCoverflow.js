import React, { Fragment } from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components

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

// Classrooms And Classes

const Class = ({ id, name, description, price, picture }) => (
  <div>
    <header>
      <div>Hero should be seen here (picture)</div>
      <h3>{name}</h3>
    </header>
    <main>
      <p>{description}</p>
      <div>{price}</div>
      <div>
        <Link
          href={{
            pathname: `/dashboard/classes/class`,
            query: { classId: id },
          }}
          as={`/dashboard/classes/class/${id}`}
          prefetch
        >
          <a>See more</a>
        </Link>
      </div>
    </main>
  </div>
)

const Classroom = ({ id, name, numberOfClasses, classes }) => (
  <div>
    <header>
      <h2>{name}</h2>
      <Link
        href={`/dashboard/classes/new?classroomId=${id}`}
        as={`/dashboard/classes/new/${id}`}
        prefetch
      >
        <a>New class</a>
      </Link>
    </header>
    <div>
      <label>Classes: {numberOfClasses}</label>
      {classes.map(({ node }) => (
        <Class
          key={node.id}
          id={node.id}
          name={node.name}
          description={node.description}
          // picture={_class.picture.url}
        />
      ))}
    </div>
  </div>
)

export const ClassroomsCoverflow = () => (
  <Query query={classroomsQuery} notifyOnNetworkStatusChange>
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 7: {
          const user = data.viewer.user

          return (
            <Fragment>
              <header>
                <h2>
                  Classrooms {user.teachingClassroomsConnection.aggregate.count}
                </h2>
                <Link href="/dashboard/classrooms/new">
                  <a>New classroom</a>
                </Link>
              </header>
              <main>
                {user.teachingClassroomsConnection.edges.map(({ node }) => (
                  <Classroom
                    key={node.id}
                    id={node.id}
                    name={node.name}
                    numberOfClasses={node.classesConnection.aggregate.count}
                    classes={node.classesConnection.edges}
                  />
                ))}
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
)
