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
        teaching_classrooms {
          count
          classrooms {
            id
            name
            classes {
              count
              classes {
                id
                name
                picture {
                  url
                }
              }
            }
            students {
              count
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
          href={`/dashboard/classes/class?classId=${id}`}
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
      {classes.map(_class => (
        <Class
          key={_class.id}
          id={_class.id}
          name={_class.name}
          description={_class.description}
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
                <h2>Classrooms {user.teaching_classrooms.count}</h2>
                <Link href="/dashboard/classrooms/new">
                  <a>New classroom</a>
                </Link>
              </header>
              <main>
                {user.teaching_classrooms.classrooms.map(classroom => (
                  <Classroom
                    key={classroom.id}
                    id={classroom.id}
                    name={classroom.name}
                    numberOfClasses={classroom.classes.count}
                    classes={classroom.classes.classes}
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
