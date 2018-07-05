import React, { Fragment } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

// Components

import { Container } from 'reactstrap'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { ImagePicker } from '../../components/ImagePicker'

// GraphQL

const createUser = gql`
  mutation signup(
    $name: String!
    $bio: String!
    $picture: Upload
    $receiveNotifications: Boolean!
  ) {
    createUser(
      name: $name
      bio: $bio
      picture: $picture
      receiveNotifications: $receiveNotifications
    ) {
      user {
        id
        name
      }
    }
  }
`

// UserInfoForm

export class UserInfoForm extends React.Component {
  state = {
    name: '',
    bio: '',
    picture: null,
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

  handlePictureChange = picture => {
    this.setState({
      picture,
    })
  }

  render() {
    return (
      <Mutation
        mutation={createUser}
        variables={{
          name: this.state.name,
          bio: this.state.bio,
          picture: this.state.picture,
          receiveNotifications: this.state.receiveNotifications,
        }}
      >
        {(signup, { data, loading, error }) => {
          if (loading) {
            return <Loading />
          } else if (error) {
            return 'something went wrong'
          } else if (!loading && data) {
            return (
              <Fragment>
                You have successfully Logged in to Homeroom!
                <Link href="/explore">
                  <a>Start exploring!</a>
                </Link>
              </Fragment>
            )
          } else {
            return (
              <Container>
                <Header>We only need a few last details</Header>
                <label>Your name:</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <label>A bit about you:</label>
                <textarea
                  value={this.state.bio}
                  onChange={this.handleBioChange}
                />
                <label>How you look:</label>
                <ImagePicker
                  onChange={this.handlePictureChange}
                  value={this.state.picture}
                />
                <label>
                  Do you want to receive occasional notifications about out
                  service?
                </label>
                <input
                  type="checkbox"
                  onChange={this.handleNotificationsToggle}
                  checked={this.state.receiveNotifications}
                />
                <button type="submit" onClick={signup}>
                  {`Let's do this!`}
                </button>
              </Container>
            )
          }
        }}
      </Mutation>
    )
  }
}
