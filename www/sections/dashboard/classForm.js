import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// GraphQL

const createClass = gql`
  mutation CreateClass(
    $classroomId: ID!
    $name: String!
    $description: String!
    $files: [Upload!]
    $price: Float!
  ) {
    createClass(
      classroomId: $classroomId
      name: $name
      description: $description
      files: $files
      price: $price
    ) {
      id
    }
  }
`

// ClassForm

export class ClassForm extends React.Component {
  state = {
    name: '',
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <Mutation mutation={createClass}>
        {({ networkStatus, data }) => {
          switch (networkStatus) {
            case 7: {
              return 'foo'
            }
            default: {
              return 'bar'
            }
          }
        }}
      </Mutation>
    )
  }
}
