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

const Class = () => <div>foo</div>

const Classroom = ({ id, name, numberOfClasses, classes }) => (
  <div>
    <header>
      <h2>{name}</h2>
      <Link
        href={`/dashboard/classes/new?classroomId=${id}`}
        as={`/dashboard/classes/new/${id}`}
      >
        <a>New class</a>
      </Link>
    </header>
    <div>
      <label>Classes: {numberOfClasses}</label>
      {classes.map(_class => (
        <Class
          key={_class.id}
          name={_class.name}
          picture={_class.picture.url}
        />
      ))}
    </div>
  </div>
)

export const ClassroomsAndClasses = () => (
  <Query query={classroomsQuery} notifyOnNetworkStatusChange>
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 7: {
          const user = data.viewer.user

          return (
            <Fragment>
              {user.teaching_classrooms.classrooms.map(classroom => (
                <Classroom
                  key={classroom.id}
                  id={classroom.id}
                  name={classroom.name}
                  numberOfClasses={classroom.classes.count}
                  classes={classroom.classes.classes}
                />
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
)
