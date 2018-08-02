import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// Lib

import { redirect } from 'lib/redirect'

// Components
import { Navbar } from 'components/Navbar'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { ImagePicker } from 'components/ImagePicker'
import { LoadingIllustration } from 'components/Loading'

// Icons

import iconUser from 'static/assets/icons/ui/user.svg'
import iconHome from 'static/assets/icons/ui/home.svg'

// Utils

import { spacing, outline, colors } from 'utils/theme'

// Styles

const AuthCol = styled(FlexCol)`
  display: block;
  position: relative;
  max-width: 512px;
  margin: ${spacing.xlarge} auto;
  padding: ${spacing.medium};
  ${outline()};
  box-shadow: ${colors.shadowActive};
  overflow: hidden;
`
const AuthHeaderCol = styled(FlexCol)``
const AuthLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const AuthButton = styled(Button)`
  width: 100%;
  margin-top: ${spacing.large};
`
const AuthForm = styled.form`
  margin-top: ${spacing.medium};
`
const TOSLink = styled(Link)`
  margin-left: ${spacing.xsmall};
`
const Illustration = styled(LoadingIllustration)`
  margin-top: 0;
`

// GraphQL

const setupMutation = gql`
  mutation CreateOrUpdateProfile(
    $name: String!
    $username: String!
    $picture: Upload!
  ) {
    updateProfile(name: $name, username: $username, picture: $picture) {
      id
      name
      username
      picture {
        id
        url
      }
    }
  }
`

// Setup

class Setup extends React.Component {
  state = {
    name: '',
    username: '',
    picture: null,
    terms: false,
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value,
    })
  }

  handlePictureChange = picture => {
    this.setState({
      picture,
    })
  }

  handleTermsChange = e => {
    this.setState({
      terms: !this.state.terms,
    })
  }

  handleSubmit = submit => e => {
    e.preventDefault()
    submit()
  }

  render() {
    return (
      <>
        <Navbar />
        <AuthCol>
          <Mutation
            mutation={setupMutation}
            variables={{
              name: this.state.name,
              username: this.state.username,
              picture: this.state.picture,
            }}
          >
            {(submit, { loading, error, data }) => {
              if (data) {
                setTimeout(() => redirect({}, '/'), 2000)
                return (
                  <React.Fragment>
                    <Illustration>
                      <Header>Success!</Header>
                      <Header size="regular" color="gray">
                        {' '}
                        Entering Homeroom...
                      </Header>
                    </Illustration>
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment>
                    <AuthHeaderCol>
                      <Header>Finish your profile</Header>
                      <Text weight="bold" color="gray">
                        Please provide some basic information to begin!
                      </Text>
                    </AuthHeaderCol>

                    <AuthForm onSubmit={this.handleSubmit(submit)}>
                      <AuthLabel size="regular">
                        Picture
                        <ImagePicker
                          required
                          value={this.state.picture}
                          onChange={this.handlePictureChange}
                        />
                      </AuthLabel>
                      <AuthLabel>
                        Full Name
                        <Input
                          required
                          autocomplete="name"
                          type="text"
                          icon={iconUser}
                          value={this.state.name}
                          onChange={this.handleNameChange}
                        />
                      </AuthLabel>
                      <AuthLabel>
                        Username
                        <Input
                          required
                          autocomplete="username"
                          type="text"
                          icon={iconHome}
                          value={this.state.username}
                          onChange={this.handleUsernameChange}
                        />
                      </AuthLabel>
                      <AuthLabel>
                        <FlexRow>
                          Do you accept our{' '}
                          <TOSLink
                            size="small"
                            weight="bold"
                            href="/tos"
                            target="_blank"
                          >
                            Terms of Service?
                          </TOSLink>
                        </FlexRow>
                        <Input
                          required
                          type="checkbox"
                          value={this.state.terms}
                          onChange={this.handleTermsChange}
                        />
                      </AuthLabel>
                      <AuthButton
                        type="submit"
                        color="primary"
                        status={{ loading, error, data }}
                      >
                        Continue
                      </AuthButton>
                    </AuthForm>
                  </React.Fragment>
                )
              }
            }}
          </Mutation>
        </AuthCol>
      </>
    )
  }
}

export default Setup
