import React from 'react'
import { Redirect } from 'react-router'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

class BecomeATeacherCallback extends React.Component {
  handleBecomeTeacher = async () => {
    await this.props.updateUser({
      variables: {
        data: {
          isTeacher: true
        }
      }
    })
  }

  render() {
    this.handleBecomeTeacher()
    return (
      <Redirect to="/dashboard" />
    )
  }
}

const UPDATE_USER = gql`
  mutation updateUser($data: UserUpdateInput!) {
    updateUser(data: $data) {
      id
      isTeacher
    }
  }
`

export default compose(
  graphql(UPDATE_USER, {
    name: 'updateUser'
  })
)(BecomeATeacherCallback)
