import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createUser = gql`
  mutation signup(
    $name: String!
    $bio: String!
    $receiveNotifications: String!
  ) {
    createUser(
      name: $name
      bio: $bio
      receiveNotifications: $receiveNotifications
    ) {
      id
    }
  }
`

export class Setup extends React.Component {
  state = {
    name: '',
    bio: '',
    receiveNotifications: true,
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleBioChange = e => {
    this.setState({
      bio: e.target.value,
    })
  }

  handleNotificationsToggle = () => {
    this.setState(({ receiveNotifications }) => ({
      receiveNotifications: !receiveNotifications,
    }))
  }

  render() {
    return (
      <Mutation mutation={createUser}>
        {({ signup }) => (
          <div>
            <div>a</div>
            Signup
          </div>
        )}
      </Mutation>
    )
  }
}
