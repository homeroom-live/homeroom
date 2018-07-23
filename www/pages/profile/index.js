import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import equal from 'deep-eql'

import { viewer } from 'data/viewer'

// Components

import { Navbar } from 'components/Navbar'
import { ImagePicker } from 'components/ImagePicker'
import { FlexCol } from 'components/FlexCol'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { Footer } from 'components/Footer'

import { SideNav } from 'pages/profile/components/SideNav'

// Icons

import iconUser from 'static/assets/icons/ui/user.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Utils

import { colors, spacing, outline } from 'utils/theme'

// GraphQL

const profileQuery = gql`
  query Viewer {
    viewer {
      user {
        id
        name
        bio
        price
        picture {
          url
        }
        receiveNotifications
      }
      requiresSetup
    }
  }
`

const updateUserMutation = gql`
  mutation CreateOrUpdateProfile(
    $name: String!
    $bio: String!
    $picture: Upload
    $price: Float!
    $receiveNotifications: Boolean!
  ) {
    updateProfile(
      name: $name
      bio: $bio
      picture: $picture
      price: $price
      receiveNotifications: $receiveNotifications
    ) {
      id
      name
      bio
      price
      picture {
        id
        url
      }
      receiveNotifications
    }
  }
`

// Elements

const NewUserCol = styled(FlexCol)`
  margin: ${spacing.medium};
  margin-bottom: ${spacing.xlarge};
`
const NewUserHeader = styled(IconHeader)`
  ${outline()};
  margin-bottom: ${spacing.regular};
`
const SaveButton = styled(Button)`
  margin-left: auto;
`
const NewUserForm = styled.form`
  display: flex;
  align-items: flex-start;
`
const NewUserFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
`
const BigSaveButton = styled(Button)`
  padding: ${spacing.regular};
  border: 1px solid ${colors.grayLighter};
`

// Profile

class Profile extends React.Component {
  state = {
    name: this.props.name,
    username: this.props.username,
    bio: this.props.bio,
    email: this.props.email,
    picture: this.props.picture,
    price: this.props.price,
    receiveNotifications: this.props.receiveNotifications,
  }

  handleNameChange = e => {
    e.preventDefault()

    this.setState({
      name: e.target.value,
    })
  }

  handleEmailChange = e => {
    e.preventDefault()

    this.setState({
      email: e.target.value,
    })
  }

  handleUsernameChange = e => {
    e.preventDefault()

    this.setState({
      username: e.target.value,
    })
  }

  handleDescriptionChange = e => {
    e.preventDefault()

    this.setState({
      bio: e.target.value,
    })
  }

  handlePictureChange = picture => {
    this.setState({
      picture,
    })
  }

  handlePriceChange = e => {
    e.preventDefault()

    this.setState({
      price: Math.max(0, e.target.value),
    })
  }

  shouldBeSaved = () => {
    return equal(this.props, this.state)
  }

  render() {
    return (
      <Mutation
        mutation={updateUserMutation}
        variables={{
          name: this.state.name,
          bio: this.state.bio,
          picture: this.state.picture,
          price: this.state.price,
          receiveNotifications: this.state.receiveNotifications,
        }}
      >
        {(updateUser, { loading, error, data }) => (
          <NewUserCol>
            <NewUserHeader src={iconUser} value="Profile">
              <SaveButton color="primary" onClick={updateUser}>
                Save Profile
              </SaveButton>
            </NewUserHeader>
            <NewUserForm onSubmit={updateUser}>
              <NewUserFormCol>
                <Label>
                  Name
                  <Input
                    type="text"
                    autocomplete="name"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </Label>
                <Label>
                  Email
                  <Input
                    type="email"
                    autocomplete="email"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </Label>
                <Label>
                  Username
                  <Input
                    type="text"
                    autocomplete="username"
                    onChange={this.handleUsernameChange}
                    value={this.state.username}
                  />
                </Label>
                <Label>
                  Description
                  <Textarea
                    onChange={this.handleDescriptionChange}
                    value={this.state.bio}
                  />
                </Label>
              </NewUserFormCol>

              <FlexCol>
                <Label size="regular">
                  Picture
                  <ImagePicker
                    value={this.state.picture}
                    onChange={this.handlePictureChange}
                  />
                </Label>
                <Label size="small">
                  Subscription Price
                  <Input
                    type="number"
                    onChange={this.handlePriceChange}
                    value={this.state.price}
                  />
                </Label>
                <Label>
                  Credit Card
                  <Input
                    type="text"
                    onChange={this.handlePriceChange}
                    autocomplete="creditcard"
                    value={this.state.price}
                  />
                </Label>
              </FlexCol>
            </NewUserForm>
            <BigSaveButton
              color="tertiary"
              type="submit"
              disabled={!this.shouldBeSaved()}
            >
              Save Profile
            </BigSaveButton>
            {loading && 'Loading'}
          </NewUserCol>
        )}
      </Mutation>
    )
  }
}

class ProfilePage extends React.Component {
  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="">
          <Query
            query={profileQuery}
            notifyOnNetworkStatusChange
            errorPolicy="ignore"
          >
            {({ networkStatus, data }) => {
              switch (networkStatus) {
                case NetworkStatus.ready: {
                  if (data.viewer.requiresSetup) {
                    return (
                      <Profile
                        name=""
                        bio=""
                        picture={null}
                        price={0}
                        receiveNotifications={true}
                      />
                    )
                  } else {
                    return (
                      <Profile
                        name={data.viewer.user.name}
                        bio={data.viewer.user.bio}
                        picture={data.viewer.user.picture}
                        price={data.viewer.user.price}
                        receiveNotifications={
                          data.viewer.user.receiveNotifications
                        }
                      />
                    )
                  }
                }

                default: {
                  return (
                    <Profile
                      name=""
                      bio=""
                      picture={null}
                      price={0}
                      receiveNotifications={false}
                    />
                  )
                }
              }
            }}
          </Query>
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(ProfilePage)
