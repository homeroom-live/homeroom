import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createUser = gql`
  mutation Signup(
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

export const Setup = () => (
  <Mutation>
    {({ Signup }) => (
      <div>
        <div>a</div>
        Signup
      </div>
    )}
  </Mutation>
)
