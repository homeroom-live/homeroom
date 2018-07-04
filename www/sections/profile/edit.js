import React, { Fragment } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

// Components

import { Container } from 'reactstrap'
import { Heading } from '../../components/Heading'
import { Label } from '../../components/Label'
import { Loading } from '../../components/Loading'
import { ImagePicker } from '../../components/ImagePicker'

// GraphQL

const updateUser = gql`
  mutation updateUser(
    $name: String!
    $bio: String!
    $picture: Upload
    $receiveNotifications: Boolean!
  ) {
    updateUser(
      name: $name
      bio: $bio
      picture: $picture
      receiveNotifications: $receiveNotifications
    ) {
      user {
        id
        name
        picture {
          url
        }
      }
    }
  }
`

const viewer = gql`
  query {
    viewer {
      user {
        id
        picture {
          url
        }
      }
    }
  }
`

// Edit

export class Edit extends React.Component {
  state = {
    name: '',
    bio: '',
    picture: '',
    receiveNotifications: true,
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleBioChange = e => {
    this.setState({ bio: e.target.value })
  }

  handleNotificationsToggle = () => {
    this.setState(({ receiveNotifications }) => ({
      receiveNotifications: !receiveNotifications,
    }))
  }

  handlePictureChange = ([picture]) => {
    this.setState({ picture })
  }

  handlePictureRemove = () => {
    this.setState({ picture: null })
  }

  render() {
    return (
      <Query
        query={viewer}
        fetchPolicy="network-only"
        errorPolicy="ignore"
        notifyOnNetworkStatusChange
      >
        {({ loading: queryLoading, data: { viewer } }) => (
          <Mutation
            mutation={updateUser}
            variables={{
              name: this.state.name,
              bio: this.state.bio,
              picture: this.state.picture,
              receiveNotifications: this.state.receiveNotifications,
            }}
          >
            {(updateUser, { data, loading, error }) => {
              if (loading) {
                return <Loading />
              } else if (error) {
                return 'something went wrong'
              } else {
                return (
                  <Container>
                    <Heading text="We only need a few last details" />
                    <Label>
                      Your name:
                      <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </Label>
                    <Label>
                      A bit about you:
                      <textarea
                        value={this.state.bio}
                        onChange={this.handleBioChange}
                      />
                    </Label>
                    <Label>
                      How you look:
                      <ImagePicker
                        value={this.state.picture}
                        onChange={this.handlePictureChange}
                        onRemove={this.handlePictureRemove}
                      />
                    </Label>
                    <Label>
                      Do you want to receive occasional notifications about out
                      service?
                      <input
                        type="checkbox"
                        onChange={this.handleNotificationsToggle}
                        checked={this.state.receiveNotifications}
                      />
                    </Label>
                    <button type="submit" onClick={updateUser}>
                      {`Let's do this!`}
                    </button>
                  </Container>
                )
              }
            }}
          </Mutation>
        )}
      </Query>
    )
  }
}
