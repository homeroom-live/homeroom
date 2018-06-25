import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// GraphQL

const createClass = gql`
  mutation CreateClass() {

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
