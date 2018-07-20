import React from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import { ImagePicker } from 'components/ImagePicker'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { Loading } from 'components/Loading'

import { colors, spacing, outline } from 'utils/theme'
import iconUser from 'static/assets/icons/ui/user.svg'

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

const updateUser = gql`
  mutation UpdateUser(
    $name: String!
    $bio: String!
    $picture: Upload
    $price: Float!
  ) {
    updateUser(name: $name, bio: $bio, picture: $picture, price: $price) {
      id
      name
      bio
    }
  }
`

class _UserForm extends React.Component {
  state = {
    name: '',
    email: '',
    username: '',
    bio: '',
    picture: null,
    price: '',
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    })
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value,
    })
  }

  handleDescriptionChange = e => {
    this.setState({
      bio: e.target.value,
    })
  }

  handlePictureChange = picture => {
    this.setState({
      picture: picture,
    })
  }

  handlePictureRemove = e => {
    this.setState({
      picture: null,
    })
  }

  render() {
    /*
    <Mutation
      mutation={updateUser}
      variables={{
        classroomId: this.props.router.query.classroomId,
        name: this.state.name,
        description: this.state.description,
        thumbnail: this.state.thumbnail,
        video: this.state.video,
        price: this.state.price,
        schedule: this.state.schedule,
        files: this.state.files,
      }}
    >
      {(updateUser, { loading, error, data }) => {
        if (loading) {
          return <Loading />
        } else if (error) {
          return 'something went wrong'
        } else if (data) {
          return (
            */
    return (
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
                onChange={this.handleNameChange}
                value={this.state.name}
              />
            </Label>
            <Label>
              Email
              <Input
                type="email"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </Label>
            <Label>
              Username
              <Input
                type="text"
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
                onRemove={this.handlePictureRemove}
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
                value={this.state.price}
              />
            </Label>
          </FlexCol>
        </NewUserForm>
        <BigSaveButton color="tertiary" type="submit">
          Save Profile
        </BigSaveButton>
      </NewUserCol>
    )
    /*
          }
        }}
      </Mutation>
    )
    */
  }
}

export const UserForm = withRouter(_UserForm)
